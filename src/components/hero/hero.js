import React from 'react'
import './Hero.css'

import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


const hero = () => {
  return (
    <>

    <div className='hero-caption'>
    <h1>Executive Search Firm </h1>
    <h2>Specializing in Healthcare Recruitment</h2>

    <div className='section3-btn'>
<LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
<Link to="/contact">
        <button class="cta">
  <span>Contact Us</span>
  <svg viewBox="0 0 13 10" height="10px" width="15px">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>
</Link>
</LinkRoll>
</div>


    </div>



 <div class="section__hero">


    <div className="crossFade__image crossFade__image1">

    </div>

    <div className="crossFade__image crossFade__image2">

    </div>

    <div className="crossFade__image crossFade__image3">

</div>

 </div>
    </>
  )
}

export default hero
