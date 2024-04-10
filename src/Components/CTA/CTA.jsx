import React from 'react'
import './CTA.css'
import dashboard from '../Assets/dashboard.webp'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <div className="cta-container">
        <div className='cta'>
            <h1><span>Ready</span> to get started?</h1>
            <p>Sign up with one of our packages or speak with a Strategy Expert</p>
            <Button variant="default">CONTACT SALES</Button>
            <figure>
                <img src={dashboard} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default CTA