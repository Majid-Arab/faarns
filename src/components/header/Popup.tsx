import {
  Popover,
  PopoverTarget,
  PopoverDropdown,
  Avatar,
  Group,
  Stack,
  Anchor,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import React from "react";

const MorePopup = () => {
  return (
    <Popover width={320} shadow="md" withArrow offset={30} radius="lg">
      <PopoverTarget>
        <UnstyledButton className="hover:text-purple-600 transition-colorsr">
          <IconDotsCircleHorizontal className="block md:hidden" size={20} />
          <span className="hidden md:block font-medium">More</span>
        </UnstyledButton>
      </PopoverTarget>
      <PopoverDropdown className="bg-black">
        <Group>Blogs</Group>
        <Group>Blogs</Group>
        <Group>Blogs</Group>
        <Group>Blogs</Group>
      </PopoverDropdown>
    </Popover>
  );
};

export default MorePopup;
