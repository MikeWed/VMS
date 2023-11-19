import React from 'react'
import SliderHof from './SliderHof'
import Title from '../utils/Title'
import './Hof.scss'


export default function Hof() {

  const title= "unser hof"
  return (
    <section id='hof'>
        <Title text= {title}/>
        <SliderHof/>
    </section>
  )
}
