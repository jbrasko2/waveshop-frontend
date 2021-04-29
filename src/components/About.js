import React from 'react'
import styled from 'styled-components/macro'


const About = () => {
    return (
        <Wrapper>
            <h1>About</h1>
            <p>Welcome to <strong>WaveShop</strong>! This website will allow you
            to explore synthesizers for sale and review them.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 30px;
`

export default About