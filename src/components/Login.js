import React from 'react'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

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
        <Wrapper>
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
                <Submit type="submit" value="Continue" />
                <p>Or</p>
            </form>
            <button onClick={toggleSignup}> {signup ? "Login" : "Sign Up"}</button>
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

const Wrapper = styled.div`
    margin: 0 30px;
`

const Submit = styled.input`
    color: #c01a1a;
    background: white;
    border: 3px solid #c01a1a;
    padding: 5px 32px;
    margin: 10px;
    transition-duration: 0.4s;
    font-weight: 600;

    &:hover {
        color: white;
        background: #c01a1a;
        border-color: white; 
    }

    &:active {
        background: #9b1515
    }
`

export default connect(mapStateToProps, { 
    toggleSignup, 
    handleLoginFormChange, 
    sendSignup,
    sendLogin 
})(Login)