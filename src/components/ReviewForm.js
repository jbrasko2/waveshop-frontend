import React from 'react'
import { connect } from 'react-redux'
import { } from '../redux/actionCreators'

const ReviewForm = props => {

    const onSubmit = event => {
        event.preventDefault()
    }

    return(
        <form onSubmit={ onSubmit }>
            <label htmlFor="rating">Rating: </label>
            <input 
                type="number" 
                id="rating" 
                name="rating" 
                value={rating} 
                onChange={handleReviewFormChange}
            /><br/>
            <label htmlFor="userPassword">Password: </label>
            <input 
                type="password" 
                id="userPassword" 
                name="password" 
                value={password}
                onChange={handleReviewFormChange} 
            /><br/>
            <input type="submit" value="Continue" />
        </form>
    )
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(ReviewForm)