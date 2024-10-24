import React from "react";
import Image from "next/image"; // Ensure this line is present at the top of your file

type Props = {};

const LandingCover = (props: Props) => {
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
        <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 mt-5 rounded-full w-6/12">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default LandingCover;
