"use client";

import { ProductGet } from '@/typefile'
import React, { useEffect, useState } from 'react'
import { products as productData } from '@/dummyData';
import ProductList from './ProductList';

type Props = {}

const ProductSection = (props: Props) => {
  const [products, setProducts] = useState<ProductGet[]>([]); 
  // const [categories, setCategories] = useState<Category[]>([]);
  // const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
   <div className='flex flex-col justify-center items-center h-max my-14 p-5'>
    <div id="header" className=''>
      <h1 className='text-center text-4xl text-[#78866B] font-light letter-spacing-wide'>LATEST PRODUCTS</h1>
    </div>
    <div id="body" className='flex flex-col justify-center items-center'>
      <ProductList products={products}/>
      <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">VIEW ALL PRODUCTS</button>
    </div>
   </div>
  )
}

export default ProductSection
