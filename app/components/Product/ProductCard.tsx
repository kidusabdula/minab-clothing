import React from "react";
import Image from "next/image"; // Ensure this line is present at the top of your file
import { ProductGet } from "@/typefile";

interface Props {
  product: ProductGet;
  id: string;
}
const ProductCard = ({ id, product }: Props) => {
  return (
    <div
      key={id}
      id={id}
      className="flex flex-row justify-between items-center align-middle p-5 w-[30vw]"
    >
      <div className="border-black m-5 p-5 w-max">
        <div id="top" className="">
          <Image
            src={product.image}
            alt="Logo"
            width={650}
            height={400}
            className=""
          />
        </div>
        <div
          id="bottom"
          className="flex flex-col items-center justify-center my-3"
        >
          <h1 className="text-xl my-4 text-[#3A3A3A] text-center">{product.name}</h1>
          <h3 className="text-[#7a8570] text-lg">Br {product.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
