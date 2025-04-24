"use client";

import { useRef } from "react";
import { LeftImages, RightImages } from "./ImageItems";
import { useScroll } from "motion/react";

export function LeftGallery() {
  const imagesLeft = [
    { src: "/assets/cosmic.jpeg", offset: 400, rotate: 50 },
    { src: "/assets/custom-web.jpeg", offset: 200, rotate: 30 },
    { src: "/assets/enagic-affiliate.jpeg", offset: 100, rotate: 10 },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-20 md:gap-2 md:absolute right-20"
    >
      {imagesLeft.map(({ src, offset, rotate }, index) => {
        return (
          <LeftImages
            key={index}
            index={index}
            src={src}
            progress={scrollXProgress}
            offset={offset}
            rotate={rotate}
          />
        );
      })}
    </div>
  );
}

export function RightGallery() {
  const imagesRight = [
    { src: "/assets/faarns.jpeg", offset: -400, rotate: 50 },
    { src: "/assets/potential.jpeg", offset: -200, rotate: 30 },
    { src: "/assets/web-automation.jpeg", offset: -100, rotate: 10 },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-20 md:gap-2 absolute left-20"
    >
      {imagesRight.map(({ src, offset, rotate }, index) => {
        return (
          <RightImages
            key={index}
            index={index}
            src={src}
            progress={scrollXProgress}
            offset={offset}
            rotate={rotate}
          />
        );
      })}
    </div>
  );
}
