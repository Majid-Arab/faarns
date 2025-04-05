"use client";

import { useState } from "react";
import { Container, Card, Image } from "@mantine/core";

export default function ImageGallery() {
  const [images] = useState([
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
  ]);

  return (
    <Container className="flex flex-wrap lg:flex-nowrap w-full justify-center items-center gap-5 py-5">
      {images.map((src, index) => (
        <div
          key={index}
          className="transform transition-all duration-300 hover:scale-105"
        >
          <Card
            styles={() => ({
              root: {
                borderRadius: "12px",
                boxShadow: "0 0 12px 4px rgba(128, 0, 128, 0.3)",
              },
            })}
          >
            <Card.Section className="w-14 h-20">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </Card.Section>
          </Card>
        </div>
      ))}
    </Container>
  );
}
