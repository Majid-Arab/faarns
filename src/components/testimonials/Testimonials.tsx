"use client";

import { Carousel } from "@mantine/carousel";
import { Paper, Text, Title } from "@mantine/core";
import classes from "./Testimonials.module.css";
import ItalicText from "../ui/ItalicText";
import Image from "next/image";
import {
  IconArrowLeft,
  IconArrowRight,
  IconQuoteFilled,
} from "@tabler/icons-react";

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
        <div
          className={classes.imgBox}
          style={{ backgroundImage: `${image}` }}
        />
        <div className={classes.testimonial}>
          <div>
            <Text className={classes.icon} size="xs" mb={30}>
              <IconQuoteFilled size={35} />
            </Text>
            <Text className={classes.message} size="xl">
              {testimonial}
            </Text>
          </div>
          <div className={classes.company}>
            <div className="">
              <Title order={3} className={classes.name}>
                {name}
              </Title>
              <Text className={classes.message} size="lg">
                {company}
              </Text>
            </div>
            <Image
              src={logo}
              alt="Background Gradient"
              width={500}
              height={500}
              className="object-contain rounded- w-6 h-fit bg-black"
            />
          </div>
        </div>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: "/assets/blog.png",
    testimonial: "Best forests to visit in North America",
    name: "Jhon Doe",
    company: "Company name",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Hawaii beaches review: better than you think",
    name: "beach1",
    company: "Company name",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Mountains at night: 12 best locations to enjoy the view",
    name: "Jhon Doe2",
    company: "Company name",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Aurora in Norway: when to visit for best experience",
    name: "Jhon Doe3",
    company: "Company name",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Best places to visit this winter",
    name: "tourism",
    company: "Company name",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Active volcanos reviews: travel at your own risk",
    name: "Jhon Doe4",
    company: "Company name",
    logo: "/assets/client.png",
  },
];

export function Testimonials() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.name}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative flex flex-col gap-5">
        <Image
          src="/assets/footerGradient.svg"
          alt="Background Gradient"
          width={500}
          height={500}
          className="absolute -z-1 object-center"
        />
        <div>
          <Text
            mb={20}
            className="m-auto max-w-[250px] md:max-w-[280px] text text-xl md:text-[25px] text-center"
          >
            Don&apos;t take <ItalicText text="our" /> Word for it
          </Text>
          <Title className="capitalize text-3xl md:text-5xl text-center">
            See what our <ItalicText text="Clients" /> say!
          </Title>
        </div>
        <Carousel
          withIndicators
          slideSize={"100%"}
          slideGap={{ base: 4, sm: 0 }}
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
