import React from 'react'
import './Testimonials.css'
import testimonies from '../Assets/testimonies'
import Testimonies from '../Testimonies/Testimonies'
import p_image1 from '../Assets/profile_image1.jpeg'
import comma from '../Assets/inverted_commas.svg'


const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className="testimonials-head">
                <h1>What our <span>clients</span> are saying</h1>
                <p>Prioritize what is important like some of our other owners.</p>
            </div>
            <div className="testimonials-card" >
                <div className="testimonials-slider">
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Alpha Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Alpha Attang</p>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Archibong Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Daniel Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Alpha Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                </div>

                <div className="testimonials-slider">
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Alpha Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Alpha Attang</p>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Archibong Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Daniel Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                    <div className='testimonies'>
                        <figure>
                            <img src={p_image1} alt="" />
                        </figure>
                        <div className="testimonies-content">
                            <div className="testimonies-testimony">
                                <p>'The SproutCloud team has completely streamlined our business operations. Communication was excellent and overall we are very pleased'</p>
                            </div>
                            <div className="testimonies-info">
                                <p>Alpha Attang</p>
                                <p>Audio Engineer</p>
                            </div>
                        </div>
                        <div className="commas">
                            <img src={comma} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials