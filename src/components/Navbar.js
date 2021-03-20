import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/about" >
                    <button>
                        About
                    </button>
                </Link>
            </div>
        </nav> 
    )
}

export default Navbar