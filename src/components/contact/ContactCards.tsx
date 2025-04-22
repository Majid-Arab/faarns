"use client";

import { Card, Image, CardSection } from "@mantine/core";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ImageGallery() {
  const images = [
    { src: "/assets/cosmic.jpeg", offset: -600 },
    { src: "/assets/custom-web.jpeg", offset: -150 },
    { src: "/assets/enagic-affiliate.jpeg", offset: -350 },
    { src: "/assets/faarns.jpeg", offset: -650 },
    { src: "/assets/potential.jpeg", offset: -250 },
    { src: "/assets/web-automation.jpeg", offset: -450 },
    { src: "/assets/words-to-visual.jpeg", offset: -100 },
  ];

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return (
    <div
      ref={containerRef}
      className="flex flex-wrap lg:flex-nowrap w-full justify-center items-center gap-5 py-5"
    >
      {images.map(({ src, offset }, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

        return (
          <motion.div
            key={index}
            style={{ y }}
            className="transform transition-all duration-300 hover:scale-105 -z-1"
          >
            <Card>
              <CardSection className="w-14 h-20">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CardSection>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
