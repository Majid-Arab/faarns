import Breadcrumb from "@/components/ui/Breadcrumb";
import { Box, Grid, GridCol, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import Blog from "@/components/blogs/Blog";
import { notFound } from "next/navigation";
import { blogData } from "../../../../type/data";
import { BlogSlug } from "../../../../type/type";

interface Props {
  params: { slug: string };
}

export default function BlogPage({ params }: Props) {
  if (!(params.slug in blogData)) {
    return notFound();
  }

  const slug = params.slug as BlogSlug;
  const blog = blogData[slug];

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
            description={blog.description}
          />
        </div>
      </div>
    </div>
  );
}
