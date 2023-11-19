import React from 'react'
import "./UeberUns.scss"
import erik from '../assets/erik.jpg'
import jule from '../assets/Jule.jpg'
import Title from '../utils/Title'



export default function UeberUns() {

  const title= "über uns"
  return (
    <section id='ueberUns'>
      <div className="wrapper">
        <Title text= {title}/>
        {/* <h2 className='section-header'>
            über uns
        </h2> */}
        <div className="wir-container">
          <div className="wir-item1 wir-item">
            <img className="avatar" src={jule} alt="jule" />
          </div>
          <div className="wir-item2 wir-item">
            <h2>Juliana</h2>
            <p>Geboren am 14.07.1992 in Hamburg bestimmten die Pferde schon früh das Leben. Auf dem
elterlichen Hof im nördlichen Niedersachsen war kein Pony sicher, und so erwarb Sie schon früh die
Fähigkeit gut zu Fallen. Durch den damaligen Springtrainer Rüdiger Meyer wurde das Interesse am
Vielseitigkeitsreiten geweckt, und mit 11 Jahren erfolgte der erste Start in einer Vielseitigkeit der
Klasse E. Fortan wurde beinahe alle Oster- und Herbstferien in verschiedenen Ställen gearbeitet, um
sich möglichst viel Unterricht zu verdienen. Dazu gehörten unter anderem das Ausbildungszentrum
Luhmühlen, Nadine Marzahl, Beeke Jankowski, Familie Keller, Holga Fincken und viele mehr.
Während des Studiums (Biologie, Biomedizinische Technik) folgten auch mehrere Aufenthalte in
Warendorf bei Andreas Ostholt.</p>
          <p>Heute ist Sie im nationalen und internationalen Turniersport erfolgreich, mit Siegen und
Platzierungen von der Reitpferdeprüfung bis hin zu CCI3*-Niveau. Mit dem aktuellen Erfolgspferd
Princess Pancake kann Sie außerdem viele gute Ergebnisse bis hin zu CCI4*-L Prüfungen für sich
verbuchen.</p>
          </div>
          <div className="wir-item3 wir-item">
            <img className="avatar" src={erik} alt="erik" />
          </div>
          <div className="wir-item4 wir-item">
            <h2>Erik</h2>
            <p>Als Erik am 11.10.1989 in Rostock das Licht der Welt erblickt, sollte es noch 24 Jahre dauern,
bis Pferde unfreiwilliger weise in sein Leben traten. Vorerst stand eine andere Sportart im
Mittelpunkt: Das Schwimmen. Über seine Paradestrecken 50m und 100m Brust wurde er zu einem
der Besten Schwimmer Deutschlands und erschwamm sich zahlreiche nationale und internationale
Medaillen, bis hin zu Weltcups, Europameisterschaften und Military World Games.</p>
            <p>Nach fünf Jahren bei der Sportschule der Bundeswehr, in denen er sich neben dem aktiven Sport
auch sportwissenschaftlich bis zum Trainer B Leistungssport ausbilden ließ, widmete er sich dem
Studium der angewandten Sport-und Trainingswissenschaften.</p>
            <p>Heute ist er, neben dem normalen Hofalltag, für die sportliche Ausbildung abseits der Pferde
verantwortlich.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
