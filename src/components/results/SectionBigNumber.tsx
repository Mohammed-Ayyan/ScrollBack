'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { formatTimeSpan } from '@/lib/calculations';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

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

  return (
    <section id="your-time" className="py-20 sm:py-32 border-b border-editorial-border bg-gradient-to-b from-background via-surface-50 to-background overflow-hidden relative select-none">
      
      {/* Background Time Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl pointer-events-none animate-time-pulse" />

      <div className="max-w-5xl mx-auto px-4 text-center space-y-10 relative z-10">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-surface-200 border border-editorial-border text-xs font-mono text-accent-coral uppercase tracking-wider"
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Section 01 // The Time Reveal</span>
        </motion.div>

        {/* Dramatic Cinematic Sequence */}
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl font-extrabold uppercase tracking-widest text-editorial-muted font-mono"
          >
            You gave
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="py-4"
          >
            <h2 className="text-7xl sm:text-9xl lg:text-[11rem] font-black font-mono tracking-tighter text-white leading-none drop-shadow-[0_0_35px_rgba(255,77,77,0.3)]">
              <Counter value={totalDaysFormatted} duration={2500} /> <span className="text-accent-coral">DAYS</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-mono"
          >
            to scrolling.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-lg sm:text-2xl text-editorial-muted max-w-2xl mx-auto font-mono pt-4"
          >
            That&apos;s <strong className="text-accent-coral">{yearsDecimal} solid years</strong> of your existence surrendered in 15-second fragments.
          </motion.p>
        </div>

        {/* Breakdown Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8 border-t border-editorial-border text-left"
        >
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

      </div>
    </section>
  );
};
