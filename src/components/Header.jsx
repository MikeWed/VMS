import React, {useEffect} from 'react'
import "./Header.scss"
// import hero_mobile from '../assets/Hero_img_mobile.png'
import hero from '../assets/Hero_img.png'

export default function Header() {

  return (
    <header>

      <div className="hero-container">
        <img src={hero} alt="hero-img" />
        <h1 className='title'>Vielseitige Ausbildung von Pferd und Reiter  
          <span> im Herzen der Mecklenburgischen Schweiz</span>
        </h1>
        <h2 className='title'>mit dem Pferd im Vordergrund</h2>
        <div className="cta-text">
          <p>Dein Pferd braucht einen Platz zum unterstellen?</p>
          <p>Du willst in den Vielseitigkeitssport einsteigen oder dein Können auf ein neues Level heben?</p>
          <p>Du brauchst Hilfe bei der Aufzucht oder dem Anreiten?</p>
          <button>Schreib uns</button>
        </div>
      </div>

    </header>
  )
}



