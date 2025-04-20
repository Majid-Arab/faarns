import { Button } from "@mantine/core";
import {
  IconBriefcase,
  IconChartBar,
  IconFolderOpen,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import MorePopup from "./Popup";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed bottom-0 md:bottom-2 left-0 right-0 mx-auto py-1 px-0 md:px-2 text-white max-w-3xl rounded-lg border-2 border-b-0 border-purple-600 shadow-inner shadow-purple-300 z-30 bg-black">
      <ul className="flex justify-around md:justify-between items-center w-full">
        <li>
          {/* Services Link */}
          <Link
            href="#services"
            className="hover:text-purple-600 transition-colors"
          >
            <IconBriefcase className="block md:hidden" size={20} />
            <span className="hidden md:block font-medium">Services</span>
          </Link>
        </li>
        <li>
          {/* Case Studies Link */}
          <Link
            href="#case-studies"
            className="hover:text-purple-600 transition-colors"
          >
            <IconChartBar className="block md:hidden" size={20} />
            <span className="hidden md:block font-medium">Case Studies</span>
          </Link>
        </li>
        <li>
          {/* CTA Button */}
          <Button
            leftSection={
              <Image
                src="/assets/bulb.png"
                alt="Star"
                width={500}
                height={500}
                className="md:block w-[20px] h-[25px]"
              />
            }
            radius="md"
            size="xl"
            variant="light"
            className="text-white transition-colors bg-[linear-gradient(180deg,rgba(244,30,255,0.21)_0%,rgba(65,109,221,0.21)_100%)]
                  text-xs sm:text-sm md:text-base lg:text-xl
                  rounded-full md:rounded-md px-0 py-0 md:px-2 relative"
          >
            <Image
              src="/assets/star.svg"
              alt="Star"
              width={500}
              height={500}
              className="w-6 h-6 absolute right-0 top-0"
            />
            <Image
              src="/assets/bulb.png"
              alt="Star"
              width={500}
              height={500}
              className="hidden md:hidden text-xl"
            />
            <span className="hidden md:block">Got a concept ?</span>
          </Button>
        </li>
        <li>
          {/* Projects Link */}
          <Link
            href="#projects"
            className="hover:text-purple-600 transition-colorsr"
          >
            <IconFolderOpen className="block md:hidden" size={20} />
            <span className="hidden md:block font-medium">Projects</span>
          </Link>
        </li>
        <li>
          {/* More Link */}
          <MorePopup />
        </li>
      </ul>
    </header>
  );
}
