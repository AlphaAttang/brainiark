import React from 'react'
import './Testimonies.css'
import comma from '../Assets/inverted_commas.svg'

const Testimonies = (props) => {
  return (
    <div className='testimonies'>
        <figure>
            <img src={props.image} alt="" />
        </figure>
        <div className="testimonies-content">
            <div className="testimonies-testimony">
                <p>"{props.testimony}"</p>
            </div>
            <div className="testimonies-info">
                <p>{props.name}</p>
                <p>{props.profession}</p>
            </div>
        </div>
        <div className="commas">
            <img src={comma} alt="" />
        </div>
    </div>
  )
}

export default Testimonies