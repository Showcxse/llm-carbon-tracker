//import { useState } from 'react'
import Hero from './components/Hero.jsx'
import Dashboard from './components/Dashboard.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <>
    <div className="App relative w-full overflow-hidden">
    <Navbar />
    <Hero />
    <Dashboard />
    <About />
    <Footer />  
    </div>
    </>
  )
}

export default App
