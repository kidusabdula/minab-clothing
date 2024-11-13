import React from "react";



const LandingCover2 : React.FC = () => {
  return (
    <div className="my-5 px-6 py-12 flex flex-col justify-center align-middle" style={{
      backgroundImage: 'url("/IMG_5007.JPEG")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div id="top" className="flex flex-row justify-between items-start">
        <h1 className="text-5xl font-black text-[#C0A080] w-[30vw] mr-96">
          Setting The Tone With Minab
        </h1>
        <h2 className="text-gray-200 text-3xl font-black w-[30vw] mt-32">
          By wearing Minab people will embrace that they value art, not as a
          recreational act but as a necessity for humans. A person that is an
          artist for a purposeful reason.
        </h2>
      </div>

      {/* <div className="flex text-center items-center justify-center">
        <div
          className="w-[40vw] h-[100vh] p-10 my-20 rounded-xl"
          style={{
            backgroundImage: 'url("/IMG_5004.JPEG")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div> */}

      <div className="w-[30vw] mr-auto text-left my-20">
        <h1 className="text-3xl text-white font-black">
          Exuding the essence of the modern, sophisticated woman, this editorial
          celebrates 90s-inspired aesthetics through bold shoulders and
          silhouettes that radiate confidence and allure.
        </h1>
      </div>
    </div>
  );
};

export default LandingCover2;
