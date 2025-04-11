import ItalicText from "@/components/ItlaicText";
import { Box, Group, Text, Title } from "@mantine/core";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";
import React from "react";

const Socials = () => {
  return (
    <div className=" px-2 py-2 bg-white">
      <div className="flex justify-between w-[1400px] text-black">
        <Text className="uppercase text-lg md:text-[28px] ">
          Got <ItalicText text="MORE" />
          <br />
          <span className="flex items-center">
            questions?
            <IconArrowRight size={30} />
          </span>
        </Text>
        <Box className="flex flex-col gap-1">
          <Title className="flex capitalize text-center md:text-start text-3xl md:text-5xl ">
            Contact&nbsp;
            <ItalicText text="Us" />{" "}
            <IconArrowUpRight size={60} className="text-purple-600" />
          </Title>
          <hr className="text-purple-600" />
          <Group justify="center">
            <IconBrandFacebookFilled size={40} />
            <IconBrandInstagramFilled size={40} />
            <IconBrandLinkedinFilled size={40} />
          </Group>
        </Box>
      </div>
    </div>
  );
};

export default Socials;
