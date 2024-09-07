import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import landingPageData from './components/constant/webData'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testinomials'
import Footer from './components/Footer'

function App() {
 
  const { header, hero, features, testimonials } = landingPageData
  

  return (
    <>
      <div>

        <Header header={header} />

        <Hero hero={hero} />

        <Features features={features} />

        <Testimonials testimonials={testimonials} />

        <Footer header={header} />

      </div>

    </>
  )
}

export default App
