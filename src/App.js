import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCards from './containers/SynthCards'
import SynthPage from './containers/SynthPage'
import Login from './components/Login'
import { getSynths, autoLogin, logout } from './redux/actionCreators'
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
        <button onClick={this.props.logout}>Logout</button>
        :
        <Login />
        }
        <br/>
        <Switch>
            <Route exact path="/" component={SynthCards} />
            <Route exact path="/synths" component={SynthCards} /> 
            <Route path="/synths/:id" component={SynthPage} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, { getSynths, autoLogin, logout })(App)
