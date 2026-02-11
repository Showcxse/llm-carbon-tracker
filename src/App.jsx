//import { useState } from 'react'
import Hero from './components/hero.jsx'
import Dashboard from './components/dashboard.jsx'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'

function App() {

  return (
    <>
    <div className="App">
    <Navbar />
    <Hero />
    <Dashboard />
    <Footer />  
    </div>
    </>
  )
}

export default App
