"use client";

import {
  AspectRatio,
  Card,
  Container,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
} from "@mantine/core";
import classes from "./BlogCards.module.css";
import PaginationBar from "../ui/Pagination";
import { useEffect, useState } from "react";
import { BlogPost } from "../../../type/type";

export function BlogCards() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonfakery.com/blogs/random/6");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        console.log("data", data);
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleClick = async (slug: string) => {
    // router.push(`/blogs/random`);
    try {
      const response = await fetch("https://jsonfakery.com/blogs/random");
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      const data = await response.json();
      console.log("data", data);
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container fluid py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} height={300} radius="md" />
          ))}
        </SimpleGrid>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid py="xl">
        <Text c="red">{error}</Text>
      </Container>
    );
  }

  const cards = posts.map((article) => (
    <Card
      key={article.title}
      p="md"
      component="a"
      onClick={() => handleClick(article.slug)}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image
          src={article.featured_image}
          alt={article.title}
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
