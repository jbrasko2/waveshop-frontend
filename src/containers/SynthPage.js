import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSynth, unsetSynth, addToCart } from '../redux/actionCreators'
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'

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
                
                <div className="show">
                    <h1>{name}</h1>
                    <p>{shortDesc}</p>
                    <img src={image} alt={name} />
                    <h3>${price}</h3>
                    <p>In-Stock: {stock}</p>
                    <br/>
                    <div className="long-desc">
                        <p>{longDesc}</p>
                    </div>
                    <button onClick={() => {
                        this.props.addToCart(id)
                        }}>
                        Add To Cart
                    </button>
                    <button className="back-button" onClick={history.goBack}>Back</button>
                </div>
                <div className="reviews">
                {/* need to wrap reviewForm to check if user is logged*/}
                    {user_id && <ReviewForm synth_id={id} />}
                    {reviews.map(review => <ReviewCard key={review.id} {...review} />)}
                </div>
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

export default connect(mapStateToProps, { setSelectedSynth, unsetSynth, addToCart })(SynthPage)