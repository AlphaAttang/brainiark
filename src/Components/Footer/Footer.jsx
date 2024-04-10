import React from 'react'
import './Footer.css'
import logo_image from '../Assets/logo_image.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer">
            <figure>
                <img src={logo_image} alt="" />
            </figure>
            <div className="copywright">
                <p>© 2024 - Powered by Brainiark360</p>
            </div>
            <ul>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer