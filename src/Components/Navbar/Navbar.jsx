import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo_image.png'
import { Button } from '../ui/button'


const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-container">
                <div className="navbar">
                    <div className="nav-brand">
                        <figure className="nav-logo">
                            <img src={logo} alt="Brainiark Logo" />
                        </figure>
                    </div>
                    <ul className="nav-menu">
                        <li>Overview</li>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>Pricing</li>
                    </ul>
                    <div className="nav-login">
                        <Button variant="default">LOG IN</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar