import { Box, Button, Group, Text } from "@mantine/core";
import React from "react";
import { ImageGallery } from "./ContactCards";
import { InfiniteMovingLogos } from "./MovingLogos";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <Box>
        <Group
          justify="space-between"
          className="md:max-w-7xl m-auto flex-col md:flex-row items-center md:items-end px-2"
          wrap="nowrap"
        >
          <div className="flex justify-start w-full">
            <Text className="max-w-[250px] md:max-w-[280px] text text-xl md:text-[25px]">
              Generating leads is the first step;{" "}
              <span className="font-bold font-playfair italic text-[24px]">
                true profit
              </span>{" "}
              comes from converting those leads into long-term{" "}
              <span className="font-bold font-playfair italic text-[24px]">
                client
              </span>
            </Text>
          </div>
          <div className="flex justify-center items-center w-full">
            <Button
              variant="white"
              color="black"
              size="xl"
              radius="md"
              style={{
                borderRadius: "12px",
                boxShadow: "0 0 12px 4px rgba(128, 0, 128, 0.3)",
              }}
            >
              Book a free call
            </Button>
          </div>
          <div className="flex justify-end w-full">
            <Text className="max-w-[250px] md:max-w-[280px] md:text-xl text-xl md:text-[22px] text-center">
              Got{" "}
              <span className="font-bold font-playfair italic text-[24px]">
                marketing
              </span>{" "}
              questions? Book a free call and see why we&apos;re the
              <span className="font-bold font-playfair italic text-[24px]">
                {" "}
                right fit
              </span>{" "}
              for you.
            </Text>
          </div>
        </Group>
      </Box>
      <ImageGallery />
      <ClientLogos />
    </div>
  );
};

export function ClientLogos() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingLogos direction="right" speed="slow" />
    </div>
  );
}

export default Contact;
