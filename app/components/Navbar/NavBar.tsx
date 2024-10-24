import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Next.js Link component
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-gray-200 py-0 bg-white z-50 h-[13vh] rounded-b-3xl shadow-lg opacity-60">
      <div className="flex items-center justify-between w-full px-6">
        {/* Logo on the left */}

        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/IMG_4984.png"
              alt="Logo"
              width={150}
              height={50}
              className="mb-5"
            />
          </Link>
        </div>

        {/* Menus in the center */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6 gap-10">
            <li>
              <Link
                href="/shop"
                className="text-gray-500 text-xl font-medium hover:text-black transition duration-500 rounded-b-sm p-2 letter-spacing-2"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-500 text-xl font-medium hover:text-black transition duration-500"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-500 text-xl font-medium hover:text-black transition duration-500"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Icons on the right */}
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition duration-300"
          >
            <CiSearch fontSize={30}/>
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition duration-300"
          >
            <CiUser fontSize={30}/>
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition duration-300"
          >
            <CiShoppingCart fontSize={30}/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
