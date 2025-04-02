import { Box, Card, Text } from "@mantine/core";
import classes from "./serviceCard.module.css";

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione tempore atque facere animi officiis eveniet modi fugit eaque corrupti. Quasi unde fuga quis minus possimus molestiae perferendis earum ratione eaque harum.",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione tempore atque facere animi officiis eveniet modi fugit eaque corrupti. Quasi unde fuga quis minus possimus molestiae perferendis earum ratione eaque harum.",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione tempore atque facere animi officiis eveniet modi fugit eaque corrupti. Quasi unde fuga quis minus possimus molestiae perferendis earum ratione eaque harum.",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione tempore atque facere animi officiis eveniet modi fugit eaque corrupti. Quasi unde fuga quis minus possimus molestiae perferendis earum ratione eaque harum.",
  },
];

export function ServiceCard() {
  const cards = mockdata.map((service) => (
    <Card
      key={service.title}
      p="xl"
      shadow="lg"
      className={classes.card}
      radius="40"
      component="a"
      href="#"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {service.title}
          </Text>

          <Text size="sm" className={classes.description}>
            {service.description}
          </Text>
        </div>
      </div>
    </Card>
  ));
  return <Box className="w-60 flex flex-col gap-5">{cards}</Box>;
}
