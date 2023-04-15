import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import logo from '../../assets/nav-logo.png'
// import {FiChevronDown } from "react-icons/fi";
import { AiOutlinePhone } from 'react-icons/ai';


import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    // const [isMenu, setisMenu] = useState(false);


    // const toggleClass = () => {
    //     setisMenu(isMenu === false ? true : false);
    // };

    // let boxClass = ["main-menu menu-right menuq1"];
    // if(isMenu) {
    //     boxClass.push('menuq2');
    // }else{
    //     boxClass.push('');
    // }

    // const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    // const toggleSubmenu = () => {
    //   setMenuSubMenu(isMenuSubMenu === false ? true : false);
    // };
    
    // let boxClassSubMenu = ["sub__menus"];
    // if(isMenuSubMenu) {
    //     boxClassSubMenu.push('sub__menus__Active');
    // }else {
    //     boxClassSubMenu.push('');
    // }



    return (
        <div name='top' className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                    <img src={logo} width="150px" height="75px" alt="9 Silver Logo" loading="lazy"/>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    
                    {/*                     
                    <li><Link to='/sober-living'>SOBER LIVING</Link> </li>
                    */}

                    <li><Link to='/mission'>About 9 Silver</Link> </li> 


                    <li><Link to='/contact'>Get in touch</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>

                <div className='hide'>
                <p><a href="tel:3235792196"> CONTACT US <span> <AiOutlinePhone /></span></a></p>
                </div>


            </div>
        </div>
    )
}

export default Navbar
