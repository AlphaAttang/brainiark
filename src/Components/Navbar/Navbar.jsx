import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo_image.png'
import { Button } from '../ui/button'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
    return (
        <BrowserRouter>
            <div className="nav">
                <div className="nav-container">
                    <div className="navbar">
                        <div className="nav-brand">
                            <Link to='/'>
                                <figure className="nav-logo">
                                    <img src={logo} alt="Brainiark Logo" />
                                </figure>
                            </Link>
                        </div>
                        <ul className="nav-menu">
                            <li><Link to='#overview' smooth>Overview</Link></li>
                            <li><Link to='#features' smooth>Features</Link></li>
                            <li><Link to='#testimonials' smooth>Testimonials</Link></li>
                            <li><Link to='#pricing' smooth>Pricing</Link></li>
                        </ul>
                        <div className="nav-login">
                            <Button className="plain" variant="default">LOG IN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navbar