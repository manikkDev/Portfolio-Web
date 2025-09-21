import React from 'react'
import { ThemeProvider } from './contexts/ThemeProvider'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
      </div>
    </ThemeProvider>
  )
}

export default App
