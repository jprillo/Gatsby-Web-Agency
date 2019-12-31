import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'


const CardOne = ({
  title,
  description,
  image, 
  alt,
  link,
 
}) => (
    <div className="main-card">
        
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={image} alt={alt} />

        <div className="card-button">
        <a  href={link}>Learn More</a>
        </div>
          
    
    </div>


  
)

CardOne.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,

  
  
}

export default CardOne
