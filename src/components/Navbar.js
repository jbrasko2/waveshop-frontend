import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout, getSynths } from '../redux/actionCreators'

const Navbar = props => {
    let cartSum = props.cart.reduce(function(prev, cur) {
        return prev + cur.qty;
    }, 0);
    
    return (
        <nav>
            <div className="nav-buttons">
                <Link to="/">
                    <button onClick={props.getSynths}>Home</button>
                </Link>
                <Link to="/about" >
                    <button>
                        About
                    </button>
                </Link>
            </div>
            <div className="user-container">
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
            </div>
        </nav> 
    )
}

const mapStateToProps = state => ({user: state.user, cart: state.user.cart})

export default connect(mapStateToProps, { logout, getSynths })(Navbar)