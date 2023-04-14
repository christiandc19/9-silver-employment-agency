import React from 'react'
import './Gallery.css'

import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'
import Card4 from '../../assets/card4.jpg'
import Card5 from '../../assets/card5.jpg'

const Cards = () => {
  return (
    <>

            <div className="cards-header container">
                <h1>CHOOSE THE RIGHT HOME</h1>
                <p>Staying at our sober living housing allows you to navigate your recovery at your own pace in a safe, structured environment. </p>
            </div>


<div class="card-wrap container">

<div class="tile"> 
  <Fade left>
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/north-citrus">
          <h1>MEDICAL CENTER AND SPECIALTY HOSPITALS</h1>
        </Link>
    </LinkRoll>
  </div>
 </div>




<div class="tile"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>


<div class="text">

          <h1>HEALTH SCIENCES HIGHER EDUCATION</h1>

  </div>

   </div>



 
<div class="tile"> 
<Fade top>
<img src={Card3} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>HUNTINGTON BEACH CALIFORNIA</h1>
  </div>
 </div>
  

 <div class="tile"> 
<Fade top>
<img src={Card4} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>WEST HOLLYWOOD, <br/> CALIFORNIA</h1>
  </div>
 </div>


  <div class="tile"> 

  <Fade right>
  <img src={Card5} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>LONG TERM CARE</h1>
  
  </div>
 </div>
</div>
  
    </>
  )
}

export default Cards
