import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCards from './containers/SynthCards'
import { favorite } from './redux/actionCreators'

class App extends Component {

  componentDidMount() {
    console.log(this.props)
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


export default connect(null, { favorite })(App)
