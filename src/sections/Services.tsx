import { ServiceCard } from "@/components/serviceCard";
import { Button, Title } from "@mantine/core";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <Button variant="filled" color="rgba(0, 0, 0, 1)" size="lg" radius="xl">
        Button
      </Button>

      <Title order={1} size={40}>
        We create brand that make an impact.
      </Title>

      <ServiceCard />
    </div>
  );
};

export default Services;
