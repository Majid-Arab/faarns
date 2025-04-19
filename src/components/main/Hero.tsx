import { Box, Button, Group } from "@mantine/core";
import Image from "next/image";
import React from "react";
import NeonLine from "./TubeLight";

const Hero = () => {
  return (
    <Box className="flex flex-col items-center pt-4 pb-8">
      <Box className="flex flex-col items-center justify-center gap-1">
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
        {/* // Animated Light Bar that'll stretch on hover */}
        <NeonLine />
        {/* Button  */}
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
      <Box className="leading-none">
        <h1 className="text-7xl  sm:text-8xl md:text-[200px] lg:text-[300px] font-bold uppercase m-0 p-0">
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
