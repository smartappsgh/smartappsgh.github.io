"use client"

import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { GlobalStyle } from './styles/theme'
import { Main } from './components/Main/Main'
import { About } from './components/About/About'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />;
  }

  return (
      <main className='main'>
        <GlobalStyle />
        <Navbar />
        <Main />
        <div id='about-section'> 
          <About />
        </div>
        <Footer />
      </main>
  );
}

