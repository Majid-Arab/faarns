import { ServiceCard } from "@/components/services/ServiceCard";
import { Button, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="relative top-0 flex flex-col items-center justify-center gap-3 mt-10">
      <Button
        radius="xl"
        size="xl"
        variant="light"
        className="text-xl md:text-2xl text-white text-center flex justify-center items-center gap-2 transition-colors inset-shadow-sm inset-shadow-[#7057F1]"
      >
        <Image
          src="/assets/star.svg"
          alt="Star"
          width={500}
          height={500}
          className="w-6 h-6 absolute right-0 top-0"
        />
        Our Services
      </Button>

      <Title order={1} className=" text-3xl md:text-5xl text-center">
        We create{" "}
        <span className="font-bold font-playfair italic text-[40px] md:text-[52px]">
          brand
        </span>{" "}
        that make an{" "}
        <span className="font-bold font-playfair italic text-[40px]  md:text-[52px]">
          impact
        </span>
        .
      </Title>

      <ServiceCard />
    </div>
  );
};

export default Services;
