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
        className="text-2xl text-white text-center flex justify-center items-center gap-2 transition-colors inset-shadow-sm inset-shadow-[#7057F1]"
      >
        Our Services
      </Button>

      <Title order={1} size={40}>
        We create <span className="italic">brand</span> that make an <span className="italic">impact</span>.
      </Title>

      <ServiceCard />
    </div>
  );
};

export default Services;
