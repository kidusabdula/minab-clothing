import React from "react";
import Link from "next/link";


const LandingCover : React.FC = () => {
  return (
    <div
      className="w-full h-[100vh] flex flex-col items-end justify-center animate-zoom"
      style={{
        backgroundImage: 'url("/coverpic.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-4/12 flex flex-col items-end justify-center mt-72 mb-32 p-10">
        <h1 className="text-[#F5F5F5] text-3xl text-right font-extralight mb-4">
          Where tradition meets contemporary. To celebrate and elevate Habesha
          culture through timeless, minimalist clothing
        </h1>
        <Link href={"/shop"} className="w-full flex justify-end items-end">
          <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 mt-5 rounded-lg w-6/12 hover:bg-[#6B8757] hover:scale-105 transition duration-300 ease-in-out">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingCover;
