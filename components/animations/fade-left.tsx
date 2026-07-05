'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeLeft({ children, delay = 0, duration = 0.6, className }: FadeLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
