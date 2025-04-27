import Breadcrumb from "@/components/ui/Breadcrumb";
import { Box, Grid, GridCol, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import Blog from "@/components/blogs/Blog";

export default async function BlogPage() {
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
              The World of AI
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
                Charlie
              </Title>
            </GridCol>
            <GridCol span={{ base: 6, md: 4 }} className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Publish Date
              </Text>
              <Title className="text-xl md:text-[30px] font-normal md:font-semibold">
                21 / May / 2025
              </Title>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }} className="text-center">
              <Text className="text-md md:text-[18px] mb-[5px] md:mb-2">
                Category
              </Text>
              <Title className="text-xl md:text-[30px] font-normal md:font-semibold">
                AI
              </Title>
            </GridCol>
          </Grid>
        </Box>
      </Box>
      <div className="flex justify-center">
        <div className="w-[1200px] mt-2 relative">
          <Blog
            readTime="22"
            image="/assets/blog.png"
            intro="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt cumque provident sint autem et magni."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, corporis tenetur. Repellat iste tempore eum iusto possimus natus ipsa optio."
          />
        </div>
      </div>
    </div>
  );
}
