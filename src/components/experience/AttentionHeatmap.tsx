'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Clock, Sparkles, X, ChevronRight } from 'lucide-react';

interface SelectedCellInfo {
  day: string;
  timeslot: string;
  intensity: number;
  estimatedHours: string;
}

export const AttentionHeatmap: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeslots = ['Morning (7am)', 'Afternoon (1pm)', 'Evening (7pm)', 'Late Night (11pm)'];

  const heatData = [
    [20, 30, 60, 95], // Mon
    [25, 35, 65, 90], // Tue
    [20, 40, 70, 95], // Wed
    [30, 45, 75, 90], // Thu
    [35, 50, 85, 100], // Fri
    [50, 65, 90, 100], // Sat
    [40, 60, 85, 95], // Sun
  ];

  const [selectedCell, setSelectedCell] = useState<SelectedCellInfo | null>(null);

  const handleCellClick = (dIdx: number, tIdx: number, val: number) => {
    const estHours = (val * 0.04).toFixed(1);
    setSelectedCell({
      day: days[dIdx],
      timeslot: timeslots[tIdx],
      intensity: val,
      estimatedHours: `${estHours} hrs (~${Math.round(val * 1.5)} Reels)`,
    });
  };

  return (
    <div className="py-20 border-b border-editorial-border bg-background relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4" /> Section 07 // Clickable Heatmap Popovers
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Click Any Time Block to Inspect Peak Habits
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Click cells below to inspect exact peak scroll hours and habit patterns.
          </p>
        </div>

        {/* Heatmap Grid */}
        <div className="border border-editorial-border bg-surface-50 p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono text-editorial-dim border-b border-editorial-border pb-4">
            <span>DAY</span>
            {timeslots.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>

          <div className="space-y-3">
            {days.map((day, dIdx) => (
              <div key={dIdx} className="grid grid-cols-5 gap-2 items-center text-xs font-mono">
                <span className="text-white font-bold">{day}</span>
                {heatData[dIdx].map((val, tIdx) => {
                  const isPeak = val >= 90;
                  return (
                    <motion.button
                      key={tIdx}
                      type="button"
                      onClick={() => handleCellClick(dIdx, tIdx, val)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: dIdx * 0.03 + tIdx * 0.02 }}
                      className={`h-11 border flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer hover:scale-105 ${
                        isPeak
                          ? 'border-accent-coral bg-accent-coral/30 text-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.3)]'
                          : 'border-editorial-border bg-surface-100 text-editorial-muted hover:border-editorial-border-bright hover:text-white'
                      }`}
                      title="Click to inspect this time block"
                    >
                      {val}% Peak
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Contextual Popover for Clicked Cell */}
          <AnimatePresence>
            {selectedCell && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 bg-background border-2 border-accent-coral text-left font-mono text-xs space-y-2 relative"
              >
                <button
                  onClick={() => setSelectedCell(null)}
                  className="absolute top-3 right-3 text-editorial-dim hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-accent-coral font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>{selectedCell.day} // {selectedCell.timeslot}</span>
                </div>
                <p className="text-white font-bold">
                  Peak Intensity: {selectedCell.intensity}% • Estimated Loss: {selectedCell.estimatedHours}
                </p>
                <p className="text-editorial-muted text-[11px]">
                  {selectedCell.intensity >= 90
                    ? '⚠️ Peak Vulnerability Window: Late night scrolling causes high sleep disruption & fatigue.'
                    : 'Moderate background scrolling period.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-xs font-mono text-editorial-muted">
            <span className="flex items-center gap-1.5 text-accent-coral font-bold">
              <Flame className="w-3.5 h-3.5" /> Late Night (11pm – 2am) represents ~42% of total screen time
            </span>
            <span>Click any cell for popover inspection</span>
          </div>
        </div>

      </div>
    </div>
  );
};
