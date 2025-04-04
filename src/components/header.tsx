import { Button } from '@mantine/core';
import { IconBriefcase, IconBulbFilled, IconChartBar, IconDotsCircleHorizontal, IconFolderOpen } from '@tabler/icons-react';
import React from 'react';

export function Header() {
  return (
    <header className="flex items-center justify-around w-full fixed bottom-0 md:bottom-2 left-0 right-0 mx-auto py-1 px-0 md:px-2 text-white max-w-3xl rounded-lg border-2 border-purple-600 shadow-inner shadow-purple-300 z-30 bg-black">
      {/* Services Link */}
      <a href="#services" className="hover:text-purple-600 transition-colors">
        <IconBriefcase className="block md:hidden" size={20} />
        <span className="hidden md:block font-medium">Services</span>
      </a>

      {/* Case Studies Link */}
      <a href="#case-studies" className="hover:text-purple-600 transition-colors">
        <IconChartBar className="block md:hidden" size={20} />
        <span className="hidden md:block font-medium">Case Studies</span>
      </a>

      {/* CTA Button */}
      <Button
        leftSection={<IconBulbFilled size={20} className="md:block" />}
        radius="md"
        size="xl"
        variant="light"
        className="text-white transition-colors bg-[linear-gradient(180deg,rgba(244,30,255,0.21)_0%,rgba(65,109,221,0.21)_100%)]
                  text-xs sm:text-sm md:text-base lg:text-xl
                  rounded-full md:rounded-md px-0 py-0 md:px-2"
      >
        <IconBulbFilled className="hidden md:hidden text-xl" />
        <span className="hidden md:block">Have a concept?</span>
      </Button>

      {/* Projects Link */}
      <a href="#projects" className="hover:text-purple-600 transition-colorsr">
        <IconFolderOpen className="block md:hidden" size={20} />
        <span className="hidden md:block font-medium">Projects</span>
      </a>

      {/* More Link */}
      <a href="#more" className="hover:text-purple-600 transition-colorsr">
        <IconDotsCircleHorizontal className="block md:hidden" size={20} />
        <span className="hidden md:block font-medium">More</span>
      </a>
    </header>
  );
}