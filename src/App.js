import { Fragment } from "react";
import NavBar from "./components/Navigation/NavBar";
import HeroBanner from "./components/Hero/HeroBanner";
import AboutSection from "./components/About/AboutSection";
import ServicesSection from "./components/Services/ServicesSection";
import CarsSection from "./components/Cars/CarsSection";
import GallerySection from "./components/Gallery/GallerySection";

function App() {
  return (
    <Fragment>
      <NavBar />
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <CarsSection />
      <GallerySection />
    </Fragment>
  );
}

export default App;
