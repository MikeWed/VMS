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
          <p>Dein Pferd braucht einen Platz zum Unterstellen?</p>
          <p>Du willst in den Vielseitigkeitssport einsteigen oder dein Können auf ein neues Level heben?</p>
          <p>Du brauchst Hilfe bei der Aufzucht oder dem Anreiten?</p>
          <button>Schreib uns</button>
        </div>
      </div>

    </header>
  )
}



