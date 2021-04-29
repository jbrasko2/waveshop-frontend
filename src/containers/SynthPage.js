import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSynth, unsetSynth, addToCart } from '../redux/actionCreators'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import styled from 'styled-components/macro'


class SynthPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setSelectedSynth(id)
    }

    componentWillUnmount() {
        this.props.unsetSynth()
    }

    renderPage = () => {
        const { id, name, image, price, shortDesc, longDesc, stock, history, reviews, user_id } = this.props
        return (
            <>
                <CardWrapper>
                    <h1>{name}</h1>
                    <p>{shortDesc}</p>
                    <img src={image} alt={name} />
                    <h3>${price}</h3>
                    <p>In-Stock: {stock}</p>
                    <br/>
                    <LongDesc>
                        <p>{longDesc}</p>
                    </LongDesc>
                    <AddToCart onClick={() => {
                        this.props.addToCart(id)
                        }}>
                        Add To Cart
                    </AddToCart>
                    <button onClick={history.goBack}>Back</button>
                </CardWrapper>
                <ReviewsWrapper>
                <h3>Reviews</h3>
                {/* need to wrap reviewForm to check if user is logged*/}
                    {user_id && <ReviewForm synth_id={id} />}
                    {reviews.map(review => <ReviewCard key={review.id} {...review} />)}
                </ReviewsWrapper>
            </>
        )
    }

    renderSpinner = () => <div className="loader"></div>

    render () {
        return (
            this.props.id ? this.renderPage() : this.renderSpinner()
        )
    }
}

const mapStateToProps = state => ({
    ...state.synths.selectedSynth,
    user_id: state.user.id
})

const CardWrapper = styled.div`
    padding-left: 2%;

    img {
        height: auto;
        max-width: 600px;
        width: 100%;
    }
`

const LongDesc = styled.div`
    width: 50%;
    border: 3px dotted black;
    padding: 0 24px;
    margin-bottom: 12px;
`

const ReviewsWrapper = styled.div`
    margin-left: 2%;
`

const AddToCart = styled.button`
    margin-left: 0;
`

export default connect(mapStateToProps, { setSelectedSynth, unsetSynth, addToCart })(SynthPage)