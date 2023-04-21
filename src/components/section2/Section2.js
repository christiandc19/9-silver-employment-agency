import React from 'react'
import './Section2.css'

import Card1 from '../../assets/card1-min.jpg'
import Card2 from '../../assets/card2-min.jpg'
import Card3 from '../../assets/card3-min.jpg'
import Card4 from '../../assets/card4-min.jpg'
import Card5 from '../../assets/card5-min.jpg'
import Card6 from '../../assets/card6-min.jpg'
import Card7 from '../../assets/card7-min.jpg'


const Section2 = () => {
  return (
    <>
      <div className='section2 grid1'>

        <div className='section2-flex'>

          <div className='card flex1'>
          <img src={ Card1 } alt="Therapy Session" loading="lazy"/>
          <div class="centered">
          <h1>Medical Centers and Specialty Hospitals</h1>            
          </div>

            
          </div>

          <div className='card flex2'>
            <img src={ Card2 } alt="Therapy Session" loading="lazy"/>
            <div class="centered">
            <h1>Health Sciences Higher Education</h1>
          </div>
          </div>

          <div className='card flex3'>
            <img src={ Card3 } alt="Therapy Session" loading="lazy"/>
              <div class="centered">
                <h1>Community Based Non-Profit</h1>
            </div>
          </div>


          <div className='card flex4'>
            <img src={ Card4 } alt="Therapy Session" loading="lazy"/>
            <div class="centered">
                <h1>Managed Care and Health Plans</h1>
            </div>
          </div>

          <div className='card flex5'>
            <img src={ Card5 } alt="Therapy Session" loading="lazy"/>
            <div class="centered">
            <h1>Long Term Care</h1>
            </div>
          </div>

          <div className='card flex6'>
            <img src={ Card6 } alt="Therapy Session" loading="lazy"/>
            <div class="centered">
            <h1>Behavioral Health</h1>
            </div>
          </div>
          
          {/* <div className='card flex7'>
            <img src={ Card7 } alt="Therapy Session" loading="lazy"/>
            <div class="centered">
            <h1>General Health Care</h1>
            </div>
          </div> */}

        </div>
      </div>



      </>
  )
}

export default Section2
