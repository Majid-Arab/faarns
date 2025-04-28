"use client";

import {
  Popover,
  PopoverTarget,
  PopoverDropdown,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

const MorePopup = () => {
  const router = useRouter();
  return (
    <Popover width={320} shadow="md" withArrow offset={30} radius="lg">
      <PopoverTarget>
        <UnstyledButton className="hover:text-purple-600 transition-colors">
          <IconDotsCircleHorizontal className="block md:hidden" size={20} />
          <span className="hidden md:block font-medium">More</span>
        </UnstyledButton>
      </PopoverTarget>
      <PopoverDropdown className="bg-black border-purple-600 shadow-inner shadow-purple-300">
        <Group>
          <UnstyledButton
            variant="default"
            className="py-1 w-full hover:text-purple-600"
          >
            Contact us
          </UnstyledButton>
        </Group>
        <Group>
          <UnstyledButton
            variant="default"
            onClick={() => router.push("/blogs")}
            className="py-1 w-full hover:text-purple-600"
          >
            Our Blogs
          </UnstyledButton>
        </Group>
        <Group>
          <UnstyledButton
            variant="default"
            onClick={() => router.push("/blog")}
            className="py-1 w-full hover:text-purple-600"
          >
            Single Blog
          </UnstyledButton>
        </Group>
        <Group>
          <UnstyledButton
            variant="default"
            className="py-1 w-full hover:text-purple-600"
          >
            About Us
          </UnstyledButton>
        </Group>
      </PopoverDropdown>
    </Popover>
  );
};

export default MorePopup;
