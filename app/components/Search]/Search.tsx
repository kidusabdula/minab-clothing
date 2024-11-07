import React from 'react'
import ShopProductList from '../ShopSection/ShopProductList'

type Props = {}

const Search = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <div>
            <h1>Search Results For T-Shirt</h1>  
        </div>
        <div>
            <ShopProductList/>
        </div>
    </div>
  )
}

export default Search