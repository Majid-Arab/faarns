import { LeadGrid } from "@/components/why-us/LeadGrid";
import ItalicText from "@/components/ui/ItalicText";
import { Title } from "@mantine/core";
import React from "react";
import LightButton from "../ui/LightButton";

const WhyUs = () => {
  return (
    <div className="bg-[url(/assets/whyus.png)] w-full bg-cover bg-no-repeat bg-center flex justify-center px-2 py-10">
      <div className="w-[1400px]">
        <LightButton text="Why Choose Us" />
        <Title className="my-2 text-center md:text-start text-3xl md:text-5xl ">
          <ItalicText text="Why" /> FAARNS is The&nbsp;
          <ItalicText text="Right Choice" /> For You
        </Title>
        <LeadGrid />
      </div>
    </div>
  );
};

export default WhyUs;
