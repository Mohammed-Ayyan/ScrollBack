'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Clock, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface FutureTreeVisualProps {
  reclaimedMinutes: number;
  onChangeReclaimedMinutes: (mins: number) => void;
}

export const FutureTreeVisual: React.FC<FutureTreeVisualProps> = ({
  reclaimedMinutes,
  onChangeReclaimedMinutes,
}) => {
  const hoursPerMonth = Math.round((reclaimedMinutes * 30.4) / 60);
  const hoursPerYear = Math.round((reclaimedMinutes * 365.25) / 60);
  const hoursPer5Years = Math.round((reclaimedMinutes * 365.25 * 5) / 60);

  // Growth level scale 1 to 4 based on reclaimedMinutes
  const growthScale = Math.min(4, Math.max(1, Math.ceil(reclaimedMinutes / 20)));

  return (
    <div className="border border-editorial-border bg-surface-50 p-6 sm:p-8 space-y-8 select-none text-left">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-editorial-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-emerald flex items-center gap-1.5">
            <Sprout className="w-4 h-4 text-accent-emerald" /> METAPHOR // THE ATTENTION TREE
          </span>
          <h4 className="text-xl sm:text-2xl font-bold font-mono text-white pt-1">
            Small Daily Choices Compound Into Real Life
          </h4>
        </div>

        <div className="px-3 py-1.5 bg-accent-emerald/10 border border-accent-emerald/40 text-xs font-mono font-bold text-accent-emerald">
          {reclaimedMinutes} Mins / Day Reclaimed
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* SVG Growing Attention Tree Animation */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-background border border-editorial-border rounded-xl relative h-[300px] overflow-hidden">
          <svg className="w-full h-full max-w-[240px]" viewBox="0 0 200 240">
            {/* Ground Base */}
            <path d="M 20 220 Q 100 215 180 220" stroke="#323242" strokeWidth="4" fill="none" />
            
            {/* Trunk */}
            <motion.path
              d="M 100 220 L 100 130"
              stroke="#00e699"
              strokeWidth={8 + growthScale * 2}
              strokeLinecap="round"
              initial={{ pathLength: 0.3 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />

            {/* Branch 1: Skills */}
            <motion.path
              d="M 100 170 Q 70 140 50 120"
              stroke="#00e699"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ scale: growthScale >= 1 ? 1 : 0.4 }}
              transition={{ duration: 0.6 }}
            />

            {/* Branch 2: Health */}
            <motion.path
              d="M 100 150 Q 130 120 150 100"
              stroke="#00e699"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ scale: growthScale >= 2 ? 1 : 0.3 }}
              transition={{ duration: 0.6 }}
            />

            {/* Branch 3: Creativity */}
            <motion.path
              d="M 100 130 Q 80 90 60 70"
              stroke="#00e699"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ scale: growthScale >= 3 ? 1 : 0.2 }}
              transition={{ duration: 0.6 }}
            />

            {/* Branch 4: Relationships */}
            <motion.path
              d="M 100 120 Q 120 80 140 60"
              stroke="#00e699"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ scale: growthScale >= 4 ? 1 : 0.1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Leaves / Blooming Foliage Circles */}
            {growthScale >= 1 && <circle cx="50" cy="120" r="10" fill="#00e699" opacity="0.8" />}
            {growthScale >= 2 && <circle cx="150" cy="100" r="12" fill="#ff4d4d" opacity="0.8" />}
            {growthScale >= 3 && <circle cx="60" cy="70" r="14" fill="#ffb84d" opacity="0.8" />}
            {growthScale >= 4 && <circle cx="140" cy="60" r="16" fill="#4d94ff" opacity="0.8" />}
            {growthScale >= 4 && <circle cx="100" cy="50" r="18" fill="#cc66ff" opacity="0.8" />}
          </svg>

          <div className="absolute bottom-3 text-center">
            <span className="text-[10px] font-mono text-editorial-muted uppercase">
              {growthScale === 1 && '🌱 Seedling Growth'}
              {growthScale === 2 && '🌿 Branching Attention'}
              {growthScale === 3 && '🌳 Deeply Rooted Focus'}
              {growthScale === 4 && '✨ Fully Blooming Life Tree'}
            </span>
          </div>
        </div>

        {/* Compounding Timeline Breakdown */}
        <div className="md:col-span-7 space-y-4">
          
          {/* Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-editorial-muted font-bold">
              <span>Daily Reclaimed Focus:</span>
              <span className="text-accent-emerald font-bold">{reclaimedMinutes} mins / day</span>
            </div>
            <input
              type="range"
              min="15"
              max="120"
              step="15"
              value={reclaimedMinutes}
              onChange={(e) => onChangeReclaimedMinutes(Number(e.target.value))}
              className="w-full h-2 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-emerald"
            />
          </div>

          {/* Compounding Hours Cards */}
          <div className="grid grid-cols-3 gap-3 text-xs font-mono pt-2">
            <div className="p-3 border border-editorial-border bg-background space-y-1">
              <span className="text-[10px] text-editorial-dim uppercase">1 Month</span>
              <p className="text-xl font-bold font-mono text-white">{hoursPerMonth} hrs</p>
              <p className="text-[9px] text-editorial-muted">~2 Books read</p>
            </div>

            <div className="p-3 border border-editorial-border bg-background space-y-1">
              <span className="text-[10px] text-editorial-dim uppercase">1 Year</span>
              <p className="text-xl font-bold font-mono text-accent-emerald">{hoursPerYear} hrs</p>
              <p className="text-[9px] text-editorial-muted">~1 Skill mastered</p>
            </div>

            <div className="p-3 border border-editorial-border bg-background space-y-1">
              <span className="text-[10px] text-editorial-dim uppercase">5 Years</span>
              <p className="text-xl font-bold font-mono text-accent-coral">{hoursPer5Years} hrs</p>
              <p className="text-[9px] text-editorial-muted">~Mastery level</p>
            </div>
          </div>

          <p className="text-[11px] font-mono text-editorial-dim leading-relaxed pt-1">
            We do not promise instant transformations. Small choices compound over years.
          </p>

        </div>

      </div>

    </div>
  );
};
