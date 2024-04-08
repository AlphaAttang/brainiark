import React from 'react'
import './LogoSlider'
import './LogoSlider.css'
import Logo from '../Assets/logo_image.png'

const LogoSlider = () => {
    return (
        <div className="logos-container">
            <div className="logos">
                <div className="logos-slide">
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                </div>

                <div className="logos-slide">
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                    <figure>
                        <img src={Logo} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default LogoSlider