import { Box, Button, Group } from "@mantine/core";
import Image from "next/image";
import React from "react";
import LightBtn from "./LightBtn";

const Hero = () => {
  return (
    <Box className="relative flex flex-col items-center pt-4 pb-8 overflow-hidden">
      {/* Background Gradients */}
      <LightBtn />

      {/* Main Content */}
      <Box className="flex flex-col items-center justify-center gap-1 relative z-10">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-[50px] h-[60px]"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />

        {/* Button */}
        <Button
          variant="light"
          color="#fff"
          size="md"
          radius="xl"
          className="text-xs md:text-md md:px-3 tracking-wide"
        >
          Leading Marketing Agency
        </Button>
      </Box>

      {/* Title and Tags */}
      <Box className="leading-none relative z-10">
        <h1 className="text-7xl sm:text-8xl md:text-[200px] lg:text-[300px] font-bold uppercase m-0 p-0">
          Faarns
        </h1>
        <Group
          className="text-xs md:text-lg font-bold -mt-[10px] md:-mt-2"
          justify="space-between"
        >
          <span>Website</span>
          <span>Marketing</span>
          <span>Saas</span>
          <span>SEO</span>
        </Group>
      </Box>
    </Box>
  );
};

export default Hero;
