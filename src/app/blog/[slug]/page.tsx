import Breadcrumb from "@/components/Breadcrumb";
import { Box, Grid, GridCol, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import Blog from "@/components/Blog";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: keyof typeof blogData;
  };
};

const blogData = {
  "top-10": {
    readTime: "22",
    title: "Top 10 places to visit in Norway this summer",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Artifical Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
  "best-forests": {
    readTime: "22",
    title: "Best forests to visit in North America",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Sofware Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
  "hawaii-beaches": {
    readTime: "22",
    title: "Hawaii beaches review: better than you think",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Information Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
  "mountains-at-night": {
    readTime: "22",
    title: "Mountains at night: 12 best locations to enjoy the view",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/assets/blog.png",
    author: "Jhon Doe",
    date: "20/Sep/2024",
    category: "Artifical Intelligence",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore quod ipsum! Repudiandae, dignissimos et! Ipsum, tempore natus. Necessitatibus nobis id quae nesciunt, cumque quidem nam suscipit voluptate nihil perspiciatis totam quod?",
  },
} as const;

const BlogPage = ({ params }: Props) => {
  const blog = blogData[params.slug];

  if (!blog) return notFound();

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
              { title: "Details", href: `${blog.title}` },
            ]}
          />
          <div className="text-center ">
            <Title className="max-w-[300px] md:max-w-[800px] text-center text-2xl md:text-6xl ">
              {blog.title}
            </Title>
          </div>
          <Grid
            justify="space-around"
            align="center"
            className="gap-2 mt-3 md:mt-0 lg:gap-14"
            gutter={{ base: 20, md: 200, lg: 280 }}
          >
            <GridCol span={{ base: 6, md: 4 }} className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Author
              </Text>
              <Title className="text-xl md:text-[30px] font-normal md:font-semibold">
                {blog.author}
              </Title>
            </GridCol>
            <GridCol span={{ base: 6, md: 4 }} className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Publish Date
              </Text>
              <Title className="text-xl md:text-[30px] font-normal md:font-semibold">
                {blog.date}
              </Title>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }} className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Category
              </Text>
              <Title className="text-xl md:text-[30px] font-normal md:font-semibold">
                {blog.category}
              </Title>
            </GridCol>
          </Grid>
        </Box>
      </Box>
      <div className="flex justify-center">
        <div className="w-[1200px] mt-2 relative">
          <Blog
            readTime={blog.readTime}
            image={blog.image}
            intro={blog.intro}
            content={blog.description}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
