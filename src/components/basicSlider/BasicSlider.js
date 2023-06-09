import React from "react";
import "./BasicSlider.css";

import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'


const BasicSlider = () => {
  return (
    <>



<section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">

    <li id="carousel__slide1" tabindex="0" class="carousel__slide">

          <div className="slider-caption1">
            <h1>CONNECTING THE <br/ > RIGHT PEOPLE TO THE <br />RIGHT BUSINESS</h1>
            <h2>Specializing in Health Care Recruitment</h2>

            <div className='hero-btn'>
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

      <div class="carousel__snapper">
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>

    <li id="carousel__slide2" tabindex="0" class="carousel__slide">

        <div className="slider-caption1">
        <h1>ONE STEP TO YOUR <br />FUTURE STARTS HERE</h1>
        <h2>Find Your Dream Career</h2>
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

        <div class="carousel__snapper"></div>
        <a href="#carousel__slide1"
         class="carousel__prev">Go to previous slide</a>
        <a href="#carousel__slide3"
         class="carousel__next">Go to next slide</a>
    </li>

    <li id="carousel__slide3" tabindex="0" class="carousel__slide">

        <div className="slider-caption1">
        <h1>TEMPORARY <br/> STAFFING</h1>
        <h2>Specializing in Health Care recruitment</h2>


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

      <div class="carousel__snapper"></div>
      <a href="#carousel__slide2"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         class="carousel__next">Go to next slide</a>
    </li>


    <li id="carousel__slide4" tabindex="0" class="carousel__slide">

        <div className="slider-caption1">
        <h1>DIRECT HIRE <br/> RECRUITMENT</h1>
        <h2>Specializing in Health Care recruitment</h2>
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

      <div class="carousel__snapper"></div>
      <a href="#carousel__slide3"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         class="carousel__next">Go to first slide</a>
    </li>
  </ol>




  <aside class="carousel__navigation">



    <ol class="carousel__navigation-list">


      <li class="carousel__navigation-item">





        <a href="#carousel__slide1"
        
           class="carousel__navigation-button">Go to slide 1ggs</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2gsgs</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3gsdgs</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4gsgs</a>
      </li>
    </ol>
  </aside>
</section>


    </>
  );
};

export default BasicSlider;
