import ItalicText from "@/components/ItlaicText";
import { Box, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div className="flex justify-center px-2 py-2 bg-white">
      <div className="flex items-center justify-between w-[1400px] text-black">
        <Text className="uppercase font-bold text-lg md:text-xl ">
          Got <ItalicText text="MORE" size="22px" />
          <br />
          <span className="flex items-center">
            questions?
            <IconArrowRight size={30} />
          </span>
        </Text>
        <Box className="flex flex-col gap-[10px]">
          <Title className="flex items-center capitalize text-center md:text-start text-3xl md:text-7xl ">
            Contact&nbsp;
            <ItalicText text="Us" size="70px" />
            <IconArrowUpRight size={45} className="text-purple-600" />
          </Title>
          <hr className="text-purple-600" />
          <Group justify="center" gap={45} mt={5}>
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              className="w- md:w-[40px] w- md:h-[40px]"
              width={500}
              height={500}
            />
            <Image
              src="/assets/instagram.svg"
              alt="Facebook"
              className="w- md:w-[40px] w- md:h-[40px]"
              width={500}
              height={500}
            />
            <Image
              src="/assets/linkedin.svg"
              alt="Facebook"
              className="w- md:w-[40px] w- md:h-[40px]"
              width={500}
              height={500}
            />
          </Group>
        </Box>
      </div>
    </div>
  );
};

export default Socials;
