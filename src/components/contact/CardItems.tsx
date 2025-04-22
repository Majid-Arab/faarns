"use client";

import { Card, CardSection } from "@mantine/core";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

type Prop = {
  index: number;
  src: string;
  offset: number;
};

const containerRef = useRef();
const CardItems = ({ index, src, offset }: Prop) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return (
    <motion.div
      ref={containerRef}
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
};

export default CardItems;
