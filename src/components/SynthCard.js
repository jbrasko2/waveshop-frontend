import React from 'react'
import { Link } from 'react-router-dom'

const SynthCard = props => {
    const { image, name, shortDesc, price, id } = props
    return (
        <div className="card">
            <h3><Link to={"/synths/" + id}>{name}</Link></h3>
            <p>{shortDesc}</p>
            <ul className="images">
                <li className="crop">
                    <img src={image} alt={name} /><br/>
                </li>
            </ul>
            <h3>${price}</h3>
            <Link to={"/synths/" + id}>
                <button>
                    View
                </button>
            </Link>
            <br/><br/>
        </div>
    )
}

export default SynthCard