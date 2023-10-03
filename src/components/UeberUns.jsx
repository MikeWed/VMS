import React from 'react'
import "./UeberUns.scss"
import erik from '../assets/erik.jpg'
import jule from '../assets/Jule.jpg'



export default function UeberUns() {
  return (
    <section id='ueberUns'>
      <div className="wrapper">
        <h1 className='section-header'>
            über uns
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Leo urna dignissim pharetra interdum turpis diam. Porttitor in bibendum tempor justo turpis lobortis luctus gravida curabitur. Pharetra fames purus mi sit orci morbi pretium. Vulputate ac condimentum sed turpis diam id at libero sed. Quis facilisis nunc vivamus amet senectus feugiat nunc a. Dolor nascetur arcu eleifend vitae adipiscing tincidunt eleifend faucibus leo. Accumsan in in risus consectetur lorem.
        </p>
        <div className="wir-container">
          <div className="wir-item1 wir-item">
            <img className="avatar" src={jule} alt="jule" />
          </div>
          <div className="wir-item2 wir-item">
            <h2>Juliana</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto libero obcaecati soluta quisquam. Necessitatibus sunt, consectetur a nam atque fuga provident eaque debitis assumenda odit nemo, impedit rerum sequi.</p>
          </div>
          <div className="wir-item3 wir-item">
            <img className="avatar" src={erik} alt="erik" />
          </div>
          <div className="wir-item4 wir-item">
            <h2>Erik</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, incidunt maiores, voluptates aliquid rerum veniam sint et modi sequi totam velit, error mollitia temporibus consequatur est perspiciatis cumque sapiente neque.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
