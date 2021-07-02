import React, { Component } from 'react'
import { connect } from "react-redux";
import { loadImg, loadRotationDegrees } from '../store/actions/action.js'
import { cloudinaryService } from '../services/cloudinaryService.js'

class _Header extends Component {

    handleChange = () => async ({ target }) => {
        const imgUrl = await cloudinaryService.uploadImg(target)
        const img = new Image()
        img.crossOrigin = "Anonymous";
        img.src = imgUrl
        img.onload = () => {
            this.props.loadImg(img)
            this.props.loadRotationDegrees(0)
        }
    }

    render() {
        return (
            <header className="header">
                <div className="btn upload-btn">
                    <label htmlFor="file-upload">
                       <div className="square"></div>
                        <input style={{ display: 'none' }} onChange={this.handleChange('imgUrl')} type="file"
                            id="file-upload" name="file-upload"
                            accept="image/*">
                        </input>
                    </label>
                </div>
            </header >
        )
    }
}

const mapDispatchToProps = {
    loadImg,
    loadRotationDegrees
}


export const Header = connect(null, mapDispatchToProps)(_Header)