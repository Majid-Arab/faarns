"use client";

import { useState } from "react";
import { Paper, Text, Title, Button } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconQuoteFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

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

export default function StackedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-xl h-[450px]">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <Paper
              key={index}
              shadow="md"
              p="xl"
              radius="md"
              className={`${styles.slide} ${isActive ? styles.active : ""}`}
              style={{ zIndex: data.length - index }}
            >
              <div className="flex flex-col h-full justify-between">
                <Text className="text-blue-500">
                  <IconQuoteFilled size={30} />
                </Text>
                <Text className="text-xl">{item.testimonial}</Text>
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <Title order={3}>{item.name}</Title>
                    <Text>{item.company}</Text>
                  </div>
                  <Image
                    src={item.logo}
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </Paper>
          );
        })}
      </div>

      <div className="mt-5 flex gap-4">
        <Button onClick={handlePrev} leftSection={<IconArrowLeft />}>
          Prev
        </Button>
        <Button onClick={handleNext} rightSection={<IconArrowRight />}>
          Next
        </Button>
      </div>
    </div>
  );
}
