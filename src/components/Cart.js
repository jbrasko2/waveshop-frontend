import React from 'react'
import { removeFromCart, adjustQty } from '../redux/actionCreators'
import { connect } from 'react-redux'

const Cart = props => {
    return (
        <div className="cart">
            <h1>Cart:</h1>
            <ul>
                {props.cart.map(synth => {
                    return (
                        <div className="cart-items">
                            <li>{synth.name} - Qty: {synth.qty}</li>
                            <button onClick={() => props.removeFromCart(synth.id)}>
                                Remove
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({cart: state.user.cart})

export default connect(mapStateToProps, { removeFromCart, adjustQty })(Cart)