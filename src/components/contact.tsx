import { Box, Button, Group, Text } from "@mantine/core";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Group justify="space-between">
        <Text>
          Generating leads is the first step; true profit comes from converting
          those leads into long-term customers
        </Text>
        <Button>Book a free call</Button>
        <Text>
          Got marketing questions? Book a free call and see why we’re the right
          fit for you.
        </Text>
      </Group>
    </Box>
  );
};

export default Contact;
