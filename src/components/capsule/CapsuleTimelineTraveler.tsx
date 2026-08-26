'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Clock, Sparkles, ShieldCheck, ArrowRight, Hourglass } from 'lucide-react';

interface CapsuleTimelineTravelerProps {
  goalLabel: string;
  promiseText: string;
  reclaimedMinutes: number;
}

export const CapsuleTimelineTraveler: React.FC<CapsuleTimelineTravelerProps> = ({
  goalLabel,
  promiseText,
  reclaimedMinutes,
}) => {
  const currentYear = new Date().getFullYear();
  const futureYears = [
    { year: currentYear, label: 'Present Day', hours: 0, milestone: 'Time Capsule Sealed & Intention Set' },
    { year: currentYear + 1, label: 'Year 1', hours: Math.round((reclaimedMinutes * 365.25) / 60), milestone: `Consistent daily focus built toward ${goalLabel}` },
    { year: currentYear + 2, label: 'Year 2', hours: Math.round((reclaimedMinutes * 365.25 * 2) / 60), milestone: 'Deep habit formed; noticeable mastery & real-world projects completed' },
    { year: currentYear + 4, label: 'Year 5', hours: Math.round((reclaimedMinutes * 365.25 * 5) / 60), milestone: 'Major life achievement unlocked; total transformation of personal focus' },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeYearData = futureYears[activeIdx];

  return (
    <div className="border border-editorial-border bg-background p-6 sm:p-8 space-y-8 select-none text-left">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-editorial-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
            <Rocket className="w-4 h-4 text-accent-coral" /> TIMELINE TRAVELER // 2026 → 2030
          </span>
          <h4 className="text-xl sm:text-2xl font-bold font-mono text-white pt-1">
            Your Sealed Capsule Traveling Through Future Years
          </h4>
        </div>

        <div className="px-3 py-1.5 bg-accent-coral/10 border border-accent-coral/40 text-xs font-mono font-bold text-accent-coral">
          Capsule Locked & Sealing
        </div>
      </div>

      {/* Year Slider Step Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {futureYears.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`p-4 border text-left font-mono transition-all cursor-pointer space-y-1 ${
              activeIdx === idx
                ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)] scale-105 z-10'
                : 'bg-surface-50 border-editorial-border text-editorial-cream hover:bg-surface-100'
            }`}
          >
            <span className="text-[10px] uppercase font-bold opacity-80">{item.label}</span>
            <p className="text-2xl font-black">{item.year}</p>
          </button>
        ))}
      </div>

      {/* Active Milestone Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeYearData.year}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="p-6 border-2 border-accent-coral/50 bg-surface-50 space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-editorial-border pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-coral" />
              <span className="text-xs font-mono font-bold text-white uppercase">
                {activeYearData.year} Milestone Projection
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-accent-coral">
              +{activeYearData.hours} Hours Reclaimed
            </span>
          </div>

          <div className="space-y-2">
            <p className="text-sm sm:text-base font-mono font-bold text-white">
              {activeYearData.milestone}
            </p>
            {promiseText && (
              <div className="p-3 bg-background border border-editorial-border text-xs font-mono text-editorial-muted">
                Personal Promise: &quot;<span className="text-white">{promiseText}</span>&quot;
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};
