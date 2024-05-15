"use client"

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { GlobalStyle } from './styles/theme'
import { Main } from './components/Main/Main'

export default function Home() {
  return (
    <>
      <main className='main'>
        <GlobalStyle />
        <Navbar />
        <Main />
        <Footer />
      </main>
    </>
  )
}
