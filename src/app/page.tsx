import { AppShell, AppShellMain, Button, Group, Title } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <AppShell>
      <AppShellMain className="flex flex-col items-center justify-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-[50px] h-[60px]"
          objectFit="cover"
        />
        {/* // Animated Light Bar that'll stretch on hover */}

        {/* Button  */}
        <Button variant="light" color="#fff" size="md" radius="xl" className="">
          Leading Marketing Agency
        </Button>
        <Title className="text-[300px] uppercase">
          Faarns
          <Group className="text-sm" justify="space-between">
            <span>Website</span>
            <span>Marketing</span>
            <span>Saas</span>
            <span>SEO</span>
          </Group>
        </Title>
      </AppShellMain>
    </AppShell>
  );
}
