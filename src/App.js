import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCards from './containers/SynthCards'
import { getSynths } from './redux/actionCreators'

class App extends Component {

  componentDidMount() {
    this.props.getSynths()
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


export default connect(null, { getSynths })(App)
