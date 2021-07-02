import React, { Component } from 'react'
import { connect } from "react-redux";
import { loadImg, loadRotationDegrees} from '../store/actions/action.js'
import {busService} from '../services/eventBusService.js'

class _Content extends Component {

    canvasRef = React.createRef()

    unsubscribe

    componentDidMount() {
        this.unsubscribe = busService.on('logToConsole', () => {
            this.logBlobToConsole()
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.img !== this.props.img) {
            this.loadImgToCanvas()
        }
        if (prevProps.degrees !== this.props.degrees) {
            this.rotateImg()
        }
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    loadImgToCanvas = () => {
        const { img } = this.props
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.drawImage(ctx, img, canvas.width, canvas.height)
    }

    rotateImg = () => {
        const { img, degrees } = this.props
        const canvas = this.canvasRef.current
        const canvasWidth = canvas.width
        const canvasHeight = canvas.height
        const ctx = canvas.getContext("2d")
        ctx.save()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(degrees * Math.PI / 180);
        this.drawImage(ctx, img, canvasWidth, canvasHeight, true)
        ctx.restore()
    }

    drawImage = (ctx, img, canvasWidth, canvasHeight, rotated = false) => {
        let xOffSet = rotated ? (-canvasWidth / 2) : 0
        let yOffSet = rotated ? (-canvasHeight / 2) : 0

        const orientation = this._getImgOrientation(img)

        switch (orientation) {
            case 'sqaure':
                this._drawSquareImage(ctx, img, xOffSet, yOffSet, canvasWidth, canvasHeight)
                break
            case 'horizontal':
                this._drawHorizontalImage(ctx, img, xOffSet, yOffSet, canvasWidth, canvasHeight)
                break
            case 'vertical':
                this._drawVerticalImage(ctx, img, xOffSet, yOffSet, canvasWidth, canvasHeight)
                break
        }
    }

    _drawHorizontalImage = (ctx, img, xOffSet, yOffSet, canvasWidth, canvasHeight) => {
        ctx.drawImage(img, img.width / 7, 0, (img.width / 7) * 5, img.height, xOffSet, yOffSet, canvasWidth, canvasHeight)
    }

    _drawVerticalImage = (ctx, img, xOffSet, yOffSet, canvasWidth, canvasHeight) => {
        ctx.drawImage(img, 0, img.height / 7, img.width, (img.height / 7) * 5, xOffSet, yOffSet, canvasWidth, canvasHeight)
    }

    _drawSquareImage = (ctx, img, xOffSet, yOffSet, canvasWidth, canvasHeight) => {
        img.height > canvasHeight ? ctx.drawImage(img, xOffSet, yOffSet, canvasWidth, canvasHeight) : ctx.drawImage(img, (canvasWidth - img.width) / 2 + xOffSet, (canvasHeight - img.height) / 2 + yOffSet, img.width, img.height)
    }

    _getImgOrientation = (img) => {
        let orientation
        if (img.naturalWidth === img.naturalHeight) {
            orientation = 'sqaure'
        }
        else {
            orientation = img.naturalWidth > img.naturalHeight ? 'horizontal' : 'vertical'
        }
        return orientation
    }

    handleClick = () => {
        let { degrees } = this.props
        degrees += 90
        this.props.loadRotationDegrees(degrees)
    }

    logBlobToConsole = () => {
        const canvas = this.canvasRef.current
        canvas.toBlob(
            blob => {
                const img=new Image()
                img.src = URL.createObjectURL(blob);
                console.log(`Link to the blob as an image from the canvas. (go to the full link, (include blob: in the beginning )): ${img.src}`)
            },
            'image/jpeg',
            0.9,
        )
    }

    render() {
        return (
            <div className="content-container" >
                <div className="canvas-container">
                    <canvas ref={this.canvasRef} id="canvas" height="300" width="300" >Canvas</canvas>
                </div>
                <button className="btn rotate-btn" onClick={this.handleClick}>Rotate</button >
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        img: state.img,
        degrees: state.degrees
    }
}

const mapDispatchToProps = {
    loadImg,
    loadRotationDegrees
}

export const Content = connect(mapStateToProps, mapDispatchToProps)(_Content)