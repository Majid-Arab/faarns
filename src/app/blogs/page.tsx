import Breadcrumb from "@/components/Breadcrumb";
import ItalicText from "@/components/ItalicText";
import { Box, Group, Pagination, Text, TextInput, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import classes from "./blog.module.css";
import React from "react";
import Badges from "@/components/Badges";
import { BlogCards } from "@/components/BlogCards";

const Hero = () => {
  return (
    <>
      <Box className="relative flex flex-col items-center justify-start h-20 md:h-36 bg-[url(/assets/blog-bg.png)] bg-cover md:bg-contain bg-center bg-no-repeat inset-shadow-sm inset-shadow-white ">
        <Box className="flex flex-col items-center justify-start gap-1 md:gap-4 w-full mt-2 z-2">
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
            ]}
          />
          <div className="text-center ">
            <Title className="text-center md:text-start text-3xl md:text-6xl ">
              The FAARNS&nbsp;
              <ItalicText text="Insight" />:
            </Title>
            <Text className="text-md md:text-4xl">
              Innovation in the Web & Marketing
            </Text>
          </div>

          <TextInput
            placeholder="Search any Blog"
            classNames={{ input: classes.input, wrapper: classes.wrapper }}
            rightSectionWidth={40}
            rightSection={
              <IconSearch size={22} className={classes.searchIcon} />
            }
            radius="xl"
          />
        </Box>
        <Box className="md:flex w-full hidden md:absolute h-full items-center justify-between z-1">
          <Image
            src="/assets/blog-grids.png"
            alt="blogGrids"
            width={500}
            height={500}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Image
            src="/assets/blog-grids2.png"
            alt="blogGrids2"
            width={500}
            height={500}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
      <div className="flex justify-center">
        <div className="w-[1400px] mx-auto my-2 relative">
          <Group gap={20} justify="center">
            <Badges text="Latest Blogs" />
            <Badges text="Latest Blogs" />
            <Badges text="Latest Blogs" />
            <Badges text="Latest Blogs" />
            <Badges text="Latest Blogs" />
            <Badges text="Latest Blogs" />
          </Group>
          <BlogCards />
        </div>
      </div>
    </>
  );
};

export default Hero;
