"use client";

import React, { useEffect, useState } from "react";
import IndividualProduct from "../../components/IndividualProduct/IndividualProduct";
import NavBar from "../../components/Navbar/NavBar";
import RecommendedCover from "../../components/Recommended/RecommendedCover";
import Footer from "../../components/Footer/Footer";
import { ProductGet } from "@/typefile";
import { useParams } from "next/navigation";
import { products } from "../../../dummyData";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductGet | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(
        (product: ProductGet) => product.id === Number(id)
      );
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <NavBar />
      <IndividualProduct product={product} />
      <RecommendedCover />
      <Footer />
    </div>
  );
};

export default ProductPage;
