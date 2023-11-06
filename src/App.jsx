import './App.scss'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Header from './components/Header'
import UeberUns from './components/UeberUns'
import Angebote from './components/Angebote'
import Hof from './components/Hof'
import Partner from './components/Partner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Navbar
        mobileMenu = {mobileMenu}
        handleMobileMenu = {setMobileMenu}
      />
      <MobileMenu
        mobileMenu = {mobileMenu}
      />      
      <Header/>
      <UeberUns/>
      <Angebote/>
      <Hof/>
      <Contact/>
      <Partner/>
      <Footer/>

    </>
  )
}

export default App
