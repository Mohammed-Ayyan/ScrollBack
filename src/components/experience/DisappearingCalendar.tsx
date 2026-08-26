'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, RefreshCw, Sun, Moon, Sparkles, Wind } from 'lucide-react';

interface DisappearingCalendarProps {
  startYear: number;
  totalDaysLost: number;
}

export const DisappearingCalendar: React.FC<DisappearingCalendarProps> = ({
  startYear,
  totalDaysLost,
}) => {
  const currentYear = new Date().getFullYear();
  const yearList = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  const [activeYearIdx, setActiveYearIdx] = useState(0);
  const [autoFlip, setAutoFlip] = useState(false);

  const currentYearVal = yearList[activeYearIdx] || currentYear;
  const daysInYearLost = Math.round(totalDaysLost / yearList.length);

  // Auto flip effect when enabled
  useEffect(() => {
    if (!autoFlip) return;
    const interval = setInterval(() => {
      setActiveYearIdx((prev) => (prev + 1) % yearList.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [autoFlip, yearList.length]);

  const seasons = [
    { name: 'Spring', color: 'text-emerald-400', bg: 'border-emerald-500/30' },
    { name: 'Summer', color: 'text-amber-400', bg: 'border-amber-500/30' },
    { name: 'Autumn', color: 'text-orange-400', bg: 'border-orange-500/30' },
    { name: 'Winter', color: 'text-cyan-400', bg: 'border-cyan-500/30' },
  ];

  return (
    <div className="py-20 border-b border-editorial-border bg-background relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <CalendarIcon className="w-4 h-4" /> Section 02 // Physical Days & Flying Pages
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            These Were Actual Days of Your Life
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Sunsets passed. Seasons turned. Watch calendar pages flip and fly off as years of scrolling roll by.
          </p>
        </div>

        {/* Sun/Moon Cycle & Season Indicator Header */}
        <div className="flex flex-wrap items-center justify-center gap-4 border border-editorial-border bg-surface-50 p-4 max-w-lg mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-white">
            <Sun className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Day / Night Cycles</span>
          </div>
          <div className="w-px h-4 bg-editorial-border" />
          <div className="flex items-center gap-2 text-xs font-mono text-editorial-muted">
            <Wind className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span>4 Seasons Passing</span>
          </div>
        </div>

        {/* Interactive Calendar Leaf Card */}
        <div className="max-w-md mx-auto relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentYearVal}
              initial={{ rotateX: -90, opacity: 0, scale: 0.95 }}
              animate={{ rotateX: 0, opacity: 1, scale: 1 }}
              exit={{ rotateX: 90, opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border-2 border-accent-coral/50 bg-surface-50 p-8 shadow-2xl space-y-6 relative overflow-hidden"
            >
              {/* Top Ring Header */}
              <div className="flex justify-between border-b-2 border-editorial-border pb-4">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-coral shadow-[0_0_8px_rgba(255,77,77,0.8)]" />
                  <div className="w-3 h-3 rounded-full bg-editorial-dim" />
                  <div className="w-3 h-3 rounded-full bg-editorial-dim" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-accent-coral tracking-widest">
                  CALENDAR YEAR LEAF
                </span>
              </div>

              {/* Big Year Header */}
              <div className="space-y-1">
                <p className="text-6xl font-black font-mono text-white tracking-tight">
                  {currentYearVal}
                </p>
                <p className="text-xs font-mono text-accent-coral uppercase font-bold">
                  ~{daysInYearLost} days lost to scrolling in {currentYearVal}
                </p>
              </div>

              {/* Seasons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {seasons.map((s, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 border ${s.bg} bg-background text-[10px] font-mono flex flex-col items-center gap-1`}
                  >
                    <span className={`font-bold ${s.color}`}>{s.name}</span>
                    <span className="text-editorial-dim">~{Math.round(daysInYearLost / 4)}d</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] font-mono text-editorial-dim flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-coral" />
                <span>Page {activeYearIdx + 1} of {yearList.length} torn from calendar</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setActiveYearIdx((prev) => (prev + 1) % yearList.length)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-100 border border-editorial-border hover:border-accent-coral text-white font-mono text-xs font-bold uppercase transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-accent-coral" />
              <span>Flip Next Calendar Leaf</span>
            </button>

            <button
              onClick={() => setAutoFlip(!autoFlip)}
              className={`px-4 py-2.5 border text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                autoFlip
                  ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)]'
                  : 'bg-surface-50 border-editorial-border text-editorial-muted hover:text-white'
              }`}
            >
              {autoFlip ? '⚡ Fast Flipping' : 'Auto Flip'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
