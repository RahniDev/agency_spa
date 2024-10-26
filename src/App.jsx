import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
