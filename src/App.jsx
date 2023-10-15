import './App.scss'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Header from './components/Header'
import UeberUns from './components/UeberUns'
import Angebote from './components/Angebote'
import Hof from './components/Hof'

function App() {

  return (
    <>
      <Navbar/>
      <MobileMenu/>      
      <Header/>
      <UeberUns/>
      <Angebote/>
      <Hof/>
    </>
  )
}

export default App
