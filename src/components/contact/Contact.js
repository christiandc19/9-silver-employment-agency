import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'
// import Wave from '../../assets/waves.svg'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
{/* <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div> */}
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>If you have any questions, we’re here for you. Just let us know how we can help and our team will get back to you right away.</p>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact