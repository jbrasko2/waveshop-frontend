import React from 'react'

const ReviewCard = props => { 
    const { username, content, rating } = props
    return (
        <div className="review">
            <p>{username}: {rating} STARS</p>
            <p>{content}</p>
        </div>
    )
}

export default ReviewCard