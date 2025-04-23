"use client";

import { useRef } from "react";
import { LeftImages, RightImages } from "./ImageItems";

export function LeftGallery() {
  const imagesLeft = [
    { src: "/assets/cosmic.jpeg", offset: -600, rotate: 60 },
    { src: "/assets/custom-web.jpeg", offset: -150, rotate: 40 },
    { src: "/assets/enagic-affiliate.jpeg", offset: -350, rotate: 20 },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

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
    { src: "/assets/faarns.jpeg", offset: -650, rotate: 60 },
    { src: "/assets/potential.jpeg", offset: -250, rotate: 40 },
    { src: "/assets/web-automation.jpeg", offset: -450, rotate: 20 },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

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
            offset={offset}
            rotate={rotate}
          />
        );
      })}
    </div>
  );
}
