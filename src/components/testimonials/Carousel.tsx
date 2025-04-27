"use client";

import { useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconQuoteFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import classes from "./Testimonials.module.css";
import { Text, Title } from "@mantine/core";

interface CardProps {
  image: string;
  name: string;
  company: string;
  logo: string;
  testimonial: string;
}

const data: CardProps[] = [
  {
    image: "/assets/blog.png",
    testimonial: "Best forests to visit in North America",
    name: "John Doe",
    company: "Company name",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Mountains at night: 12 best locations",
    name: "Jane Smith",
    company: "Another Company",
    logo: "/assets/client.png",
  },
  {
    image: "/assets/affiliate.png",
    testimonial: "Aurora in Norway: best experience",
    name: "Alice Johnson",
    company: "Norway Co",
    logo: "/assets/client.png",
  },
];

function Card({ image, name, testimonial, company, logo }: CardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.inner}>
        <div
          className={classes.imgBox}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className={classes.testimonial}>
          <div className={classes.testimonialWrapper}>
            <div
              className={classes.mobileImgBox}
              style={{ backgroundImage: `url(${image})` }}
            />
            <Text className="hidden md:block" size="xs">
              <IconQuoteFilled size={35} />
            </Text>
            <Text className={classes.message} size="xl">
              {testimonial}
            </Text>
          </div>
          <div className={classes.company}>
            <div>
              <Title order={3} className={classes.name}>
                {name}
              </Title>
              <Text className={classes.company} size="lg">
                {company}
              </Text>
            </div>
            <Image
              src={logo}
              alt="Company logo"
              width={40}
              height={40}
              className="object-cover w-6 h-fit bg-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div id="carousel" className={classes.root}>
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const isNext = index === (activeIndex + 1) % data.length;

          return (
            <div
              key={item.name}
              className={`${classes.slide} ${isActive ? classes.active : ""} ${isNext ? classes.next : ""}`}
            >
              <Card {...item} />
            </div>
          );
        })}

        {/* Controls */}
        <div className={classes.controls}>
          <button onClick={handlePrev} className={classes.control}>
            <IconArrowLeft size={24} />
          </button>
          <button onClick={handleNext} className={classes.control}>
            <IconArrowRight size={24} />
          </button>
        </div>
      </div>
      {/* Indicators */}
      <div className={classes.indicators}>
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${classes.indicator} ${index === activeIndex ? classes.activeIndicator : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
