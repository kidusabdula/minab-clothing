import React from "react";

type Props = {};

const RecommendedCover = (props: Props) => {
  return (
    <div>
      <div id="header" className="flex flex-row gap-20 p-2 m-10">
        <div
          className="w-full h-screen flex flex-col items-end justify-end p-14 animate-zoom"
          style={{
            backgroundImage: 'url("/coverpic.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <h1 className="text-white text-4xl font-semibold">NEW RELEASE</h1>
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">VIEW ALL PRODUCTS</button>
        </div>

        <div
          className="w-full h-screen flex flex-col items-end justify-end p-14 animate-zoom"
          style={{
            backgroundImage: 'url("/IMG_6119.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <h1 className="text-white text-4xl font-semibold">BEST SELLERS</h1>
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">VIEW ALL PRODUCTS</button>
        </div>

        <div
          className="w-full h-screen flex flex-col items-end justify-end p-14 animate-zoom"
          style={{
            backgroundImage: 'url("/IMG_5007.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <h1 className="text-white text-4xl font-semibold">T-SHIRTS</h1>
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">VIEW ALL PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCover;
