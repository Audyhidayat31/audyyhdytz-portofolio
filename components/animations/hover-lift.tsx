'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverLiftProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function HoverLift({ children, delay = 0, className }: HoverLiftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
