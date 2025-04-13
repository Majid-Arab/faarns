import Breadcrumb from "@/components/Breadcrumb";
import { Box, Group, Text, Title } from "@mantine/core";
import Image from "next/image";

import React from "react";
import Blog from "@/components/Blog";

const Hero = () => {
  return (
    <div className="bg-white">
      <Box className="flex flex-col items-center justify-start h-screen bg-[url(/assets/blog-blur-bg.png)] bg-cover bg-center bg-no-repeat inset-shadow-sm inset-shadow-white ">
        <Box className="flex flex-col items-center justify-start gap-1 md:gap-3 w-full mt-2">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-[50px] h-[60px]"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          {/* Breadcrumbs  */}
          <Breadcrumb
            items={[
              { title: "Home", href: "/" },
              { title: "Blogs", href: "/blogs" },
              { title: "Details", href: "/blog" },
            ]}
          />
          <div className="text-center ">
            <Title className="max-w-[300px] md:max-w-[800px] text-center text-2xl md:text-6xl ">
              Human vs AI ;<br /> When will AI start copying emotions ?
            </Title>
          </div>
          <Group
            justify="space-around"
            align="center"
            className="gap-2 mt-3 md:mt-0 md:gap-14"
          >
            <Box className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Author
              </Text>
              <Title className="text-xl md:text-4xl font-normal md:font-semibold">
                Author Name
              </Title>
            </Box>
            <Box className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Publish Date
              </Text>
              <Title className="text-xl md:text-4xl font-normal md:font-semibold">
                Mar 20,2025
              </Title>
            </Box>
            <Box className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Category
              </Text>
              <Title className="text-xl md:text-4xl font-normal md:font-semibold">
                AI / Humanoid
              </Title>
            </Box>
          </Group>
        </Box>
      </Box>
      <div className="flex justify-center">
        <div className="w-[1200px] mt-2 relative">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Hero;
