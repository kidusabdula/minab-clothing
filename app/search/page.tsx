'use client';

import React, { useEffect, useState, Suspense } from "react";
import ShopProductList from "../components/ShopSection/ShopProductList";
import { ProductGet } from "@/typefile";
import NavBar from "../components/Navbar/NavBar";
import { useSearchParams } from "next/navigation";
import { products } from "../../dummyData";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query"); // Get the query parameter from the URL
  const [searchResults, setSearchResults] = useState<ProductGet[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (searchQuery) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (filteredProducts.length > 0) {
        setSearchResults(filteredProducts);
        setErrorMessage(null);
      } else {
        setErrorMessage("No results found.");
      }
    }
  }, [searchQuery]);

  return (
    <div>
      <NavBar />{" "}
      <div className="p-5 m-5 mt-32">
        <h1>Search Results for: {searchQuery}</h1>
        {errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <div className="p-10">
            <ShopProductList products={searchResults} />
          </div>
        )}
      </div>
    </div>
  );
};

const Search = () => (
  <Suspense fallback={<div>Loading search results...</div>}>
    <SearchContent />
  </Suspense>
);

export default Search;
