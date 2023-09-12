import React from 'react'
import './Navbar.scss'
import horse_logo from '../assets/logo_horse_green.svg'
import text_logo from '../assets/logo_text_green.svg'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className="nav-inner">
            <div className='nav_logo'>
                <img src={horse_logo} alt="logo" className='nav_horse_logo' />
                <img src={text_logo} alt="text logo" className='nav_text_logo' />
            </div>
            <div className="menus">
                <a href="#">über uns</a>
                <a href="#">unser angebot</a>
                <a href="#">unser hof</a>
            </div>
            <button>Schreib uns</button>
            <div id="hamburger">
                <div className='stripe'></div>
                <div className='stripe'></div>
                <div className='stripe'></div>
            </div>
        </div>
    </div>
  )
}
