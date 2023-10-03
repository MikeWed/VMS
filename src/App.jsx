import './App.scss'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Header from './components/Header'
import UeberUns from './components/UeberUns'
import Angebote from './components/Angebote'

function App() {

  return (
    <>
      <Navbar/>
      <MobileMenu/>      
      <Header/>
      <UeberUns/>
      <Angebote/>
    </>
  )
}

export default App
