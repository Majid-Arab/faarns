import { Badge } from "@mantine/core";
import React from "react";
import { BadgeProp } from "../../../type/type";

const Badges = ({ text }: BadgeProp) => {
  return (
    <Badge
      variant="outline"
      color="gray"
      size="xl"
      radius="lg"
      className="text-sm capitalize md:text-xl font-normal py-1.5 active:bg-white active:text-black"
    >
      {text}
    </Badge>
  );
};

export default Badges;
