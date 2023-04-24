import React from 'react'
import './AboutSection.css'
import Card7 from '../../assets/card7-min.jpg'


import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


const MissionSection = () => {
    return (
        <>
<section class="about-section">
    	<div class="container">
        	<div class="row clearfix">
            	
                <div class="content-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column">
                    	<div class="sec-title">
                    		<div class="title">About Us</div>
                        	<h2>We’re driven to help our clients hire team members and leaders who make a meaningful impact within their own orginization.</h2>
                        </div>
                        <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>

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
                
                <div class="image-column col-md-6 col-sm-12 col-xs-12">
                	<div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    	<div class="image">
                        <img src={ Card7 } alt="Therapy Session" loading="lazy"/>
                            <div class="overlay-box">
                            	<div class="year-box"><span class="number">5</span>Years <br /> Providing <br /> Service</div>
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
