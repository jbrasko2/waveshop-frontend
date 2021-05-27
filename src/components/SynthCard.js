import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const SynthCard = props => {
    const { image, name, shortDesc, price, id } = props
    return (
        <Wrapper>
            <h3><Link to={"/synths/" + id}>{name}</Link></h3>
            <p>{shortDesc}</p>
                <ImageWrapper>
                    <img src={image} alt={name} /><br/>
                </ImageWrapper>
            <h3>${price.toFixed(2)}</h3>
            <Link to={"/synths/" + id}>
                <button>
                    View
                </button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: inline-block;
    height: 600px;
    width: 900px;
    border: 3px dotted black;
    padding: 2%;
    margin: 30px;

    button {
        margin: 0;
    }
`

const ImageWrapper = styled.div`

    img {
        max-width: 600px;
        max-height: 300px;
    }
`

export default SynthCard