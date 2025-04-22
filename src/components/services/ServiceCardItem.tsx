import { Card, Text } from "@mantine/core";
import { motion, useTransform } from "motion/react";
import classes from "./ServiceCard.module.css";
import { ServicesCards } from "../../../type/type";

const ServiceCardItem = ({
  service,
  index,
  progress,
  range,
  targetScale,
}: ServicesCards) => {
  const ImageScale = useTransform(
    progress,
    [index * 0.05, 1],
    [targetScale, 1],
  );
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      className="sticky h-screen"
      key={service.title}
      style={{ top: `${50 + index * 40}px` }}
    >
      <motion.div style={{ scale }}>
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
              scale: ImageScale,
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
      </motion.div>
    </div>
  );
};

export default ServiceCardItem;
