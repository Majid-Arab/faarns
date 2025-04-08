import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import OurWork from "@/sections/ourWork";
import Services from "@/sections/Services";
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
      {/* <CaseStudies /> */}
    </div>
  );
}
