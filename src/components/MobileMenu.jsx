import React, {useEffect} from 'react'
import {motion, useAnimationControls} from "framer-motion"
import "./MobileMenu.scss"

export default function MobileMenu({MobileMenu}) {

  // const controls = useAnimationControls()

  useEffect(() => {
    // controls.start({ scale: 2 })
    console.log(MobileMenu)
  }, [MobileMenu])

  return (
    <div className="MobileMenu">
        <div className='dropdown'>
            <a href="#">über uns</a>
            <a href="#">unser Angebot</a>
            <a href="#">unser Hof</a>
            <a href="">Schreib uns</a>
        </div>
    </div>
  )
}
