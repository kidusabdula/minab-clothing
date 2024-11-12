import React, { useEffect, useState } from "react";
import ShopProductList from "../ShopSection/ShopProductList";
import { ProductGet } from "@/typefile";
import NavBar from "../Navbar/NavBar";
import { useSearchParams } from "next/navigation";
import { products } from "../../../dummyData";

const Search = () => {
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
      <NavBar />
      <div>
        <h1>Search Results For T-Shirt</h1>
      </div>{" "}
      <h1>Search Results for: {searchQuery}</h1>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <div>
          <ShopProductList products={searchResults} />
        </div>
      )}
    </div>
  );
};

export default Search;
