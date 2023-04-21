import React from 'react'
import './Section1.css'

import { RxMagnifyingGlass } from 'react-icons/rx';
import { BsArrowUpRight } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';


const Section1 = () => {
  return (
    <>
      <div className='section1 container'>
        <div className='section1-flex1'>

          <div className='flexItems flexItems1'>
            <RxMagnifyingGlass className='flex-icon'/> 
            <h1>RECRUITMENT</h1>
            <p>A more intense, comprehensive treatment approach than IOP, available every day of the week.</p>
          </div>

          <div className='flexItems flexItems2'>
            <BsArrowUpRight className='flex-icon'/> 
            <h1>CAREER GROWTH</h1>
            <p>A more intense, comprehensive treatment approach than IOP, available every day of the week.</p>
          </div>

          <div className='flexItems flexItems3'>
            <BsPeople className='flex-icon'/> 
            <h1>HR SOLUTION</h1>
            <p>A more intense, comprehensive treatment approach than IOP, available every day of the week.</p>
          </div>

        </div>
        

        <div className='section1-flex1'>

          <div className='flexItems flexItems1'>
            <MdWorkOutline className='flex-icon'/> 
            <h1>GIGS</h1>
            <p>A more intense, comprehensive treatment approach than IOP, available every day of the week.</p>
          </div>

          <div className='flexItems flexItems2'>
            <BiDollar className='flex-icon'/> 
            <h1>PAYROLL SERVICES</h1>
            <p>A more intense, comprehensive treatment approach than IOP, available every day of the week.</p>
          </div>

          <div className='flexItems flexItems3'>
            <AiOutlineTeam className='flex-icon'/> 
            <h1>WORKFORCE TEAM</h1>
            <p>A more intense, comprehensive treatment approach than IOP, available every day of the week.</p>
          </div>

</div>


      </div>



    </>
  )
}

export default Section1


