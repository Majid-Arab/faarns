import { FaqSimple } from "@/components/faq/FaqSimple";
import ItalicText from "@/components/ui/ItalicText";
import { Title } from "@mantine/core";
import React from "react";

const FAQ = () => {
  return (
    <div className="bg-[url(/assets/wh.png)] w-full bg-cover bg-no-repeat bg-center flex justify-center px-2 py-10">
      <div className="w-[1400px]">
        <button className="border-1 border-white text-md md:text-xl rounded-full bg-[rgba(255, 255, 255, 0.15)] bg-light text-white px-[25px] py-[5px]">
          Frequently asked questions
        </button>
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
