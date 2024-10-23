import { ProductGet } from "@/typefile";
import React from "react";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductGet[];
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-20 p-5">
      {products && products.length > 0 ? (
        products.slice(0, 6).map((productItem) => (
          <div key={productItem.id}>
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
