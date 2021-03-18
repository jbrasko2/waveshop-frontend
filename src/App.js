import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCards from './containers/SynthCards'
import SynthPage from './containers/SynthPage'
import Login from './components/Login'
import { getSynths, autoLogin } from './redux/actionCreators'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    localStorage.token && this.props.autoLogin()
    this.props.getSynths()
  }

  render () {
    return (
      <>
        <h1>WaveShop</h1>
        {this.props.user.id ?
        <Switch>
          <Route path="/synths/:id" component={SynthPage} />
          <Route path="/synths" component={SynthCards} />
        </Switch>
        :
        <Login />
        }
      </>
    )
  }
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, { getSynths, autoLogin })(App)
