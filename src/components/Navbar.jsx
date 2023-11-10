import React from 'react'
import './Navbar.scss'
import horse_logo from '../assets/logo_horse_green.svg'
import text_logo from '../assets/logo_text_green.svg'
import {motion} from "framer-motion"

export default function Navbar({
    mobileMenu,
    handleMobileMenu
}) {
  return (
    <div className='nav'>
        <div className="nav-inner">
            <a href="#" className='nav_logo'>
            {/* <div className='nav_logo'> */}
                <img src={horse_logo} alt="logo" className='nav_horse_logo' />
                <img src={text_logo} alt="text logo" className='nav_text_logo' />
            {/* </div> */}

            </a>
            <div className="menus">
                <a href="#ueberUns">über uns</a>
                <a href="#angebote">unser angebot</a>
                <a href="#hof">unser hof</a>
            </div>
            <a href='#contact' className='button'>Schreib uns</a>
            <div id="hamburger" onClick={() => handleMobileMenu(!mobileMenu)}>
                <motion.div 
                    className='stripe'
                    style= {{
                        transformOrigin: 'top left'
                    }}
                    initial = {{rotate : 0}}
                    animate = { mobileMenu ? {rotate : 45} : {rotate : 0} }
                    transition = {{duration : 0.5}} 
                ></motion.div>
                <motion.div 
                    className='stripe'
                    initial = {{opacity : 1}}
                    animate = { mobileMenu ? {opacity : 0} : {opacity : 1} }
                    transition = {{duration : 0.5}} 
                ></motion.div>
                <motion.div 
                    className='stripe'
                    style= {{
                        transformOrigin: 'bottom left'
                    }}
                    initial = {{rotate : 0}}
                    animate = { mobileMenu ? {rotate : -45} : {rotate : 0} }
                    transition = {{duration : 0.5}} 
                ></motion.div>
            </div>
        </div>
    </div>
  )
}
