import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50? setSticky(true): setSticky(false);
        })
    }, [])

    const [toggle, setToggle] = useState(false);
    const toggleMenu = ()=>{
        toggle ? setToggle(false):setToggle(true);
    }


  return (
    <nav className= {`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={toggle?'':"hide-mobile-menu"}>
            <li><Link to='hero' offset={0} smooth={true} duration={500} >Home</Link></li>
            <li><Link to='programs' offset={-230} smooth={true} duration={500} >Program</Link></li>
            <li><Link to='about' offset={-140} smooth={true} duration={500} >About Us</Link></li>
            <li><Link to='campus' offset={-230} smooth={true} duration={500} >Campus</Link></li>
            <li><Link to='testimonials' offset={-230} smooth={true} duration={500} >Testimonials</Link></li>
            <li className='btn'><Link to='contact' offset={-230} smooth={true} duration={500} >Contact Us</Link></li>

        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar