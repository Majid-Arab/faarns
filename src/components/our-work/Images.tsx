"use client";

import { useRef } from "react";
import { LeftImages, RightImages } from "./ImageItems";
import { useScroll } from "motion/react";

export function LeftGallery() {
  const imagesLeft = [
    { src: "/assets/cosmic.jpeg", offsetX: 350, offsetY: -100, rotate: 10 },
    { src: "/assets/custom-web.jpeg", offsetX: 380, offsetY: -200, rotate: 10 },
    {
      src: "/assets/enagic-affiliate.jpeg",
      offsetX: 480,
      offsetY: -300,
      rotate: 10,
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-10 md:gap-2 md:absolute top-5 md:top-15 right-20"
    >
      {imagesLeft.map(({ src, offsetX, offsetY, rotate }, index) => {
        return (
          <LeftImages
            key={index}
            index={index}
            src={src}
            progress={scrollYProgress}
            offsetX={offsetX}
            offsetY={offsetY}
            rotate={rotate}
          />
        );
      })}
    </div>
  );
}

export function RightGallery() {
  const imagesRight = [
    { src: "/assets/faarns.jpeg", offsetX: -350, offsetY: -100, rotate: 10 },
    { src: "/assets/potential.jpeg", offsetX: -380, offsetY: -200, rotate: 10 },
    {
      src: "/assets/web-automation.jpeg",
      offsetX: -480,
      offsetY: -300,
      rotate: 10,
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-20 md:gap-2 absolute top-5 md:top-15 left-20"
    >
      {imagesRight.map(({ src, offsetX, offsetY, rotate }, index) => {
        return (
          <RightImages
            key={index}
            index={index}
            src={src}
            progress={scrollYProgress}
            offsetX={offsetX}
            offsetY={offsetY}
            rotate={rotate}
          />
        );
      })}
    </div>
  );
}
