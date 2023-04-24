import React from 'react'
import './AboutSection.css'
import Card7 from '../../assets/card7-min.jpg'


import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


const MissionSection = () => {
    return (
        <>
<section class="about-section">
        	<div class="row clearfix">
            	

<div className='about-flex'>
<div className='about-left'>

                <div class="content-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column">
                    	<div class="sec-title">
                    		<div class="title">About Us</div>
                        	<h2>We’re driven to help our clients hire team members and leaders who make a meaningful impact within their own orginization.</h2>
                        </div>
                        <div class="text">We offer Locum Tenens, Travel Nursing, Travel Therapy, and Allied Health staffing agency services for California businesses, healthcare organizations and government entities. Our recruiting teams will introduce you to the healthcare specialists you need. From phlebotomists to physicians, CRNAs to physical therapists, medical assistants to HR managers, we’ve got you covered. </div>

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
                </div>
                
                </div>


                <div className='about-right'>


                <div class="image-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    	<div class="image">
                        <img src={ Card7 } alt="Therapy Session" loading="lazy"/>
                            <div class="overlay-box">
                            	<div class="year-box"><span class="number">9</span>Years of <br /> Providing <br /> Service</div>
                            </div>
                        </div>
                    </div>
                </div>
                
</div>
</div>

            </div>
    </section>

</>
    )
}

export default MissionSection
