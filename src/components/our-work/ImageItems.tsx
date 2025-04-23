"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

type Prop = {
  index: number;
  src: string;
  offset: number;
  rotate: number;
};

export function LeftImages({ index, src, offset, rotate }: Prop) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const leftX = useTransform(scrollXProgress, [0, 1], [0, offset]);
  const rotateX = useTransform(scrollXProgress, [0, 1], [0, rotate]);
  return (
    <motion.div
      ref={containerRef}
      style={{ x: leftX, rotateX }}
      //   className="flex flex-col gap-20 md:gap-2 md:absolute right-20"
    >
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        height={500}
        width={500}
        className="max-w-[500px] h-20 rounded-md hidden md:block"
        style={{
          maxWidth: "100%",
        }}
      />
    </motion.div>
  );
}

export function RightImages({ index, src, offset, rotate }: Prop) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rightX = useTransform(scrollXProgress, [0, 1], [0, offset]);
  const rotateX = useTransform(scrollXProgress, [0, 1], [0, -rotate]);
  return (
    <motion.div
      ref={containerRef}
      style={{ x: rightX, rotateX }}
      //   className="flex flex-col gap-20 md:gap-2 md:absolute right-20"
    >
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        width={500}
        height={500}
        className="max-w-[500px] h-20 rounded-md hidden md:block"
        style={{
          maxWidth: "100%",
        }}
      />
    </motion.div>
  );
}
