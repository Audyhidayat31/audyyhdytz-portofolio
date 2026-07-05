'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
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

      {/* Floating Elements */}
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10 dark:opacity-20"
        style={{
          background: 'linear-gradient(135deg, #ffd700, #0066ff)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-10 dark:opacity-20"
        style={{
          background: 'linear-gradient(135deg, #ff0000, #00aa00)',
          bottom: '20%',
          right: '5%',
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-5 dark:opacity-10"
        style={{
          background: 'linear-gradient(135deg, #0066ff, #ffd700)',
          bottom: '10%',
          left: '15%',
        }}
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
