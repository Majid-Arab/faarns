import {
  Box,
  Container,
  Grid,
  GridCol,
  Group,
  Progress,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { BlogsProp } from "../../../type/type";

const Blog = ({ readTime, image, intro, content }: BlogsProp) => {
  return (
    <Container fluid className="text-black mb-4">
      <Box className="w-full h-full md:h-full -mt-26 md:-mt-18">
        <Image
          src={image}
          alt="Blog"
          width={500}
          height={500}
          className="h-[600px] md:h-auto w-full object-cover rounded-lg"
        />
      </Box>
      <Grid justify="between" mt={40} gutter={{ base: 30, xs: "md", md: "xl" }}>
        <GridCol span="auto" className="flex flex-col gap-[8px]">
          <Text className="font-bold text-lg md:text-2xl">
            {readTime} Minutes read
          </Text>
          <Progress color="gray" value={1} bg="#E9ECEF" />
          <Text className="font-semibold text-lg md:text-2xl text-purple-500">
            Introduction
          </Text>
          <Text className="font-semibold text-lg md:text-2xl">{intro}</Text>
        </GridCol>
        <GridCol
          span={{ base: 12, md: 6 }}
          className="text-lg/2 md:text-2xl/3 tracking-wider mx-0 md:mx-3"
        >
          {content}
        </GridCol>
        <GridCol span="auto">
          <Text className="font-semibold text-2xl text-center">Share</Text>
          <Group justify="center" gap={40} mt={5}>
            <Image
              src="/assets/facebook.svg"
              alt="Facebook"
              className="w-[30px] h-[30px] md:w-[40px] w- md:h-[40px]"
              width={500}
              height={500}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Image
              src="/assets/instagram.svg"
              alt="Facebook"
              className="w-[30px] h-[30px] md:w-[40px] w- md:h-[40px]"
              width={500}
              height={500}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <Image
              src="/assets/linkedin.svg"
              alt="Facebook"
              className="w-[30px] h-[30px] md:w-[40px] w- md:h-[40px]"
              width={500}
              height={500}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Group>
        </GridCol>
      </Grid>
    </Container>
  );
};

export default Blog;
