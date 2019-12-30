import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  heading,
  description,
  cover,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

<section>
<div className='hero-page'>
  <div className="flex">
    <div className="col-6">
      <h1>{title}</h1>
      <h2>{meta_description}</h2>
      <div className="flex max">
      <div className="primary-button">
            <a href="/contact">CONTACT</a>
        </div>
       
      </div>

 
    </div>
    <div className="col-6 hero-image">
    <img src={cover} alt="Smiley face"></img>
    </div>

  </div>
  
  </div>



</section>


    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  cover: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,  
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
