import { ProductGet } from "@/typefile";
import React from "react";
import ProductCard from "../Product/ProductCard";
import Link from "next/link";

interface Props {
  products: ProductGet[];
}
const ShopProductList = ({ products }: Props) => {
  return (
    <div>
      {" "}
      <div className="grid grid-cols-4 gap-5">
        {products && products.length > 0 ? (
          products.slice(0, 12).map((productItem) => (
            <div key={productItem.id}>
              <Link href={`/shop/${productItem.id}`}>
                <ProductCard
                  id={productItem.id.toString()}
                  product ={productItem}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ShopProductList;
