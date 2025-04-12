import { Avatar, AvatarGroup, Group, Text, Title } from "@mantine/core";
import classes from "./Affiliate.module.css";
import ItalicText from "@/components/ItalicText";
import Image from "next/image";
import Form from "@/components/Form";

const avatars = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
];

export function Affiliate() {
  return (
    <div className={classes.wrapper}>
      <div className="w-[1400px] h-full mt-2 relative">
        <div>
          <Title className="max-w-2xl my-2 text-center md:text-start text-4xl md:text-7xl ">
            Becom an&nbsp;
            <ItalicText text="Affiliate" /> Partner
          </Title>
          <div className="flex flex-col gap-1">
            <Text className="max-w-[350px] md:max-w-[500px] text-[16px] md:text-[20px] text-center md:text-start">
              Join our network of successful partners and earn competitive
              commissions
            </Text>

            <Group className="flex justify-center md:justify-start">
              <AvatarGroup spacing="sm">
                <Avatar
                  src={avatars[0]}
                  radius="xl"
                  className="border-white rounded-full"
                  size="lg"
                />
                <Avatar
                  src={avatars[0]}
                  radius="xl"
                  className="border-white rounded-full"
                  size="lg"
                />
                <Avatar
                  src={avatars[0]}
                  radius="xl"
                  className="border-white rounded-full"
                  size="lg"
                />
                <Avatar
                  src={avatars[0]}
                  radius="xl"
                  className="border-white rounded-full"
                  size="lg"
                />
              </AvatarGroup>
            </Group>
            <div className="flex justify-center w-full">
              <Form />
            </div>
            <Image
              src="/assets/affiliate.png"
              alt="Affiliate"
              width={500}
              height={500}
              className="w-full"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
