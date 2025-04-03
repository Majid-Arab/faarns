import { Header } from "@/components/header";
import Contact from "@/sections/Contac";
import Hero from "@/sections/Hero";
import OurWork from "@/sections/ourWork";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <Services />
      <OurWork />
    </>
  );
}
