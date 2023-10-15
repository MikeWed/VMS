import React from 'react'
import './Footer.scss'
import logoHorseWhite from '../assets/logo_horse_white.svg'
import logoTextWhite from '../assets/logo_text_white.svg'
import instagram from '../assets/insta.svg'
import facebook from '../assets/facebook.svg'

export default function Footer() {
  return (
    <footer>
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-item footer-item-logo">
                    <img src={logoHorseWhite} alt="logo" className='logo-horse'/>
                    <img src={logoTextWhite} alt="logo" className='logo-text' />
                </div>
                <div className="footer-item footer-item-adress">
                    <h3>Kontakt</h3>
                    <p>Am Arsch der Seenplatte 1</p>
                    <p>info@gehMirNichtAufnSack.de</p>
                    <p>+49 123456789</p>
                </div>
                <div className="footer-item footer-item-content">
                    <h3>Inhalt</h3>
                    <div><a href="#ueberUns">Über Uns</a></div>
                    <div><a href="#angebote">Unser Angebot</a></div>
                    <div><a href="#hof">Unser Hof</a></div>
                </div>
                <div className="footer-item footer-item-social">
                    <a href="https://www.instagram.com/"><img src={instagram} alt="instagramm" /></a>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
                </div>
            </div>
            <p className='copyright'>© 2023 Vielseitigkeitszentrum Mecklenburgische Seenplatte</p>
        </div>
    </footer>
  )
}
