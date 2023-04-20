import React from 'react'
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';



const home = () => {
  return (
    <>
    <Whoweare />
    <Section1 />
    <Section2 />
    <ContactForm />
    </>
  )
}

export default home
