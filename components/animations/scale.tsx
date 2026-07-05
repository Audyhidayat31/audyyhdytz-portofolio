'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function Scale({ children, delay = 0, duration = 0.6 }: ScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
