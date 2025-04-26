"use client";

import { Box } from "@mantine/core";
import { useRef } from "react";
import { useScroll } from "motion/react";
import { cardsData } from "../../../type/data";
import ServiceCardItem from "./ServiceCardItem";

export function ServiceCard() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Box ref={container} className="flex flex-col mx-2 lg:max-w-60 relative">
      {cardsData.map((service, index) => {
        const targetScale = 1 - (cardsData.length - index) * 0.05;
        return (
          <ServiceCardItem
            key={service.title}
            service={service}
            index={index}
            progress={scrollYProgress}
            targetScale={targetScale}
            range={[index * 0.25, 1]}
          />
        );
      })}
    </Box>
  );
}
