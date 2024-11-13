"use client";

import React, { useState, SyntheticEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";

const NavBar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggleSearchBar = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!search.trim()) {
      // setServerError("Please enter a search term.");
      return;
    }

    // setServerError(null);
    window.location.href = `/search?query=${encodeURIComponent(search)}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-gray-200 py-0 bg-white z-50 h-[13vh] rounded-b-3xl shadow-lg opacity-65">
      <div className="flex items-center justify-between w-full px-4">
        {/* Logo */}
        <div className="flex items-center w-[10vw] mx-10 my-3">
          <Link href="/">
            <Image
              src="/IMG_5026.png"
              alt="Logo"
              width={50}
              height={10}
              className="z-50 mb-5 zoom-out-hover"
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
        <div className="flex items-center space-x-4 relative">
          {/* Search Bar */}
          <form onSubmit={onSearchSubmit} className="relative">
            <input
              type="text"
              name="searchInput"
              placeholder="Search..."
              onChange={handleSearchChange}
              value={search}
              className={`transition-all duration-500 ease-in-out transform ${
                isSearchOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } absolute left-[-150px] w-[150px] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 z-50`}
            />
          </form>

          {/* Search Icon */}
          <button
            onClick={toggleSearchBar}
            className="text-gray-500 hover:text-gray-900 transition duration-300"
          >
            <CiSearch fontSize={30} />
          </button>

          {/* User and Cart Icons */}
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition duration-300"
          >
            <CiUser fontSize={30} />
          </Link>
          <Link
            href="#"
            className="text-gray-500 hover:text-gray-900 transition duration-300"
          >
            <CiShoppingCart fontSize={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
