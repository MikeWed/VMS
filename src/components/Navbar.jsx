import React from 'react'
import './Navbar.scss'
import horse_logo from '../assets/logo_horse_green.svg'
import text_logo from '../assets/logo_text_green.svg'

export default function Navbar() {
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
            <div id="hamburger">
                <div className='stripe'></div>
                <div className='stripe'></div>
                <div className='stripe'></div>
            </div>
        </div>
    </div>
  )
}
