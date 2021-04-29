import React from 'react'
import { connect } from 'react-redux'
import { reviewFormChange, submitReview } from '../redux/actionCreators'
import styled from 'styled-components/macro'

const ReviewForm = props => {

    const { content, rating } = props.form

    const onSubmit = event => {
        event.preventDefault()
        props.submitReview({...props.form, synth_id: props.synth_id})
    }

return(
    <Wrapper>
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
            <Submit type="submit" value="Submit" />
        </form>
    </Wrapper>
    )
}

const mapStateToProps = state => ({
    form: state.synths.reviewForm
})

const Wrapper = styled.div`
    margin: 12px 0;
    padding: 12px;
    border: 3px solid #c01a1a;

    h3 {
        color: #c01a1a;
    }
`

const Submit = styled.input`
    color: #c01a1a;
    background: white;
    border: 3px solid #c01a1a;
    padding: 5px 32px;
    margin: 12px 0;
    transition-duration: 0.4s;
    font-weight: 600;

    &:hover {
        color: white;
        background: #c01a1a;
        border-color: white; 
    }

    &:active {
        background: #9b1515
    }
`

export default connect(mapStateToProps, { reviewFormChange, submitReview })(ReviewForm)