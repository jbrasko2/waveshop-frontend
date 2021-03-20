import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './components/Title'
import Navbar from './components/Navbar'
import About from './components/About'
import SynthCards from './containers/SynthCards'
import SynthPage from './containers/SynthPage'
import Login from './components/Login'
import { getSynths, autoLogin, logout } from './redux/actionCreators'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    localStorage.token && this.props.autoLogin()
    this.props.getSynths()
  }

  render () {
    return (
      <div className="App">
        <Title />
        <Navbar />
        {this.props.user.id ?
        <button onClick={this.props.logout}>Logout</button>
        :
        <Link to="/login">
          <button>
            Login / Sign Up
          </button>
        </Link>
        }
        <Switch>
            <Route exact path="/" component={SynthCards} />
            <Route exact path="/synths" component={SynthCards} /> 
            <Route path="/synths/:id" component={SynthPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({user: state.user})

export default connect(mapStateToProps, { getSynths, autoLogin, logout })(App)
