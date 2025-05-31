
import Header from "./components/Header";
import Hero from "./components/Hero";

import Services from "./components/Services";
import Gallery from "./components/Gallery"; 
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import FloatingElements from "./components/FloatingElements";
import About from "./components/AboutUs";
export default function Home() {
  return <>
        <FloatingElements />

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
  </>;
}