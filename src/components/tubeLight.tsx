"use client"

import { useState } from 'react';

export default function NeonLine() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Neon line container */}
        <div
          className={`relative transition-all duration-500 ease-in-out ${isHovered ? 'w-40' : 'w-20'
            }`}
        >
          {/* Main neon line - brighter */}
          <div className="absolute top-0 left-0 right-0  bg-purple-300  shadow-xl shadow-cyan-400/70">
          </div>

          {/* Enhanced bottom center glow effect */}
          <div className="absolute -top-1 -bottom-8 left-0 right-0 bg-gradient-to-t via-purple-400/50 to-transparent blur-md "></div>

        </div>
      </div>
    </div>
  );
}