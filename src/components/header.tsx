import { Button } from '@mantine/core';
import { IconBulb } from '@tabler/icons-react';
import React from 'react';

export function Header() {
  return (
    <header className="fixed bottom-4 left-0 right-0 mx-auto max-w-5xl bg-white rounded-lg flex items-center justify-between border-2 border-purple-600 shadow-inner shadow-purple-300">
      {/* Left navigation links */}
      <div className="flex items-center space-x-3">
        <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
          Services
        </a>
        <a href="#case-studies" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
          Case Studies
        </a>
      </div>

      {/* Center button with bulb icon and star light */}
      <div className="relative">
        <Button leftSection={<IconBulb size={18} />} radius="md" className="bg-purple-600 hover:bg-purple-700 px-2 flex items-center gap-2 transition-colors">
          Have a concept?
        </Button>
        {/* Star light on top right corner */}
      </div>

      {/* Right navigation links */}
      <div className="flex items-center space-x-3">
        <a href="#projects" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
          Projects
        </a>
        <a href="#more" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
          More
        </a>
      </div>
    </header>
  );
}