import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import CardOne from '../CardOne'
import CardTwo from '../CardTwo'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  heading,
  description,
  cover,
 
  meta_title,
  meta_description,
  
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
<section className="hero-about">
<h3>We are passionate. We are creative. We are fade off.</h3>
<div className="flex">
  <div className="col-6">
<img src="/img/creatures.svg" alt="ok"></img>
  </div>
  <div className="col-6 text-left">
    <h4>Wordpress</h4>
<p>Latin language, Latin lingua Latina, Indo-European language in the Italic group and ancestral to the modern Romance languages. ... The modern Romance languages developed from the spoken Latin  </p>
  </div>
</div>
</section>


<section className="card-container">
  <h3>Services</h3>
<div className="flex">
  
<CardOne 
title= "Super Fast"
description= "dude knk i i idii ciddcid  k i i  kni ic  ci ci ol c "
image= "\img\test-icon.png"
alt= "bozo"
link="google.com"

/>

<CardTwo
title= "Web Design"
description= "dude knk k i i  kni ic  ci ci ol c ecbhdc ici scc sicqs j"
image= "\img\coffee.png"
alt= "bozo"
link="google.com"

/>

<CardOne 
title= "SEO"
description= "dude knk k i i  kni ic  ci ci ol c "
image= "\img\coffee.png"
alt= "bozo"
link="google.com"

/>

</div>
<div className="flex">
  
<CardOne 
title= "Super Fast"
description= "dude knk i i idii ciddcid  k i i  kni ic  ci ci ol c "
image= "\img\coffee.png"
alt= "bozo"
link="google.com"

/>

<CardOne 
title= "Web Design"
description= "dude knk k i i  kni ic  ci ci ol c "
image= "\img\coffee.png"
alt= "bozo"
link="google.com"

/>

<CardOne 
title= "SEO"
description= "dude knk k i i  kni ic  ci ci ol c "
image= "\img\coffee.png"
alt= "bozo"
link="google.com"

/>

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
