import React from 'react'
import NavBar from '../components/Navbar/NavBar'
import ShopSection from '../components/ShopSection/ShopSection'
import ShopCover from '../components/ShopSection/ShopCover'
import Footer from '../components/Footer/Footer'

type Props = {}

const Shop = (props: Props) => {
  return (
    <div>
        <NavBar/>
        <ShopSection/>
        <ShopCover/>
        <Footer/>
    </div>
  )
}

export default Shop