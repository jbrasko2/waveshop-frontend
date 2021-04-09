import './App.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './components/Title'
import Navbar from './components/Navbar'
import About from './components/About'
import Cart from './components/Cart'
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
      <div className="App">
        <Title />
        <Navbar />
        <br/>
        <Switch>
            <Route exact path="/" component={SynthCards} />
            <Route exact path="/synths" component={SynthCards} /> 
            <Route exact path="/synths/:id" component={SynthPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    )
  }
}

export default connect(null, { getSynths, autoLogin })(App)
