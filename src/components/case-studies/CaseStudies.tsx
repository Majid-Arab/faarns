import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Title, Grid, GridCol } from "@mantine/core";
import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="relative h-fit py-8 bg-white rounded-2xl px-2">
      <Title className="text-3xl text-cyan-950 text-center mb-3 md:text-5xl text-[rgba(0, 47, 64, 1)]">
        Case Studies
      </Title>
      <Grid justify="center" gutter={60}>
        <GridCol
          span={{ base: 12, md: 4 }}
          className="sticky top-0 flex items-center justify-center md:items-end md:justify-end h-fit mt-1"
        >
          {/* Background Image */}
          <Image
            src="/assets/casestudy.png"
            alt="Image"
            height={500}
            width={500}
            className="rounded-4xl top-2 md:top-0 border-4 border-white shadow-lg z-2"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          {/* Foreground Image */}
          <Image
            src="/assets/casestudy.png"
            alt="Image"
            height={400}
            width={400}
            className="rounded-4xl absolute -top-[2px] -right-[2px]"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </GridCol>

        <GridCol span={{ base: 12, md: 4 }}>
          <div className="flex flex-col gap-10">
            <CaseStudyCard />
            <CaseStudyCard />
            <CaseStudyCard />
          </div>
        </GridCol>
      </Grid>
    </section>
  );
};

export default CaseStudies;
