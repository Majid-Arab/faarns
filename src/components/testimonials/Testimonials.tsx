"use client";

import { Carousel } from "@mantine/carousel";
import { Button, Paper, Text, Title } from "@mantine/core";
import classes from "./Testimonials.module.css";
import ItalicText from "../ui/ItalicText";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface CardProps {
  image: string;
  name: string;
  company: string;
  logo: string;
  testimonial: string;
}

function Card({ image, name, testimonial, company, logo }: CardProps) {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.imgBox}>
          <Image
            src={image}
            alt="Testimonials"
            width={500}
            height={500}
            className={classes.image}
            style={{
              width: "50%",
              height: "100%",
            }}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div>
          <Text className={classes.testimonial} size="xs">
            &quot;&ldquo;
          </Text>
          <Text className={classes.testimonial} size="xs">
            {testimonial}
          </Text>
          <Title order={3} className={classes.name}>
            {name}
          </Title>
          <Title order={3} className={classes.name}>
            {company}
          </Title>
          <Title order={3} className={classes.name}>
            {logo}
          </Title>
        </div>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: "/assets/blog.png",
    testimonial: "Best forests to visit in North America",
    name: "nature",
    company: "Company name",
    logo: "/assets/affiliate.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Hawaii beaches review: better than you think",
    name: "beach",
    company: "Company name",
    logo: "/assets/affiliate.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Mountains at night: 12 best locations to enjoy the view",
    name: "nature",
    company: "Company name",
    logo: "/assets/affiliate.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Aurora in Norway: when to visit for best experience",
    name: "nature",
    company: "Company name",
    logo: "/assets/affiliate.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Best places to visit this winter",
    name: "tourism",
    company: "Company name",
    logo: "/assets/affiliate.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Active volcanos reviews: travel at your own risk",
    name: "nature",
    company: "Company name",
    logo: "/assets/affiliate.png",
  },
];

export function Testimonials() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className="h-screen ">
      <div>
        <Image
          src="/assets/footerGradient.svg"
          alt="Background Gradient"
          width={500}
          height={500}
          className="absolute -z-1 object-center"
        />
        <Text className="m-auto max-w-[250px] md:max-w-[280px] text text-xl md:text-[25px] text-center">
          Don&apos;t take <ItalicText text="our" /> Word for it
        </Text>
        <Title className="capitalize text-3xl md:text-5xl text-center">
          See what our <ItalicText text="Clients" /> say!
        </Title>
        <Carousel
          withIndicators
          slideSize={"100%"}
          slideGap={{ base: 4, sm: "xl" }}
          nextControlIcon={<IconArrowRight />}
          previousControlIcon={<IconArrowLeft />}
          align="start"
          classNames={classes}
          style={{ maxWidth: "1000px", margin: "auto" }}
          loop
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}
