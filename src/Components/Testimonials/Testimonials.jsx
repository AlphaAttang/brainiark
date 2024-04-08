import React from 'react'
import './Testimonials.css'
import testimonies from '../Assets/testimonies'
import Testimonies from '../Testimonies/Testimonies'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <div className="testimonials-head">
        <h1>What our <span>clients</span> are saying</h1>
        <p>Prioritize what is important like some of our other owners.</p>
      </div>
      <div className="testimonials-card">
        <div className="testimonials-slide">
            {testimonies.map((testimony, i) => {
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