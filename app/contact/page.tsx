import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import ContactForm from '../components/ContactUs/ContactForm'
import StickyFooter from '../components/Footer/StickyFooter'
import Footer from '../components/Footer/Footer'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div>
        <NavBar/>
        <ContactForm/>
        <StickyFooter/>
        <Footer/>
    </div>
  )
}

export default ContactUs