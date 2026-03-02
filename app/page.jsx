import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import ResultSlider from "@/components/ResultSlider";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <ResultSlider />
      <Testimonial />
      <Contact />
      <Map />
      <Footer />
    </>
  );
};

export default page;
