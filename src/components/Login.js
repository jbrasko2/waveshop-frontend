import React from 'react'
import { toggleSignup } from '../redux/actionCreators'
import { connect } from 'react-redux'

const Login = props => {
    const { signup, toggleSignup } = props
    return (
        <div className="loginForm">
            <h2>{signup ? "Sign Up" : "Login"}</h2>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" /><br/>
                <label htmlFor="userPassword">Password: </label>
                <input type="password" id="userPassword" /><br/>
                {signup && 
                    <>
                        <label htmlFor="passwordConf">Confirm Password: </label>
                        <input type="password" id="passwordConf" /><br/>
                    </>
                }
                <input type="submit" value="Continue" />
            </form>
            <br/>
            <button onClick={toggleSignup}>Or... {signup ? "Login" : "Sign Up"}</button>
        </div>
    )
}

const mapStateToProps = state => ({signup: state.user.signup})

export default connect(mapStateToProps, { toggleSignup })(Login)