import { Button } from "@mantine/core";
import React from "react";

const BacktoTop = () => {
  return (
    <Button
      variant="outline"
      color="white"
      radius="xl"
      className="text-white fixed bottom-3 right-3"
    >
      Back to top
    </Button>
  );
};

export default BacktoTop;
