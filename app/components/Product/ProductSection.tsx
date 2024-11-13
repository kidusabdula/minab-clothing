"use client";

import { ProductGet } from '@/typefile'
import React, { useEffect, useState } from 'react'
import { products as productData } from '@/dummyData';
import ProductList from './ProductList';


const ProductSection : React.FC = () => {
  const [products, setProducts] = useState<ProductGet[]>([]); 
  // const [categories, setCategories] = useState<Category[]>([]);
  // const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
   <div className='flex flex-col justify-center items-center h-max my-14 p-5'>
    <div id="header" className='mb-14'>
      <h1 className='text-center text-5xl text-[#78866B] font-black letter-spacing-wide'>Featured</h1>
    </div>
    <div id="body" className='flex flex-col justify-center items-center transform scale-110 my-10'>
      <ProductList products={products}/>
      <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-16 w-[15vw] rounded-lg">VIEW ALL PRODUCTS</button>
    </div>
   </div>
  )
}

export default ProductSection
