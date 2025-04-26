"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { OurWorkImages } from "../../../type/type";
import { useRef } from "react";

export function LeftImages({
  index,
  src,
  offsetX,
  offsetY,
  rotate,
}: OurWorkImages) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, offsetX]);
  const y = useTransform(scrollYProgress, [0, 1], [0, offsetY]);
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, rotate]);

  return (
    <motion.div ref={containerRef} style={{ x, y, rotate: rotateValue }}>
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        height={500}
        width={500}
        className="max-w-[500px] h-20 rounded-md hidden md:block"
        style={{
          maxWidth: "100%",
          maxHeight: "20%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}

export function RightImages({
  index,
  src,
  offsetX,
  offsetY,
  rotate,
}: OurWorkImages) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, offsetX]);
  const y = useTransform(scrollYProgress, [0, 1], [0, offsetY]);
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, -rotate]);

  return (
    <motion.div ref={containerRef} style={{ x, y, rotate: rotateValue }}>
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        width={500}
        height={500}
        className="max-w-[500px] h-20 rounded-md hidden md:block"
        style={{
          maxWidth: "100%",
          maxHeight: "20%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}
