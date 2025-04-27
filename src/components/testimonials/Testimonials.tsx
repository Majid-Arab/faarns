"use client";

import { Text, Title } from "@mantine/core";
import ItalicText from "../ui/ItalicText";
import Image from "next/image";
import { Carousel } from "@/components/testimonials/Carousel";

export function Testimonials() {
  return (
    <div className="h-screen w-[100%] flex items-center justify-center">
      <div className="relative flex flex-col gap-5">
        <Image
          src="/assets/footerGradient.svg"
          alt="Background Gradient"
          width={500}
          height={500}
          className="absolute -z-1 object-center"
        />
        <div>
          <Text
            mb={20}
            className="m-auto max-w-[250px] md:max-w-[280px] text text-xl md:text-[25px] text-center"
          >
            Don&apos;t take <ItalicText text="our" /> Word for it
          </Text>
          <Title className="capitalize text-3xl md:text-5xl text-center">
            See what our <ItalicText text="Clients" /> say!
          </Title>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
