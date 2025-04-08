import { Grid, GridCol, ThemeIcon, Title, Text } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="h-80 py-8 bg-white rounded-2xl flex justify-center relative">
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
          <div>
            <ThemeIcon
              size="xl"
              radius="md"
              variant="transparent"
              gradient={{ deg: 0, from: "pink", to: "orange" }}
            >
              <IconColorSwatch size={28} stroke={1.5} />
            </ThemeIcon>
            <Text size="xl" fw={500} mt="md">
              Theming documentation
            </Text>
            <Text size="sm" mt="sm" c="dimmed">
              Extend default theme with any amount of additional colors, replace
              shadows, radius, spacing, fonts and many other properties to match
              your design requirements. Mantine theme is just an object, you can
              subscribe to it in any part of application via context and use it
              to build your own components.
            </Text>
          </div>
        </GridCol>
      </Grid>
    </section>
  );
};

export default CaseStudies;
