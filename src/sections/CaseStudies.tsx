import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ThemeIcon, Title, Text, Group, Box } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="h-80 py-8 bg-white rounded-2xl flex justify-center relative">
      <Title className="text-3xl md:text-5xl text-[rgba(0, 47, 64, 1)]">
        Case Studies
      </Title>
      <Group>
        <Box className="relative">
          <Image
            src="/assets/casestudy.png"
            alt="Image"
            height={400}
            width={400}
            className="absolute  right-19 rounded-xl"
          />
          <Image
            src="/assets/casestudy.png"
            alt="Image"
            height={500}
            width={500}
            // className="absolute top-2 rounded-xl borer-solid border-4 border-white"
            className="absolute top-2 rounded-xl"
          />
        </Box>
        <Box>
          <CaseStudyCard />
        </Box>
      </Group>
    </section>
  );
};

export default CaseStudies;
