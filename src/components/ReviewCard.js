import React from 'react'
import styled from 'styled-components/macro'

const ReviewCard = props => { 
    const { username, content, rating } = props
    return (
        <Wrapper>
            <Username>{username}: </Username> <h3>{rating} STARS</h3>
            <p>{content}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 3px dotted black;
    padding: 0 24px;
    margin-bottom: 12px;

    h3 {
        display: inline-block;
    }
`

const Username = styled.h3`
    color: #c01a1a;
    display: inline;
`

export default ReviewCard