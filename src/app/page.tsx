import { Affiliate } from "@/components/affiliate/Affiliate";
import CaseStudies from "@/components/case-studies/CaseStudies";
import Contact from "@/components/contact/Contact";
import FAQ from "@/components/faq/FAQ";
import Hero from "@/components/main/Hero";
import OurWork from "@/components/our-work/OurWork";
import Services from "@/components/services/Services";
import Socials from "@/components/contact/Socials";
import WhyUs from "@/components/why-us/WhyUs";

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
