import React, { type ReactNode } from "react"; // Se unifica la importación de React y ReactNode

import Hero from "./components/Hero"; 
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryVideos from "./components/GalleryVideos";
import TestQR from "./components/TestQR";


const App = ({ children }: { children?: ReactNode }): JSX.Element => {
  return (
    <div>
      <Hero />
      <TestQR /> {/* Aquí se muestra el QR */}
      <div>
        {children}
        <Services />
        <Gallery />
        <GalleryVideos />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;