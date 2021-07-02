import React, { Component } from 'react'
import { Header } from './comps/Header.jsx'
import { Content } from './pages/Content.jsx'
import { Footer } from './comps/Footer.jsx'


export class App extends Component {

  render() {
    return (
      <div className="app main-container">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

