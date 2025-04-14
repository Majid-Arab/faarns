import { Button, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const OurWork = () => {
  return (
    <div className="h-80 py-8 bg-white rounded-2xl flex justify-center relative">
      {/* Images  */}
      <div className="flex flex-col gap-20 md:gap-2 md:absolute right-20">
        <Image
          src="/assets/image.png"
          alt="Dots"
          height={500}
          width={500}
          className="max-w-[500px] h-20 rounded-md hidden md:block   "
          style={{
            maxWidth: "100%",
          }}
        />
        <Image
          src="/assets/image.png"
          alt="Dots"
          height={500}
          width={500}
          className="max-w-[500px] h-20 rounded-md hidden md:block   "
          style={{
            maxWidth: "100%",
          }}
        />
        <Image
          src="/assets/image.png"
          alt="Dots"
          height={500}
          width={500}
          className="max-w-[500px] h-20 rounded-md hidden md:block   "
          style={{
            maxWidth: "100%",
          }}
        />
      </div>
      {/* Centered Content  */}
      <div className="bg-white rounded-2xl flex flex-col justify-center items-center gap-2">
        <Image
          src="/assets/dots.png"
          alt="Dots"
          height={500}
          width={500}
          className="w-3"
          style={{
            maxWidth: "100%",
          }}
        />
        <Title className="text-black text-3xl md:text-5xl text-center">
          Some of our works
        </Title>
        <Text
          size="sm"
          className="text-black max-w-[350px] md:max-w-[500px] text-center text-[16px] md:text-[20px]"
        >
          Each project in our collection reflects the passion and creativity we
          bring to every digital endeavor. Fro sleek web design to dynamic
          branding solutions,our portfolio highlights the diversity of our
          expertise
        </Text>
        <Button
          variant="outline"
          color="black"
          className="rounded-md"
          size="xl"
          rightSection={<IconArrowRight size={25} />}
        >
          Explore our works
        </Button>
      </div>
      {/* Images  */}
      <div className="flex flex-col gap-20 md:gap-2 absolute left-20">
        <Image
          src="/assets/image.png"
          alt="Dots"
          height={500}
          width={500}
          className="max-w-[500px] h-20 rounded-md hidden md:block   "
          style={{
            maxWidth: "100%",
          }}
        />
        <Image
          src="/assets/image.png"
          alt="Dots"
          height={500}
          width={500}
          className="max-w-[500px] h-20 rounded-md hidden md:block   "
          style={{
            maxWidth: "100%",
          }}
        />
        <Image
          src="/assets/image.png"
          alt="Dots"
          height={500}
          width={500}
          className="max-w-[500px] h-20 rounded-md hidden md:block   "
          style={{
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default OurWork;
