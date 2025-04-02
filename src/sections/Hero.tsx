import { Box, Button, Group } from "@mantine/core";
import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <Box className="flex flex-col items-center justify-center h-screen">
      <Box className="flex flex-col items-center justify-center gap-2">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-[50px] h-[60px]"
        />
        {/* // Animated Light Bar that'll stretch on hover */}
        <div className="w-20 bg-black border-solid border-white border-2"></div>
        {/* Button  */}
        <Button
          variant="light"
          color="#fff"
          size="md"
          radius="xl"
          className="px-3 tracking-wide"
        >
          Leading Marketing Agency
        </Button>
      </Box>
      <Box className="leading-none">
        <h1 className="text-[300px] font-bold uppercase m-0 p-0">Faarns</h1>
        <Group className="text-lg font-bold -mt-2" justify="space-between">
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
