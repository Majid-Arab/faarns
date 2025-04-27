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

const data = [
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
      {/* <!-- Item 1 --> */}
      <div className={classes.inner}>
        <div
          className={classes.imgBox}
          style={{ backgroundImage: `${image}` }}
        />
        <div className={classes.testimonial}>
          <div>
            <div
              className={classes.mobileImgBox}
              style={{ backgroundImage: `${image}` }}
            />
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
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = data.map((item) => <Card key={item.name} {...item} />);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center ">
      <div id="default-carousel" className={classes.root} data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        {slides}
        {/* <!-- Slider indicators --> */}
        <div className={classes.indicators}>
          <button
            type="button"
            className={classes.indicator}
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className={classes.indicator}
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className={classes.indicator}
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className={classes.indicator}
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className={classes.indicator}
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <div className={classes.controls}>
          <button
            onClick={handlePrev}
            type="button"
            className={classes.control}
            data-carousel-prev
          >
            <IconArrowLeft />
            <span className="sr-only">Previous</span>
          </button>
          <button
            onClick={handleNext}
            type="button"
            className={classes.control}
            data-carousel-next
          >
            <IconArrowRight />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
