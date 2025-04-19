import { useState, useEffect, type ReactNode } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GalleryVideos from "./components/GalleryVideos";

function App({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <Hero />
        {children}
        <Services />
        <Gallery />
        <GalleryVideos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
