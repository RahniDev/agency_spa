import { useState } from 'react'
import './App.css'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <>
      <h1>Contryv</h1>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default App
