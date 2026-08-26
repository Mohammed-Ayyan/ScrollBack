'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Navigation, Smartphone } from 'lucide-react';

interface ThumbJourneyProps {
  thumbDistanceKm: number;
  estimatedReels: number;
}

export const ThumbJourney: React.FC<ThumbJourneyProps> = ({
  thumbDistanceKm,
  estimatedReels,
}) => {
  const totalSwipes = estimatedReels;
  const everestEquivalent = (thumbDistanceKm / 8.848).toFixed(1);

  return (
    <div className="py-16 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan flex items-center justify-center gap-1.5">
            <Navigation className="w-4 h-4" /> Visual Experience // Physical Mechanics
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Thumb Traveled Approximately
          </h3>
          <p className="text-5xl sm:text-7xl font-black font-mono tracking-tight text-accent-cyan">
            <Counter value={thumbDistanceKm} decimals={1} /> KM
          </p>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            That&apos;s <span className="text-white font-mono font-bold">{totalSwipes.toLocaleString()} physical vertical swipes</span> across your smartphone screen.
          </p>
        </div>

        {/* Animated Phone Screen with Swiping Thumb Mock */}
        <div className="max-w-xs mx-auto p-6 border-2 border-editorial-border bg-surface-50 rounded-2xl shadow-2xl relative space-y-6">
          <div className="w-16 h-2 bg-surface-200 rounded-full mx-auto" />
          
          <div className="h-64 border border-editorial-border bg-background rounded-lg relative overflow-hidden flex flex-col items-center justify-center">
            {/* Animated Swiping Finger Cue */}
            <motion.div
              animate={{
                y: [40, -40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center text-accent-cyan font-mono text-xs font-bold"
            >
              <div className="w-8 h-12 border-2 border-accent-cyan rounded-full bg-accent-cyan/20 flex items-center justify-center">
                👆
              </div>
              <span className="mt-2 text-[10px]">SWIPING UP</span>
            </motion.div>
          </div>

          <div className="p-3 border border-editorial-border bg-background text-xs font-mono text-editorial-muted">
            Height equivalent: <span className="text-accent-cyan font-bold">{everestEquivalent}x Mount Everests</span>
          </div>
        </div>

      </div>
    </div>
  );
};
