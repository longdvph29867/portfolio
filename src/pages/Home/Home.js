import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import Footer from '../../components/Footer/Footer'
import BackToTop from '../../components/BackToTop/BackToTop'
export default function Home() {
  return (
    <div id='home'>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}
