'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimeRiverProps {
  startYear: number;
  totalDaysLost: number;
}

export const TimeRiver: React.FC<TimeRiverProps> = ({ startYear, totalDaysLost }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  const yearCount = Math.max(1, currentYear - startYear + 1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="py-16 border-b border-editorial-border bg-surface-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
            Visual Experience // The Flow of Lost Attention
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Continuous Time River
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            A visual ribbon mapping your screen time flow from <span className="text-white font-mono font-bold">{startYear}</span> to <span className="text-accent-coral font-mono font-bold">{currentYear}</span>.
          </p>
        </div>

        {/* Animated Flowing Ribbon S-Curve */}
        <div className="relative py-8 flex items-center justify-center">
          <svg className="w-full h-40 sm:h-48 overflow-visible" viewBox="0 0 1000 160" fill="none">
            <path
              d="M 20 80 Q 250 10, 500 80 T 980 80"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <motion.path
              d="M 20 80 Q 250 10, 500 80 T 980 80"
              stroke="#ff4d4d"
              strokeWidth="12"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Year Milestone Nodes along the River */}
          <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-12 pointer-events-none">
            {Array.from({ length: Math.min(6, yearCount) }).map((_, idx) => {
              const yearVal = startYear + Math.round((idx / (Math.min(6, yearCount) - 1 || 1)) * (yearCount - 1));
              return (
                <div key={idx} className="flex flex-col items-center gap-1 bg-background/90 border border-editorial-border px-3 py-1.5 rounded-sm">
                  <span className="text-xs font-mono font-bold text-accent-coral">{yearVal}</span>
                  <span className="text-[9px] font-mono text-editorial-dim">
                    {Math.round((totalDaysLost / yearCount) * (idx + 1))}d lost
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center text-xs font-mono text-editorial-dim">
          Scroll down to watch your time river flow into the present year.
        </div>

      </div>
    </div>
  );
};
