'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { MousePointerClick, Sparkles, RefreshCcw } from 'lucide-react';

interface OneMoreReelCounterProps {
  estimatedReels: number;
}

export const OneMoreReelCounter: React.FC<OneMoreReelCounterProps> = ({ estimatedReels }) => {
  // Estimate ~1 in 15 reels was a "just one more reel" micro-promise
  const initialOneMoreCount = Math.round(estimatedReels / 15);
  const [clickCount, setClickCount] = useState(initialOneMoreCount);

  return (
    <div className="py-16 border-b border-editorial-border bg-surface-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-amber flex items-center justify-center gap-1.5">
            <MousePointerClick className="w-4 h-4" /> Micro-Decisions // Behavioral Loop
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How many times did you say &ldquo;Just One More Reel&rdquo;?
          </h3>
          <p className="text-sm text-editorial-muted max-w-lg mx-auto">
            Calculated micro-promises made before sleep, work, or study sessions.
          </p>
        </div>

        {/* Interactive Clicker Counter Card */}
        <div className="max-w-md mx-auto p-8 border border-editorial-border bg-background space-y-6">
          <p className="text-5xl sm:text-7xl font-black font-mono tracking-tight text-accent-amber">
            <Counter value={clickCount} />
          </p>

          <p className="text-xs font-mono uppercase text-editorial-dim">
            &ldquo;Okay, last one then I&apos;m sleeping...&rdquo;
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setClickCount((prev) => prev + 1)}
            className="w-full py-4 bg-accent-amber text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Click to Add &ldquo;One More Reel&rdquo; (+1)</span>
          </motion.button>
        </div>

      </div>
    </div>
  );
};
