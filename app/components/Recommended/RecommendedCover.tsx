import React from "react";

const RecommendedCover : React.FC = () => {
  return (
    <div>
      <div id="header" className="flex flex-row gap-20 p-2 m-10">
        <div
          className="w-full h-screen flex flex-col items-end justify-end p-5 animate-zoom"
          style={{
            backgroundImage: 'url("/Screenshot 2024-11-09 091423.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <h1 className="text-white text-4xl font-semibold">COLLECTIONS</h1>
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">VIEW ALL PRODUCTS</button>
        </div>

        <div
          className="w-full h-screen flex flex-col items-end justify-end p-5 animate-zoom"
          style={{
            backgroundImage: 'url("/IMG_5848.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <h1 className="text-white text-4xl font-semibold">ABOUT MINAB</h1>
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">BEHIND THE CANVAS</button>
        </div>

        <div
          className="w-full h-screen flex flex-col items-end justify-end p-5 animate-zoom"
          style={{
            backgroundImage: 'url("/IMG_5007.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
            <h1 className="text-white text-4xl font-semibold">OUR GALLERY</h1>
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 p-3 mt-5 w-[15vw]">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCover;
