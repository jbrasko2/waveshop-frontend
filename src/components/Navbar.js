import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, getSynths } from '../redux/actionCreators'
import styled from 'styled-components/macro'

const Navbar = props => {
    let cartSum = props.cart.reduce(function(prev, cur) {
        return prev + cur.qty;
    }, 0);
    
    return (
        <nav>
            <NavButtonWrapper>
                <Link to="/">
                    <button onClick={props.getSynths}>Home</button>
                </Link>
                <Link to="/about" >
                    <button>
                        About
                    </button>
                </Link>
            </NavButtonWrapper>
            <UserButtonWrapper>
                {props.user.id ?
                <button onClick={props.logout}>Logout</button>
                :
                <Link to="/login">
                <button>
                    Login / Sign Up
                </button>
                </Link>
                }
                <Link to="/cart">
                    <button>Cart: {cartSum}</button>
                </Link>
            </UserButtonWrapper>
        </nav> 
    )
}

const NavButtonWrapper = styled.div`
    float: left;
`

const UserButtonWrapper = styled.div`
    float: right;
`

const mapStateToProps = state => ({user: state.user, cart: state.user.cart})

export default connect(mapStateToProps, { logout, getSynths })(Navbar)