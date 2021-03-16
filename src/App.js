import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCards from './containers/SynthCards'
import { getSynths } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getSynths()
  }

  render () {
    return (
      <>
        <h1>WaveShop</h1>
        <Switch>
          <Route path="/synths/:id" component={SynthPage} />
          <Route path="/synths" component={SynthCards} />
        </Switch>
      </>
    )
  }
}


export default connect(null, { getSynths })(App)
