"use client";

import { useRef } from "react";
import CardItems from "./CardItems";

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

  // const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return (
    <div
      ref={containerRef}
      className="flex flex-wrap lg:flex-nowrap w-full justify-center items-center gap-5 py-5"
    >
      {images.map(({ src, offset }, index) => {
        return <CardItems index={index} src={src} offset={offset} />;
      })}
    </div>
  );
}
