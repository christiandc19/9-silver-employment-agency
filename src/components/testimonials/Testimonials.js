import React from 'react'

import { AiFillStar } from 'react-icons/ai';


import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
     <div class="testimonials">
    <div class="testimonial-inner">
      <h1>Hear what our clients say...</h1>
      <div class="border"></div>
      
      <div class="row">
        <div class="column">
          <div class="testimonial">
            <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div class="name">Client One</div>
            <div class="stars">
              <AiFillStar className="fas fa-star" /> 
              <AiFillStar className="fas fa-star" /> 
              <AiFillStar className="fas fa-star" /> 
              <AiFillStar className="fas fa-star" /> 
              <AiFillStar className="fas fa-star" /> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
          </div>
        </div>
        
        <div class="column">
          <div class="testimonial">
            <img src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div class="name">Client Two</div>
            <div class="stars">
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate.</p>
          </div>
        </div>
        
        <div class="column">
          <div class="testimonial">
            <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div class="name">Client Three</div>
            <div class="stars">
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            <AiFillStar className="fas fa-star" /> 
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate!</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Testimonials
