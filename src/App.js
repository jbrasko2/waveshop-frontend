import './App.css'
import React, { Component } from 'react'
import SynthCards from './containers/SynthCards'

class App extends Component {

  componentDidMount() {
    console.log('next step: fetch synths')
  }
  
  render () {
    return (
      <>
        <h1>WaveShop</h1>
        <SynthCards />
      </>
    )
  }
}

export default App
