"use client";

import {
  AspectRatio,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import classes from "./BlogCards.module.css";
import { useRouter } from "next/navigation";
import PaginationBar from "../ui/Pagination";

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "top-10",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "best-forests",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "hawaii-beaches",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    slug: "mountains-at-night",
  },
];

export function BlogCards() {
  const router = useRouter();
  const handleClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };
  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      component="a"
      onClick={() => handleClick(article.slug)}
      // href={handleClick}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image
          src={article.image}
          alt={article.image}
          width={500}
          height={500}
          className="rounded-3xl"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </AspectRatio>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container fluid py="xl" className="flex flex-col items-center gap-2">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>

      <PaginationBar />
    </Container>
  );
}
