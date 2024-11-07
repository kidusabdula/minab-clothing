"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { ProductGet } from "@/typefile";

interface Props{
  product: ProductGet;
}


const IndividualProduct = ({product}: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const sizeOptions = ["S", "M", "L", "XL"];

  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const colorOptions = [
    { value: "Earthy Beige", color: "bg-[#C0A080]" },
    { value: "Deep Charcoal", color: "bg-[#3A3A3A]" },
    { value: "Muted Olive", color: "bg-[#78866B]" },
    { value: "Off-White", color: "bg-[#F5F5F5]" },
  ];

  return (
    <div className="mt-28 flex flex-col">
      <div id="section2" className="flex flex-row justify-between">
        <div id="left" className="items-start w-full">
          <Image width={600} height={20} alt="" src={product.image}></Image>
        </div>
        <div id="right" className="w-[80vw] p-5 mx-5">
          <h5 className="font-extralight text-lg my-5">
            Shop &nbsp; / &nbsp; Men &nbsp; / &nbsp;Outer Wear
          </h5>
          <h4 className="text-lg my-2">{product.category}</h4>
          <h1 className="text-5xl font-black my-2">{product.name}</h1>
          <h3 className="text-lg font-light mb-3 ">${product.price}</h3>
          <div id="colors" className="my-7">
            <span className="flex flex-row gap-4">
              {colorOptions.map(({ value, color }) => (
                <label key={value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value={value}
                    checked={selectedColor === value}
                    onChange={() => handleColorChange(value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center ${color} ${
                      selectedColor === value ? "ring-2 ring-gray-800" : ""
                    }`}
                  />
                </label>
              ))}
            </span>
          </div>
          <div id="size">
            <span>
              <div className="flex gap-4">
                {sizeOptions.map((label) => (
                  <label key={label} className="inline-flex cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={label}
                      checked={selectedOption === label}
                      onChange={() => handleOptionChange(label)}
                      className="sr-only"
                    />
                    <div
                      className={`w-12 h-12 flex items-center justify-center border border-gray-400 rounded-sm font-bold ${
                        selectedOption === label
                          ? "bg-black text-white"
                          : "bg-transparent text-black"
                      }`}
                    >
                      {label}
                    </div>
                  </label>
                ))}
              </div>
            </span>
          </div>

          <div id="addtocart" className="my-5">
            <button className="bg-[#78866B] text-[#F5F5F5] text-xl px-6 py-3 mt-5 rounded-full w-6/12">
              Add To Bag
            </button>
          </div>

          <div id="extraoptions" className="my-12">
            <div id="top" className="flex flex-row justify-start align-middle">
              <div id="left" className="mx-4">
                <FaTruckFast size={40} />
              </div>
              <div id="right">
                <h1 className="text-xl font-bold">Shipping Discount</h1>
                <p>Reduced rate express shipping on orders over Br $3000.</p>
              </div>
            </div>

            {/* <div id="bottom">
              <div id="left"></div>
              <div id="right"></div>
            </div> */}
          </div>

          <div id="deatils" className="my-10">
            <h1 className="my-8 text-2xl font-black">About This Style.</h1>
            <p>
              Join the crew. We took our luxurious cashmere and blended it with
              wool for a heftier weight, then added texture with a fisherman
              stitch. Warm, soft, and cozy—but still looking sharp, this crew
              neck sweater is perfect for winter workwear, downtime, daytime,
              and even cozy dates.
            </p>
          </div>

          <div id="fitcheck">
              
          </div>

          {/* <div>
            <h1>Sustainability</h1>
            <div>
              <h1>Animal Welfare</h1>
              <h1>Cleaner Chemistry</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
