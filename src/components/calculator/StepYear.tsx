'use client';

import React from 'react';
import { Calendar, History, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StepYearProps {
  startYear: number;
  onChangeStartYear: (val: number) => void;
}

export const StepYear: React.FC<StepYearProps> = ({
  startYear,
  onChangeStartYear,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2009 }, (_, i) => 2010 + i).reverse();

  const getEraBenchmark = (year: number) => {
    if (year <= 2012) return 'Early Smartphone Era (Vine & Instagram Web)';
    if (year <= 2016) return 'Feed Algorithms & Stories Launch';
    if (year <= 2019) return 'Short-Form Video Takeover';
    if (year <= 2021) return 'Pandemic Screen Surge & Reels Launch';
    return 'Hyper-AI Recommendation Era';
  };

  const yearsElapsed = currentYear - startYear + 1;

  return (
    <div className="space-y-8 text-left select-none">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
          <History className="w-4 h-4" /> STEP 02 // TIME TRAVEL ORIGIN
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Where did this journey begin?
        </h2>
        <p className="text-sm text-editorial-muted">
          Select your starting year. Watch the timeline move forward through years of short video feeds.
        </p>
      </div>

      {/* Interactive Time Machine Display Box */}
      <div className="p-8 border border-editorial-border bg-surface-50 space-y-6 relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-editorial-border pb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-editorial-dim">
              TIMELINE ORIGIN YEAR
            </span>
            <div className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={startYear}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-5xl sm:text-6xl font-black font-mono text-accent-coral"
                >
                  {startYear}
                </motion.span>
              </AnimatePresence>
              <ArrowRight className="w-5 h-5 text-editorial-dim" />
              <span className="text-5xl sm:text-6xl font-black font-mono text-white">{currentYear}</span>
            </div>
          </div>

          <div className="p-4 bg-background border border-editorial-border text-right space-y-1">
            <p className="text-[10px] font-mono uppercase text-editorial-dim">Time Span Elapsed</p>
            <p className="text-2xl font-black font-mono text-accent-coral">{yearsElapsed} Calendar Years</p>
          </div>
        </div>

        {/* Dynamic Era Tagline */}
        <div className="p-3 bg-background border border-editorial-border text-xs font-mono flex items-center justify-between">
          <span className="text-editorial-dim uppercase">Tech Era Context</span>
          <span className="text-white font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-accent-coral" />
            {getEraBenchmark(startYear)}
          </span>
        </div>

        {/* Interactive Year Slider Scrubber */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs font-mono text-editorial-muted font-bold">
            <span>2010</span>
            <span>Drag Timeline Scrubber</span>
            <span>{currentYear}</span>
          </div>
          <input
            type="range"
            min="2010"
            max={currentYear}
            step="1"
            value={startYear}
            onChange={(e) => onChangeStartYear(Number(e.target.value))}
            className="w-full h-3 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.3)]"
          />
        </div>

      </div>

      {/* Large Grid Year Buttons */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold uppercase text-editorial-dim">Direct Year Selector</label>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {years.map((y) => {
            const isSelected = startYear === y;
            return (
              <button
                key={y}
                type="button"
                onClick={() => onChangeStartYear(y)}
                className={`p-4 border text-center font-mono text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)] scale-105 z-10'
                    : 'bg-surface-50 border-editorial-border text-editorial-cream hover:border-editorial-border-bright hover:bg-surface-100'
                }`}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
