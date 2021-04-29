import React from 'react'
import { removeFromCart } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Cart = props => {
    let cartSum = props.cart.reduce(function(prev, cur) {
        return prev + cur.qty;
    }, 0);

    let priceSum = props.cart.reduce(function(prev, cur){
        return (prev + (cur.price * cur.qty))
    }, 0)

    return (
        <Wrapper>
            <h1>Cart: {cartSum === 0 ? "Empty" : cartSum}</h1>
            <PriceBox>
                Total: ${priceSum.toFixed(2)}
            </PriceBox>
            <ul>
                {props.cart.map(synth => {
                    return (
                        <CartItemWrapper>
                            <ItemTitle>{synth.name} - Qty: {synth.qty}</ItemTitle>
                            <ItemImage src={synth.image} alt={synth.name} /><br/>
                            <h3>${synth.price}</h3>
                            <Link to={"/synths/" + synth.id}>
                                <button>
                                    View
                                </button>
                            </Link>
                            <button onClick={() => props.removeFromCart(synth.id)}>
                                Remove
                            </button>
                        </CartItemWrapper>
                    )
                })}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 30px;
`

const PriceBox = styled.div`
    width: fit-content;
    padding: 12px;
    color: white;
    background-color: #c01a1a;
`

const CartItemWrapper = styled.div`
    margin: 40px;
    padding: 40px;
    border: 3px solid black;
    width: 50%;
`

const ItemTitle = styled.li`
    list-style-type: none;
`

const ItemImage = styled.img`
    max-height: 200px;
    margin: 20px;
`

const mapStateToProps = state => ({cart: state.user.cart})

export default connect(mapStateToProps, { removeFromCart })(Cart)