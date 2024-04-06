import './App.css'
import NavBar from './components/navbar/navBar.jsx'
import Hero from './components/hero/hero.jsx'
import Servicios from './components/servicios/servicios.jsx'
import Contacto from './components/contacto/contacto.jsx'
import Ubicacion from './components/ubicacion/ubicacion.jsx'
import Footer from './components/footer/footer.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Servicios/>
      <Contacto/>
      <Ubicacion/>
      <Footer/>
    </>
  )
}

export default App
