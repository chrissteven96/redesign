  
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Slider from './components/slider/slider'
import Services from './components/services/services'
import AboutUs from './components/aboutus/aboutus'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


const App = () => {
  

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       
        <NavBar  />
        <main style={{ flex: 1, paddingTop: '80px'  }}>
          <div id="hero"><Hero /></div>
         
         <Slider />
          <div id="servicios"><Services /></div>
           <Slider />
          <div id="nosotros"><AboutUs /></div>
          <div id="contacto"><Contact /></div>
          <Footer />
        </main>
        
      </div>
    </Router>
  )
}

export default App
