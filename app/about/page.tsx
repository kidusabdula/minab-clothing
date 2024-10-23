import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import Hero1 from '../components/About/Hero1'
import Footer from '../components/Footer/Footer'
import StickyFooter from '../components/Footer/StickyFooter'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <div>
        <NavBar/>
        <Hero1/>
        <Footer/>
        <StickyFooter/>
    </div>
  )
}

export default AboutPage