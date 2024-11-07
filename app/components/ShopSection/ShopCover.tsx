import React from "react";

type Props = {};

const ShopCover = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-20">
        <div
          id="left"
          style={{
            backgroundImage: 'url("/Screenshot 2024-10-22 172625.png")',
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
          className="w-full h-[70vh] flex flex-col items-start justify-end animate-zoom text-white p-12"
        >
          <h1 className="font-extrabold text-5xl ">JEANS</h1>
          <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 mt-5 rounded-full w-6/12">
            Shop Now
          </button>
        </div>
        <div
          id="right"
          className="w-full h-[70vh] flex flex-col items-start justify-end animate-zoom text-white p-12"
          style={{
            backgroundImage: 'url("/Screenshot 2024-10-22 164620.png")',
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        >
          <h1 className="font-extrabold text-5xl ">TOPS</h1>
          <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 mt-5 rounded-full w-6/12">
            Shop Now
          </button>
        </div>
      </div>

      <div
        id="bottom"
        style={{
          backgroundImage: 'url("/IMG_5007.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
        className="h-[50vh] flex flex-col items-start justify-end animate-zoom text-white p-12 "
      >
        <h1 className="font-extrabold text-5xl ">Accessories</h1>
        <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 mt-5 rounded-full w-2/12">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ShopCover;
