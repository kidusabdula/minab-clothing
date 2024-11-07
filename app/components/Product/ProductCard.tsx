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
      className="bg-gray-100 flex flex-row justify-between items-center align-middle p-5 my-10 w-[20vw] h-[70vh] rounded-2xl"
      style={{
        // backgroundImage: 'url("/IMG_2290.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
          <h1 className="text-xl my-4 text-gray-600 text-center">{product.name}</h1>
          <h3 className="text-[#7a8570] text-lg">Br {product.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
