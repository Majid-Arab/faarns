"use client";

import { Box, Card, Text } from "@mantine/core";
import classes from "./ServiceCard.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cardsData } from "../../../type/data";

export function ServiceCard() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cards = mockdata.map((service, index) => (
    <div
      className="sticky h-screen"
      key={service.title}
      style={{ top: `${50 + index * 40}px` }}
    >
      <Card
        p="xl"
        shadow="lg"
        className={classes.card}
        radius="40"
        component="a"
        href="#"
      >
        <motion.div
          className={classes.image}
          style={{
            scale,
            backgroundImage: `url(${service.image})`,
          }}
        />
        <div className={classes.overlay} />

        <div className={classes.content}>
          <div>
            <Text size="lg" className={classes.title} fw={800}>
              {service.title}
            </Text>

            <Text size="sm" className={classes.description}>
              {service.description}
            </Text>
          </div>
        </div>
      </Card>
    </div>
  ));

  return (
    <Box className="flex flex-col gap-5 mx-2 lg:max-w-60 py-5 relative">
      {cards}
    </Box>
  );
}
