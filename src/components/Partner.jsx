import React from 'react'
import horse_logo from '../assets/logo_horse_green.svg'
import text_logo from '../assets/logo_text_green.svg'
import './Partner.scss'

export default function Partner() {
  return (
    <section id='partner'>
        <h1 className='section-header'>Partner und Sponsoren</h1>
        <div className="partner-container">
            <img src={horse_logo} alt="logo" className='partner-logo' />
            <img src={horse_logo} alt="logo" className='partner-logo' />
            <img src={horse_logo} alt="logo" className='partner-logo' />
            <img src={horse_logo} alt="logo" className='partner-logo' />
        </div>
    </section>
  )
}
