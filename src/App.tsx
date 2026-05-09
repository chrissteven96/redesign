  
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Slider from './components/slider/slider'
import Services from './components/services/services'

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
        </main>
      </div>
    </Router>
  )
}

export default App
