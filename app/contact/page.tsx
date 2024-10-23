import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import ContactForm from '../components/ContactUs/ContactForm'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div>
        <NavBar/>
        <ContactForm/>
    </div>
  )
}

export default ContactUs