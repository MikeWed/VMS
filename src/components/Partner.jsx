import React from 'react'
import Title from '../utils/Title'
import horse_logo from '../assets/logo_horse_green.svg'
import text_logo from '../assets/logo_text_green.svg'
import './Partner.scss'

export default function Partner() {

  const title = "Partner und Sponsoren"
  return (
    <section id='partner'>
        <Title text={title}/>
        <div className="partner-container">
            <img src={horse_logo} alt="logo" className='partner-logo' />
            <img src={horse_logo} alt="logo" className='partner-logo' />
            <img src={horse_logo} alt="logo" className='partner-logo' />
            <img src={horse_logo} alt="logo" className='partner-logo' />
        </div>
    </section>
  )
}
