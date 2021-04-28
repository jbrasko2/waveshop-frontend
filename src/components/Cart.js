import React from 'react'
import { removeFromCart } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = props => {
    let cartSum = props.cart.reduce(function(prev, cur) {
        return prev + cur.qty;
    }, 0);

    let priceSum = props.cart.reduce(function(prev, cur){
        return (prev + (cur.price * cur.qty))
    }, 0)

    return (
        <div className="cart">
            <h1>Cart: {cartSum === 0 ? "Empty" : cartSum}</h1>
            <ul>
                {props.cart.map(synth => {
                    return (
                        <div className="cart-items">
                            <li>{synth.name} - Qty: {synth.qty}</li>
                            <img src={synth.image} alt={synth.name} /><br/>
                            <h3>${synth.price}</h3>
                            <Link to={"/synths/" + synth.id}>
                                <button>
                                    View
                                </button>
                            </Link>
                            <button onClick={() => props.removeFromCart(synth.id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </ul>
            <div className="total-price-box">
                Total: ${priceSum.toFixed(2)}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({cart: state.user.cart})

export default connect(mapStateToProps, { removeFromCart })(Cart)