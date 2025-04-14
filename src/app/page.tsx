import { Affiliate } from "@/components/affiliate/Affiliate";
import CaseStudies from "@/components/case-studies/CaseStudies";
import Contact from "@/components/contact/Contact";
import FAQ from "@/sections/FAQ";
import Hero from "@/sections/Hero";
import OurWork from "@/sections/ourWork";
import Services from "@/sections/Services";
import Socials from "@/sections/Socials";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Contact />
      <Services />
      <OurWork />
      <WhyUs />
      <CaseStudies />
      <Affiliate />
      <FAQ />
      <Socials />
    </>
  );
}
