import React from 'react'
import './BasicSlider.css'

const BasicSlider = () => {
  return (
  <>



    <div class="slider-container">
    <div class="slider">
      <div class="slides">

        <div id="slides__1" class="slide">
          <div class="slide__text">
            <h1>EXECUTIVE SEARCH FIRM</h1>
            <h2>Specializing in Health Care recruitment</h2>
            </div>
          <a class="slide__prev" href="#slides__4" title="Next"></a>
          <a class="slide__next" href="#slides__2" title="Next"></a>
        </div>
        <div id="slides__2" class="slide">
          <div class="slide__text">2</div>
          <a class="slide__prev" href="#slides__1" title="Prev"></a>
          <a class="slide__next" href="#slides__3" title="Next"></a>
        </div>
        <div id="slides__3" class="slide">
          <span class="slide__text">3</span>
          <a class="slide__prev" href="#slides__2" title="Prev"></a>
          <a class="slide__next" href="#slides__4" title="Next"></a>
        </div>
        <div id="slides__4" class="slide">
          <span class="slide__text">4</span>
          <a class="slide__prev" href="#slides__3" title="Prev"></a>
          <a class="slide__next" href="#slides__1" title="Prev"></a>
        </div>
      </div>


      <div class="slider__nav">
        <a class="slider__navlink" href="#slides__1"></a>
        <a class="slider__navlink" href="#slides__2"></a>
        <a class="slider__navlink" href="#slides__3"></a>
        <a class="slider__navlink" href="#slides__4"></a>
      </div>
    </div>
  </div> 
  

  </>
  )
}



export default BasicSlider
