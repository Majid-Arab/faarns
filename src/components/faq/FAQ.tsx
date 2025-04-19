import { FaqSimple } from "@/components/faq/FaqSimple";
import ItalicText from "@/components/ui/ItalicText";
import { Title } from "@mantine/core";
import React from "react";
import LightButton from "../ui/LightButton";

const FAQ = () => {
  return (
    <div className="bg-[url(/assets/wh.png)] w-full bg-cover bg-no-repeat bg-center flex justify-center px-2 py-10">
      <div className="w-[1400px]">
        <LightButton text="Frequently asked questions" />
        <Title className="capitalize my-2 text-center md:text-start text-3xl md:text-5xl ">
          Before you ask,
          <ItalicText text="check" /> our FAQs!
        </Title>
        <FaqSimple />
      </div>
    </div>
  );
};

export default FAQ;
