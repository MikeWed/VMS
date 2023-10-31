import React, {useEffect} from 'react'
import "./Header.scss"
// import hero_mobile from '../assets/Hero_img_mobile.png'
import hero from '../assets/Hero_img.png'

export default function Header() {

  return (
    <header>

      <div className="hero-container">
        <img src={hero} alt="hero-img" />
        <div className="title">
          <h1>Vielseitige Ausbildung von Pferd und Reiter im Herzen der Mecklenburgischen Schweiz
          </h1>
          <h2>mit dem Pferd im Vordergrund</h2>
        </div>
        <div className="cta-text">
          <p>Herzlich Willkommen ihr Wichser</p>
          <p className='introduction'>
Im Herzen der Mecklenburgischen Seenplatte gelegen bietet unsere Reitanlage alles, was das
Pferde Herz höherschlagen lässt. Aber auch als Reiter kommt bei uns jeder auf seine kosten.
Egal ob Dressur, Springen oder Geländereiten, bei uns finden Sie die optimalen
Trainingsbedingungen. Insbesondere die vielseitige Ausbildung von Pferd und Reiter liegt uns
dabei am Herzen.</p>
          <a href='#contact' className='button'>Schreib uns</a>
        </div>
      </div>

    </header>
  )
}



