"use client";

import { ProductGet } from '@/typefile'
import React, { useEffect, useState } from 'react'
import { products as productData } from '@/dummyData';
import ShopProductList from './ShopProductList';
type Props = {};

const ShopSection = (props: Props) => {
  const [products, setProducts] = useState<ProductGet[]>([]); 

  useEffect(() => {
    setProducts(productData);
  }, []);


  return (
    <div className="flex flex-col p-3 my-24">
      <div id="section1" className="">
        <div id="header" className="">
          <h1 className="text-center text-4xl text-[#78866B] font-extrabold letter-spacing-wide">
            New Arrivals
          </h1>
        </div>
        <div id="body" className='p-5 m-5'>
          <ShopProductList products={products}/>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
