import ImageGallery from "@/components/contactCards";
import ClientLogos from "@/components/movingLogos";
import { Box, Button, Group, Text } from "@mantine/core";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Group
        justify="space-between"
        align="flex-end"
        className="max-w-7xl m-auto"
        wrap="nowrap"
      >
        <Text className="max-w-[280px] text-[25px]">
          Generating leads is the first step;{" "}
          <span className="font-bold">true profit</span> comes from converting
          those leads into long-term <span className="font-bold">client</span>
        </Text>
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
        <Text className="max-w-[280px] text-[22px] text-center">
          Got <span className="font-bold">marketing</span> questions? Book a
          free call and see why we’re the
          <span className="font-bold"> right fit</span> for you.
        </Text>
      </Group>
      <ImageGallery />
      <ClientLogos />
    </Box>
  );
};

export default Contact;
