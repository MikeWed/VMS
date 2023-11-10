import React, {useEffect} from 'react'
import {motion} from "framer-motion"
import "./MobileMenu.scss"

export default function MobileMenu({
  mobileMenu,
  handleMobileMenu
}) {

  useEffect(() => {
    console.log(mobileMenu)
  }, [mobileMenu])

  return (
    <div className="MobileMenu">
        <motion.div 
          className='dropdown'
          initial={{ opacity: 0, x: "-50%", y: -100 }}
          animate={mobileMenu ? { opacity: 1, y: 10} : { opacity: 0, y: -100}}
          exit={{ opacity: 0, x: -100, left: '-100%' }}
          transition={{ duration: 0.5 }}
          onClick={() => handleMobileMenu(!mobileMenu)}
          >
            <a href="#ueberUns">über uns</a>
            <a href="#angebote">unser Angebot</a>
            <a href="#hof">unser Hof</a>
            <a href="#contact">Schreib uns</a>
        </motion.div>
    </div>
  )
}
