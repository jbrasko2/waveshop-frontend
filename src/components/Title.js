import React from 'react'
import styled from 'styled-components/macro'

const Title = () => {
    return (
        <Wrapper>
            <p>WaveShop</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    background: #c01a1a;
    font-family: 'Monoton', cursive;
    color: white;
    font-size: 300%;
`

export default Title