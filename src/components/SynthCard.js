import React from 'react'

const SynthCard = props => {
    const { image, name, short_desc, price } = props
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{short_desc}</p>
            <ul className="images">
                <li className="crop">
                    <img src={image} alt={name} /><br/>
                </li>
            </ul>
            <h3>${price}</h3>
        </div>
    )
}

export default SynthCard