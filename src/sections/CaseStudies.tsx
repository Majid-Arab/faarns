import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Title, Group, Grid, GridCol } from "@mantine/core";
import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="h-80 py-8 bg-white rounded-2xl flex justify-center">
      <Title className="text-3xl md:text-5xl text-[rgba(0, 47, 64, 1)]">
        Case Studies
      </Title>
      <Grid>
        <GridCol span={6} className="relative">
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
        </GridCol>
        <GridCol span={6}>
          <CaseStudyCard />
        </GridCol>
      </Grid>
    </section>
  );
};

export default CaseStudies;
