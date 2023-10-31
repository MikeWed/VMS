import React from 'react'
import './Angebote.scss'
import angebot_img from '../assets/angebotTest.jpg'

export default function Angebote() {
  return (
    <section id='angebote'>
        <h1 className='section-header'>Unser Angebot</h1>
        <div className="angebote-wrapper">
            <div className="angebot angebot1">
                <img src={angebot_img} alt="" />
                <p>anreiten</p>
            </div>
            <div className="angebot angebot2">
                <img src={angebot_img} alt="" />
                <p>Ausbildung</p>
            </div>
            <div className="angebot angebot3">
                <img src={angebot_img} alt="" />
                <p>internationale Turniere</p>
            </div>
            <div className="angebot angebot4">
                <img src={angebot_img} alt="" />
                <p>Stutenleistungsprüfung</p>
            </div>
            <div className="angebot angebot5">
                <img src={angebot_img} alt="" />
                <p>problempferde</p>
            </div>
            <div className="angebot angebot6">
                <img src={angebot_img} alt="" />
                <p>verkauf</p>
            </div>
            <div className="angebot angebot7">
                <img src={angebot_img} alt="" />
                <p>Jungpferdeaufzucht</p>
            </div>
            <div className="angebot angebot-button">
                <a href='#contact' className='button'>Schreib uns</a>
            </div>
        </div>
    </section>
  )
}
