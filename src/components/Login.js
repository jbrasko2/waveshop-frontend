import React from 'react'
import { toggleSignup, handleLoginFormChange } from '../redux/actionCreators'
import { connect } from 'react-redux'

const Login = props => {
    const { signup, toggleSignup, form, handleLoginFormChange } = props
    const { username, password, passConf } = form
    return (
        <div className="loginForm">
            <h2>{signup ? "Sign Up" : "Login"}</h2>
            <form>
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
                <input type="submit" value="Continue" />
            </form>
            <br/>
            <button onClick={toggleSignup}>Or... {signup ? "Login" : "Sign Up"}</button>
        </div>
    )
}

const mapStateToProps = state => ({
    signup: state.user.signup,
    form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange })(Login)