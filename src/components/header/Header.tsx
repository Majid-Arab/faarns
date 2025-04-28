import { Button, Grid, GridCol } from "@mantine/core";
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
    <header className="fixed bottom-0 md:bottom-2 left-0 right-0 mx-auto py-1 px-0 md:px-2 text-white max-w-3xl rounded-b-xs rounded-lg md:rounded-lg border-2 border-b-0 border-purple-600 shadow-inner shadow-purple-300 z-30 bg-black">
      <Grid className="flex justify-around md:justify-between items-center w-full">
        <GridCol span="auto" className="flex justify-center">
          <Link
            href="#services"
            className="hover:text-purple-600 transition-colors flex items-center"
          >
            <IconBriefcase className="block md:hidden" size={20} />
            <span className="hidden md:block font-medium">Services</span>
          </Link>
        </GridCol>
        <GridCol span="auto" className="flex justify-center">
          <Link
            href="#case-studies"
            className="hover:text-purple-600 transition-colors flex items-center"
          >
            <IconChartBar className="block md:hidden" size={20} />
            <span className="hidden md:block font-medium">Case Studies</span>
          </Link>
        </GridCol>

        <GridCol span={4} className="flex justify-center items-center">
          {/* CTA Button */}
          <div className="relative bg-[linear-gradient(180deg,rgba(244,30,255,0.21)_0%,rgba(65,109,221,0.21)_100%)] rounded-xl md:rounded-md overflow-hidden px-2 py-1 md:px-0">
            <Image
              src="/assets/star.svg"
              alt="Star"
              width={24}
              height={24}
              className="absolute right-0 top-0 w-5 h-5 md:w-6 md:h-6"
            />
            <Button
              radius="md"
              variant="light"
              className="px-0 md:px-2 py-0 h-auto min-h-0 bg-transparent text-2xl"
            >
              <div className="flex items-center justify-center md:mr-1">
                <div className="relative w-2 h-2 flex items-center justify-center">
                  <Image
                    src="/assets/bulb.png"
                    alt="Bulb"
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="hidden md:block md:text-base text-white font-bold ">
                Got a concept?
              </span>
            </Button>
          </div>
        </GridCol>

        <GridCol span="auto" className="flex justify-center">
          <Link
            href="#projects"
            className="hover:text-purple-600 transition-colors flex items-center"
          >
            <IconFolderOpen className="block md:hidden" size={20} />
            <span className="hidden md:block font-medium">Projects</span>
          </Link>
        </GridCol>
        <GridCol span="auto" className="flex justify-center">
          <MorePopup />
        </GridCol>
      </Grid>
    </header>
  );
}
