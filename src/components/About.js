import React from 'react'
import styled from 'styled-components/macro'


const About = () => {
    return (
        <Wrapper>
            <h1>About</h1>
            <p>Welcome to <strong>WaveShop</strong>! This website will allow you
            to explore synthesizers for sale and leave reviews for them. <strong> You
            must be logged in to leave a review.</strong></p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 30px;
`

export default About