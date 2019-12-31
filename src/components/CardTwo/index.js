import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'


const CardTwo = ({
  title,
  description,
  image, 
  alt,
  link,
 
}) => (
    <div className="main-card">

<img  src={image} alt={alt} />
        
        <h3 className="fix" >{title}</h3>
        <p>{description}</p>
        

        <div className="card-button">
        <a  href={link}>Learn More</a>
        </div>
          
    
    </div>


  
)

CardTwo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,

  
  
}

export default CardTwo
