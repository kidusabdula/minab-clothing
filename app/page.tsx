import Footer from "./components/Footer/Footer";
import StickyFooter from "./components/Footer/StickyFooter";
import Gallery from "./components/Gallery/Gallery";
import IndividualProduct from "./components/IndividualProduct/IndividualProduct";
import LandingCover from "./components/LandingCover/LandingCover";
import NavBar from "./components/Navbar/NavBar";
import ProductCard from "./components/Product/ProductCard";
import ProductSection from "./components/Product/ProductSection";
import RecommendedCover from "./components/Recommended/RecommendedCover";
import ProductPage from "./shop/[id]";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <LandingCover />
      <ProductSection />
      <RecommendedCover/>
      <Gallery/>
      <Footer/>
      {/* <StickyFooter/>  */}
      {/* <IndividualProduct/>
      <ProductPage/> */}
    </div>
  );
}
