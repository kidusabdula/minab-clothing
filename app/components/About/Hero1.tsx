import React from "react";
import Image from "next/image";
import RecommendedCover from "../Recommended/RecommendedCover";


const Hero1 : React.FC = () =>{
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-full h-screen flex flex-col items-start justify-center p-14 animate-zoom"
        style={{
          backgroundImage: 'url("/Screenshot 2024-10-22 164620.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl text-white w-[40vw] mt-28 mb-10">
          We believe we can all make a difference.
        </h1>
        <h3 className="text-xl text-gray-300 w-[30vw] mt-5">
          We are a community of people who believe in the power of love, peace,
          and understanding to overcome our differences and make a positive
          impact on the world.
        </h3>
      </div>

      <div className="flex flex-row items-center justify-center align-middle my-20 mx-16">
        <div className="items-center justify-center m-10 text-center">
          <h1 className="text-center text-5xl font-light my-10">
            The World Of Abiy Belay
          </h1>
          <h3 className="text-center">
            “For minab The ability to observe and acknowledge beauty is the most
            important skill to have, everything else is a manifestation of
            that.”
          </h3>
          <a
            href="https://systemagazine.wordpress.com/2024/10/02/in-conversation-with-abiy-belay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 rounded-full text-center my-20">
              Read The Coversation On Minab
            </button>
          </a>
        </div>
        <div className="m-10 p-5">
          <Image
            src="https://systemagazine.wordpress.com/wp-content/uploads/2024/09/abiy.jpg?w=816"
            alt="Logo"
            width={1150}
            height={50}
            className="rounded-xl"
          />
        </div>
      </div>

      <div
        className="h-[210vh] w-[70vw] rounded-lg p-10 m-10"
        style={{
          backgroundImage: 'url("/IMG_5848.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        .
      </div>


      <div className="flex flex-row mt-10">
        <div className="bg-[#78866B] text-white text-left">
          <h3 className="text-xl font-extralight my-10 p-10">OUR QUALITY</h3>
          <h1 className="text-7xl font-extrabold my-10 p-10">
            Designed To Last.
          </h1>
          <h3 className="text-lg font-extralight my-5 p-10">
            At Minab, we’re not big on trends. We want you to wear our pieces
            for years, even decades, to come. That’s why we source the finest
            materials and factories for our timeless products.
          </h3>
        </div>
        <div
          style={{
            backgroundImage: 'url("/Screenshot 2024-10-22 172625.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-7xl text-white w-[50vw] mt-56 mb-10"></h1>
          <h3 className="text-xl text-gray-300 w-[30vw] mt-5"></h3>
        </div>
      </div>

      <div className="flex flex-row mb-10">
        <div
          style={{
            backgroundImage: 'url("/img_5007.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-7xl text-white w-[50vw] mt-56 mb-10"></h1>
          <h3 className="text-xl text-gray-300 w-[30vw] mt-5"></h3>
        </div>

        <div className="bg-[#C0A080] text-white text-left">
          <h3 className="text-xl font-extralight my-10 p-10">OUR LINEUP</h3>
          <h1 className="text-7xl font-extrabold my-10 p-10">
            Ethical Craftsmanship.
          </h1>
          <h3 className="text-lg font-extralight my-5 p-10">
            At Minab, we take pride in sourcing the finest factories globally,
            often the same ones behind renowned designer brands. We foster
            close, personal relationships with our factory owners, ensuring that
            each facility undergoes a comprehensive compliance audit. This
            covers fair wages, reasonable working hours, and a healthy work
            environment. Our commitment? To achieve a score of 90 or above for
            every factory, reflecting our dedication to ethical and responsible
            production.
          </h3>
        </div>
      </div>

      <div className="">
        <h1 className="text-center text-5xl font-bold my-10 text-[#78866B]">
          More To Explore
        </h1>
        <RecommendedCover />
      </div>
    </div>
  );
};

export default Hero1;
