import React from 'react'
import './Testimonials.css'
import testimonies from '../Assets/testimonies'
import Testimonies from '../Testimonies/Testimonies'

const Testimonials = () => {
  const concatenatedArray = testimonies.concat(testimonies)
  return (
    <div className='testimonials' id='testimonials'>
      <div className="testimonials-head">
        <h1>What our <span>clients</span> are saying</h1>
        <p>Prioritize what is important like some of our other owners.</p>
      </div>
      <div className="testimonials-card">
        <div className="testimonials-slider">
          {concatenatedArray.map((testimony, i) => {
            return <Testimonies
              key={i}
              id={testimony.id}
              image={testimony.image}
              testimony={testimony.testimony}
              name={testimony.name}
              profession={testimony.profession}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonials