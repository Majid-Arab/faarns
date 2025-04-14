import { LeadGrid } from "@/components/LeadGrid";
import ItalicText from "@/components/ui/ItalicText";
import { Title } from "@mantine/core";
import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-[url(/assets/wh.png)] w-full bg-cover bg-no-repeat bg-center flex justify-center px-2 py-10">
      <div className="w-[1400px]">
        <button className="border-1 border-white text-md md:text-xl rounded-full bg-[rgba(255, 255, 255, 0.15)] bg-light text-white px-[25px] py-[5px]">
          Why Choose Us
        </button>
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
