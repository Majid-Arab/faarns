"use client";

import { motion, useTransform } from "motion/react";
import Image from "next/image";
import { OurWorkImages } from "../../../type/type";

export function LeftImages({
  index,
  src,
  progress,
  offset,
  rotate,
}: OurWorkImages) {
  const leftX = useTransform(progress, [0, 1], [0, offset]);
  const rotateX = useTransform(progress, [0, 1], [0, rotate]);

  return (
    <motion.div
      style={{ x: leftX, rotate: rotateX }}
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

export function RightImages({
  index,
  src,
  progress,
  offset,
  rotate,
}: OurWorkImages) {
  const rightX = useTransform(progress, [0, 1], [0, offset]);
  const rotateX = useTransform(progress, [0, 1], [0, -rotate]);

  return (
    <motion.div
      style={{ x: rightX, rotate: rotateX }}
      // className="-rotate-6"
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
