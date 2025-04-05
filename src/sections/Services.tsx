import { ServiceCard } from "@/components/serviceCard";
import { Button, Title } from "@mantine/core";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <Button
        radius="xl"
        size='xl'
        variant='light'
        className="text-xl md:text-2xl text-white text-center flex justify-center items-center gap-2 transition-colors inset-shadow-sm inset-shadow-[#7057F1]"
      >
        Our Services
      </Button>

      <Title order={1} className="text-4xl md:text-5xl text-center">
        We create <span className="font-bold font-playfair italic text-[40px] md:text-[52px]">brand</span> that make an <span className="font-bold font-playfair italic text-[40px]  md:text-[52px]">impact</span>.
      </Title>

      <ServiceCard />
    </div>
  );
};

export default Services;
