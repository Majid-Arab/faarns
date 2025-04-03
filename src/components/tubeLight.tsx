import { useState } from 'react';

export default function NeonLine() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900 p-4">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Neon line container */}
        <div 
          className={`relative transition-all duration-500 ease-in-out ${
            isHovered ? 'w-96' : 'w-64'
          } h-3`}
        >
          {/* Main neon line - brighter */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-cyan-300 rounded-full shadow-xl shadow-cyan-400/70">
          </div>
          
          {/* Enhanced bottom center glow effect */}
          <div className="absolute -top-1 -bottom-8 left-0 right-0 bg-gradient-to-t from-cyan-300 via-cyan-400/50 to-transparent blur-md rounded-b-full"></div>
          
          {/* Bottom left corner glow */}
          <div className="absolute top-1 left-0 w-8 h-8 bg-cyan-300 rounded-full blur-md opacity-80"></div>
          
          {/* Bottom right corner glow */}
          <div className="absolute top-1 right-0 w-8 h-8 bg-cyan-300 rounded-full blur-md opacity-80"></div>
          
          {/* Extra bright bottom left spot */}
          <div className="absolute top-2 left-0 w-4 h-4 bg-cyan-300 rounded-full blur-sm opacity-90"></div>
          
          {/* Extra bright bottom right spot */}
          <div className="absolute top-2 right-0 w-4 h-4 bg-cyan-300 rounded-full blur-sm opacity-90"></div>
        </div>
      </div>
    </div>
  );
}