  
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Slider from './components/slider/slider'
import Services from './components/services/services'
import AboutUs from './components/aboutus/aboutus'
import Contact from './components/contact/contact'

const App = () => {
  

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <main style={{ flex: 1 }}>
          <Hero />
          <Slider />
          <Services />
          <Slider />
          <AboutUs />
          <Contact />
        </main>
      </div>
    </Router>
  )
}

export default App
