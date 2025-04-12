import CaseStudies from "@/sections/CaseStudies";
import Contact from "@/sections/Contact";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import OurWork from "@/sections/ourWork";
import Services from "@/sections/Services";
import Socials from "@/sections/Socials";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
  return (
    <div className="pb-10">
      {/* <Header /> */}
      <Hero />
      <Contact />
      <Services />
      <OurWork />
      <WhyUs />
      <CaseStudies />
      <FAQ />
      <Socials />
      <Footer />
    </div>
  );
}
