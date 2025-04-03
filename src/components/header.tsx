import { Button } from '@mantine/core';
import { IconBulbFilled } from '@tabler/icons-react';
import React from 'react';

export function Header() {
  return (
    <header className="flex items-center justify-around w-full space-x-3 fixed bottom-2 left-0 right-0 mx-auto max-w-3xl py-1 px-3 text-white whitespace-nowrap rounded-lg border-2 border-purple-600 shadow-inner shadow-purple-300 z-30 bg-black">
      <a href="#services" className="hover:text-purple-600 font-medium transition-colors">
        Services
      </a>
      <a href="#case-studies" className="hover:text-purple-600 font-medium transition-colors">
        Case Studies
      </a>
      <Button
        leftSection={<IconBulbFilled size={30} />}
        radius="md"
        size='xl'
        variant='light'
        className="text-xl text-white text-center flex justify-center items-center gap-2 transition-colors bg-[linear-gradient(180deg,rgba(244,30,255,0.21)_0%,rgba(65,109,221,0.21)_100%)]"
      >
        Have a concept?
      </Button>

      {/* Star light on top right corner */}
      <a href="#projects" className="hover:text-purple-600 font-medium transition-colors">
        Projects
      </a>
      <a href="#more" className="hover:text-purple-600 font-medium transition-colors">
        More
      </a>

      {/* Center button with bulb icon and star light */}
      {/* <div className="relative">
      </div> */}

      {/* Right navigation links */}
      {/* <div className="flex items-center space-x-3">
      </div> */}
    </header>
  );
}