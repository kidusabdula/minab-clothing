import { ProductGet } from "@/typefile";
import React from "react";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductGet[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-40">
      {products && products.length > 0 ? (
        products.slice(0, 3).map((productItem) => (
          <div key={productItem.id} className="">
            <ProductCard id={productItem.id.toString()} product={productItem}/>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;
