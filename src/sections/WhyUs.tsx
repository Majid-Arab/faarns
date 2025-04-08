import { LeadGrid } from "@/components/grid";
import ItalicText from "@/components/ItlaicText";
import { Button, Title } from "@mantine/core";
import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-[url(/assets/whyus.png)] w-full bg-cover flex justify-center px-2 py-10">
      <div className="w-[1400px]">
        <button className="border-1 border-white text-md md:text-xl rounded-full bg-[rgba(255, 255, 255, 0.15)] text-white px-1">
          <Button
            variant="light"
            color="white"
            radius="lg"
            className="border-1 border-white"
          >
            Why Choose Us
          </Button>{" "}
          Why Choose Us
        </button>
        <Title className="my-2 sm:text-center text-3xl md:text-5xl ">
          <ItalicText text="Why" /> FAARNS is The{" "}
          <ItalicText text="Right Choice" /> For You
        </Title>
        <LeadGrid />
      </div>
    </div>
  );
};

export default WhyUs;
