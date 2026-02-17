//import { useState } from 'react'
import Hero from './components/hero.jsx'
import Dashboard from './components/dashboard.jsx'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
import About from './components/about.jsx'

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
