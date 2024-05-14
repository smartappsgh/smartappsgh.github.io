"use client"

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { GlobalStyle } from './styles/theme'

export default function Home() {
  return (
    <>
      <main className='main'>
        <GlobalStyle />
        <Navbar />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, deleniti aperiam! Facilis ipsa officia est autem, praesentium mollitia, aperiam voluptatem sequi dignissimos sapiente odio aspernatur temporibus esse quisquam quasi eius.
        <Footer />
      </main>
    </>
  )
}
