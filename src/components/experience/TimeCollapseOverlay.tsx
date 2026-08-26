'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Hourglass } from 'lucide-react';

interface TimeCollapseOverlayProps {
  onComplete: () => void;
  years: number;
  days: number;
}

export const TimeCollapseOverlay: React.FC<TimeCollapseOverlayProps> = ({
  onComplete,
  years,
  days,
}) => {
  const [phase, setPhase] = useState<number>(0);
  const [tickerText, setTickerText] = useState('00:00:15');

  useEffect(() => {
    // Phase sequence timings:
    // Phase 0: 0s - 1.2s (Seconds ticking: 00:00:15 -> 00:15:00)
    // Phase 1: 1.2s - 2.4s (Hours expanding: 02h 30m -> 180 HOURS)
    // Phase 2: 2.4s - 3.6s (Days accumulating: 45 DAYS -> 450 DAYS)
    // Phase 3: 3.6s - 5.0s (Years collapsing: 1.2 YEARS -> Final total days)
    // Phase 4: Complete transition

    const t1 = setTimeout(() => {
      setPhase(1);
      setTickerText('02 HOURS 30 MINS');
    }, 1000);

    const t2 = setTimeout(() => {
      setPhase(2);
      setTickerText('182 HOURS');
    }, 2200);

    const t3 = setTimeout(() => {
      setPhase(3);
      setTickerText(`${days} DAYS`);
    }, 3400);

    const t4 = setTimeout(() => {
      setPhase(4);
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [days, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-6 text-center select-none"
    >
      <div className="space-y-8 max-w-xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: phase === 0 ? 8 : phase === 1 ? 4 : 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-2 border-accent-coral flex items-center justify-center mx-auto text-accent-coral shadow-[0_0_30px_rgba(255,77,77,0.4)]"
        >
          <Clock className="w-8 h-8" />
        </motion.div>

        <div className="space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-editorial-dim">
            TIME ACCELERATION SIMULATION
          </p>

          <AnimatePresence mode="wait">
            <motion.p
              key={tickerText}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white"
            >
              {tickerText}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="text-xs font-mono text-editorial-muted uppercase tracking-wider">
          {phase === 0 && 'Seconds accumulating across Reel video feeds...'}
          {phase === 1 && 'Daily screen time converting into hours...'}
          {phase === 2 && 'Hours consolidating into waking days...'}
          {phase === 3 && 'Summing your cumulative lifetime loss...'}
        </p>

        <button
          onClick={onComplete}
          className="text-[11px] font-mono text-editorial-dim hover:text-white underline underline-offset-4 cursor-pointer"
        >
          Skip Intro Sequence
        </button>
      </div>
    </motion.div>
  );
};
