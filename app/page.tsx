import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import LandingCover from "./components/LandingCover/LandingCover";
import LandingCover2 from "./components/LandingCover/LandingCover2";
import NavBar from "./components/Navbar/NavBar";
import ProductSection from "./components/Product/ProductSection";
import RecommendedCover from "./components/Recommended/RecommendedCover";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <LandingCover />
      <ProductSection />
      <LandingCover2/>
      <RecommendedCover/>
      <Gallery/>
      <Footer/>
      {/* <StickyFooter/>  */}
      {/* <IndividualProduct/>
      <ProductPage/> */}
    </div>
  );
}
