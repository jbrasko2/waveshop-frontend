import React from 'react'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'

const Login = props => {
    const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
    const { username, password, passConf } = form
    
    const onSubmit = event => {
        event.preventDefault()
        if (signup){
            if (password === passConf){
                sendSignup({username: username, password: password})
                props.history.goBack()
            } else {
                alert("Passwords must match")
            }
        } else {
            sendLogin({username: username, password: password})
            props.history.goBack()
        }
    }
    return (
        <div className="loginForm">
            <h2>{signup ? "Sign Up" : "Login"}</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username: </label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={username} 
                    onChange={handleLoginFormChange}
                /><br/>

                <label htmlFor="userPassword">Password: </label>
                <input 
                    type="password" 
                    id="userPassword" 
                    name="password" 
                    value={password}
                    onChange={handleLoginFormChange} 
                /><br/>
                {signup && 
                    <>
                        <label htmlFor="passConf">Confirm Password: </label>
                        <input 
                            type="password" 
                            id="passConf" 
                            name="passConf" 
                            value={passConf} 
                            onChange={handleLoginFormChange}    
                        /><br/>
                    </>
                }
                <input className="submit-button" type="submit" value="Continue" />
                <p>Or</p>
            </form>
            <button onClick={toggleSignup}> {signup ? "Login" : "Sign Up"}</button>
        </div>
    )
}

const mapStateToProps = state => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, { 
    toggleSignup, 
    handleLoginFormChange, 
    sendSignup,
    sendLogin 
})(Login)