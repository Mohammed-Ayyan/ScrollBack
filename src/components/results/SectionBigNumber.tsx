'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { formatTimeSpan } from '@/lib/calculations';
import { Clock, Calendar } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';

interface SectionBigNumberProps {
  totalHoursLost: number;
  wakingDaysLost: number;
  full24hDaysLost: number;
}

export const SectionBigNumber: React.FC<SectionBigNumberProps> = ({
  totalHoursLost,
  wakingDaysLost,
  full24hDaysLost,
}) => {
  const { years, months, days, hours } = formatTimeSpan(totalHoursLost);
  const totalDaysFormatted = Math.round(full24hDaysLost);
  const yearsDecimal = (totalHoursLost / (365.25 * 24)).toFixed(1);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-16 sm:py-24 border-b border-editorial-border bg-surface-50 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 text-center space-y-8"
      >
        
        {/* Step 1: Tag */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-surface-200 border border-editorial-border text-xs font-mono text-accent-coral uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5" />
          <span>Section 01 // Cumulative Lifetime Loss</span>
        </motion.div>

        {/* Step 2: Cinematic Text Sequence */}
        <div className="space-y-4">
          <motion.p variants={itemVariants} className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-editorial-muted">
            You&apos;ve spent
          </motion.p>

          <motion.h2 variants={itemVariants} className="text-6xl sm:text-8xl lg:text-9xl font-black font-mono tracking-tighter text-white leading-none">
            <Counter value={totalDaysFormatted} duration={2200} /> <span className="text-accent-coral">DAYS</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-2xl sm:text-4xl font-extrabold tracking-tight text-editorial-cream pt-2">
            scrolling.
          </motion.p>

          <motion.p variants={itemVariants} className="text-base sm:text-xl text-editorial-muted max-w-xl mx-auto pt-2">
            That&apos;s approximately <span className="text-accent-coral font-bold font-mono">{yearsDecimal} years</span> of your life.
          </motion.p>
        </div>

        {/* Step 3: Waking Days & 24h Split Module */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8 border-t border-editorial-border text-left">
          <div className="p-6 border border-editorial-border bg-background space-y-1">
            <p className="text-xs font-mono text-editorial-dim uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-editorial-muted" />
              Full 24-Hour Days Lost
            </p>
            <p className="text-3xl font-mono font-bold text-white">
              <Counter value={full24hDaysLost} decimals={1} duration={2000} /> <span className="text-xs text-editorial-dim">days</span>
            </p>
          </div>

          <div className="p-6 border border-editorial-border bg-background space-y-1">
            <p className="text-xs font-mono text-editorial-dim uppercase flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent-amber" />
              Active Waking Days Lost (16h/day)
            </p>
            <p className="text-3xl font-mono font-bold text-accent-amber">
              <Counter value={wakingDaysLost} decimals={1} duration={2000} /> <span className="text-xs text-editorial-dim">active days</span>
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
