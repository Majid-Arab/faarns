"use client";

import { useState } from "react";
import { Container, Card, Image } from "@mantine/core";

export default function ImageGallery() {
  // Sample image sources - replace with your actual images
  const [images] = useState([
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
  ]);

  return (
    <Container className="flex justify-center items-center w-full gap-5 py-5">
      {/* <Box
        className="flex justify-around w-full"
        // breakpoints={[
        //   { maxWidth: "md", cols: 3 },
        //   { maxWidth: "sm", cols: 2 },
        //   { maxWidth: "xs", cols: 1 },
        // ]}
      > */}
      {images.map((src, index) => (
        <div
          key={index}
          className="transform transition-all duration-300 hover:scale-105"
        >
          <Card
            className=""
            styles={() => ({
              root: {
                borderRadius: "12px",
                boxShadow: "0 0 12px 4px rgba(128, 0, 128, 0.3)",
                margin: "8px",
              },
            })}
          >
            <Card.Section className="w-14 h-20">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-full"
              />
            </Card.Section>
          </Card>
        </div>
      ))}
      {/* </Box> */}
    </Container>
  );
}
