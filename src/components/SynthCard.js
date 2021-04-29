import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const SynthCard = props => {
    const { image, name, shortDesc, price, id } = props
    return (
        <Wrapper>
            <h3><Link to={"/synths/" + id}>{name}</Link></h3>
            <p>{shortDesc}</p>
            <ul className="images">
                <ImageLi>
                    <img src={image} alt={name} /><br/>
                </ImageLi>
            </ul>
            <h3>${price.toFixed(2)}</h3>
            <Link to={"/synths/" + id}>
                <button>
                    View
                </button>
            </Link>
            <br/><br/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 3px dotted black;
    padding-left: 2%;
    margin: 30px;

    button {
        margin: 0;
    }
`

const ImageLi = styled.li`
    display: grid;
    height: 100%;

    img {
        height: auto;
        max-width: 600px;
        width: 100%;
    }
`

export default SynthCard