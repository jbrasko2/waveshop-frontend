import React from 'react'
import { connect } from 'react-redux'
import { reviewFormChange, submitReview } from '../redux/actionCreators'

const ReviewForm = props => {

    const { content, rating } = props.form

    const onSubmit = event => {
        event.preventDefault()
        props.submitReview({...props.form, synth_id: props.synth_id})
    }

return(
    <div className="reviewForm">
        <h3>Write a review!</h3>
        <form onSubmit={ onSubmit }>
            <label htmlFor="rating">Rating: </label>
            <input 
                type="number" 
                min="0"
                max="5"
                id="rating" 
                name="rating" 
                value={rating} 
                onChange={props.reviewFormChange}
            /><br/>
            <label htmlFor="content">Content: </label><br/>
            <textarea 
                id="content" 
                name="content" 
                value={content}
                onChange={props.reviewFormChange} 
            ></textarea><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}

const mapStateToProps = state => ({
    form: state.synths.reviewForm
})

export default connect(mapStateToProps, { reviewFormChange, submitReview })(ReviewForm)