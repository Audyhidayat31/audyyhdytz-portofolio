'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505] pointer-events-none">
      
      {/* Animated Gradient Mesh Layer */}
      <div className="absolute inset-0 w-full h-full opacity-80 md:opacity-100">
        
        {/* Neon Green (#22c55e) */}
        <motion.div
          className="absolute w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0) 70%)',
            top: '-20%',
            left: '-20%',
            willChange: 'transform',
          }}
          animate={{
            x: ['0%', '15%', '-5%', '0%'],
            y: ['0%', '10%', '20%', '0%'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Emerald (#10b981) */}
        <motion.div
          className="absolute w-[110vw] h-[110vw] max-w-[1100px] max-h-[1100px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0) 70%)',
            bottom: '-20%',
            right: '-20%',
            willChange: 'transform',
          }}
          animate={{
            x: ['0%', '-15%', '10%', '0%'],
            y: ['0%', '-10%', '-20%', '0%'],
            scale: [1, 1.05, 1.15, 1],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Yellow (#facc15) */}
        <motion.div
          className="absolute w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(250,204,21,0.10) 0%, rgba(250,204,21,0) 70%)',
            top: '20%',
            left: '20%',
            willChange: 'transform',
          }}
          animate={{
            x: ['0%', '25%', '-15%', '0%'],
            y: ['0%', '-15%', '25%', '0%'],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Amber (#f59e0b) */}
        <motion.div
          className="absolute w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0) 70%)',
            bottom: '10%',
            left: '-10%',
            willChange: 'transform',
          }}
          animate={{
            x: ['0%', '20%', '-15%', '0%'],
            y: ['0%', '20%', '-15%', '0%'],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Cyan (#06b6d4) - Accent */}
        <motion.div
          className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0) 70%)',
            top: '10%',
            right: '10%',
            willChange: 'transform',
          }}
          animate={{
            x: ['0%', '-25%', '15%', '0%'],
            y: ['0%', '20%', '-20%', '0%'],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
