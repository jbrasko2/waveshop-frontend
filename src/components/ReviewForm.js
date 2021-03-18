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
        <form onSubmit={ onSubmit }>
            <label htmlFor="rating">Rating: </label>
            <input 
                type="number" 
                id="rating" 
                name="rating" 
                value={rating} 
                onChange={props.reviewFormChange}
            /><br/>
            <label htmlFor="content">Content: </label>
            <textarea 
                id="content" 
                name="content" 
                value={content}
                onChange={props.reviewFormChange} 
            ></textarea><br/>
            <input type="submit" value="Continue" />
        </form>
    )
}

const mapStateToProps = state => ({
    form: state.synths.reviewForm
})

export default connect(mapStateToProps, { reviewFormChange, submitReview })(ReviewForm)