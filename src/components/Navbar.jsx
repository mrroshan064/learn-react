import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Main</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar