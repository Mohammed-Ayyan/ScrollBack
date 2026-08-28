'use client';

import React, { useState } from 'react';
import { Clock, HelpCircle, Flame, Sparkles, Smartphone } from 'lucide-react';
import { Clock24hDial } from './Clock24hDial';
import { InstagramGuideModal } from './InstagramGuideModal';
import { motion, AnimatePresence } from 'framer-motion';

interface StepTimeProps {
  hours: number;
  minutes: number;
  onChangeHours: (val: number) => void;
  onChangeMinutes: (val: number) => void;
}

export const StepTime: React.FC<StepTimeProps> = ({
  hours,
  minutes,
  onChangeHours,
  onChangeMinutes,
}) => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const presets = [
    { label: '30 mins', h: 0, m: 30 },
    { label: '1 hour', h: 1, m: 0 },
    { label: '2h 34m (IG Avg)', h: 2, m: 34 },
    { label: '4 hours', h: 4, m: 0 },
    { label: '6+ hours', h: 6, m: 0 },
  ];

  // Calculate live preview metrics
  const totalDailyMinutes = hours * 60 + minutes;
  const yearlyHours = Math.round((totalDailyMinutes * 365.25) / 60);
  const yearlyDays24h = ( (totalDailyMinutes * 365.25) / (24 * 60) ).toFixed(0);

  return (
    <div className="space-y-8 text-left">
      <InstagramGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Main Step Header */}
      <div className="space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
          <Clock className="w-4 h-4" /> STEP 1 // INSTAGRAM BASELINE
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          How much time do you spend on Instagram?
        </h2>
        <p className="text-base text-editorial-cream font-medium leading-relaxed">
          Instagram already tracks your average daily time. Find your number and enter it here.
        </p>
      </div>

      {/* Two Clear Paths Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* PATH 2 (Helper Trigger): Need help finding it? */}
        <div className="md:col-span-5 p-6 border border-accent-coral/30 bg-accent-coral/5 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> NEED HELP FINDING IT?
            </span>
            <h3 className="text-lg font-bold text-white">
              Not sure what your average is?
            </h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Instagram displays your reported daily time spent right inside the app settings under <span className="text-white font-semibold">Your activity</span>.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsGuideOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-accent-coral text-background text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(255,77,77,0.3)] cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Show me where</span>
          </button>
        </div>

        {/* PATH 1: I know my time -> Enter values */}
        <div className="md:col-span-7 p-6 border border-editorial-border bg-surface-50 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-editorial-dim">
              PATH 1 // DIRECT INPUT
            </span>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              I know my time
            </h3>
            <p className="text-xs text-editorial-muted">
              Your Instagram average
            </p>
          </div>

          {/* Stepper / Direct Hours and Minutes Number Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border border-editorial-border bg-background space-y-2">
              <label className="text-[11px] font-mono font-bold text-editorial-muted uppercase block">
                Hours
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min="0"
                  max="16"
                  value={hours}
                  onChange={(e) => onChangeHours(Math.max(0, Math.min(16, Number(e.target.value))))}
                  className="w-full text-3xl font-black font-mono bg-transparent text-white focus:outline-none"
                />
                <span className="text-xs font-mono font-bold text-editorial-dim">hrs</span>
              </div>
            </div>

            <div className="p-4 border border-editorial-border bg-background space-y-2">
              <label className="text-[11px] font-mono font-bold text-editorial-muted uppercase block">
                Minutes
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => onChangeMinutes(Math.max(0, Math.min(59, Number(e.target.value))))}
                  className="w-full text-3xl font-black font-mono bg-transparent text-accent-coral focus:outline-none"
                />
                <span className="text-xs font-mono font-bold text-editorial-dim">min</span>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div className="space-y-2">
            <label className="text-[10px] font-mono font-bold uppercase text-editorial-dim">Quick Presets</label>
            <div className="flex flex-wrap gap-2">
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onChangeHours(p.h);
                    onChangeMinutes(p.m);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    hours === p.h && minutes === p.m
                      ? 'bg-accent-coral text-background shadow-[0_0_12px_rgba(255,77,77,0.4)]'
                      : 'bg-surface-100 border border-editorial-border text-editorial-cream hover:border-editorial-border-bright'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fine-Tune Sliders */}
          <div className="space-y-4 pt-2 border-t border-editorial-border">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-editorial-muted uppercase font-bold">Hours Slider</span>
                <span className="text-white font-bold">{hours} hours</span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                step="1"
                value={hours}
                onChange={(e) => onChangeHours(Number(e.target.value))}
                className="w-full h-2 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-coral"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-editorial-muted uppercase font-bold">Minutes Slider</span>
                <span className="text-white font-bold">{minutes} minutes</span>
              </div>
              <input
                type="range"
                min="0"
                max="59"
                step="1"
                value={minutes}
                onChange={(e) => onChangeMinutes(Number(e.target.value))}
                className="w-full h-2 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-coral"
              />
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-editorial-border/60">
            <p className="text-xs font-mono text-white font-bold">
              That's the average Instagram reports for your account.
            </p>
            <p className="text-[11px] font-mono text-editorial-muted">
              ScrollBack uses this as your daily Instagram usage baseline.
            </p>
          </div>
        </div>

      </div>

      {/* MAKE THE NUMBER FEEL REAL: Live Scale Preview Banner */}
      <div className="p-6 border border-editorial-border bg-surface-50 relative overflow-hidden space-y-4">
        <div className="flex items-center justify-between border-b border-editorial-border pb-3">
          <span className="text-xs font-mono font-bold uppercase text-accent-coral flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> LIVE SCALE PREVIEW
          </span>
          <span className="text-[10px] font-mono text-editorial-muted uppercase">Instant Scale Conversion</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center select-none">
          <div className="p-4 bg-background border border-editorial-border space-y-1">
            <span className="text-[10px] font-mono text-editorial-dim uppercase">Daily Average</span>
            <AnimatePresence mode="wait">
              <motion.p
                key={`${hours}-${minutes}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-2xl sm:text-3xl font-black font-mono text-white"
              >
                {hours}h {minutes}m/day
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="p-4 bg-background border border-editorial-border space-y-1">
            <span className="text-[10px] font-mono text-editorial-dim uppercase">Yearly Time</span>
            <AnimatePresence mode="wait">
              <motion.p
                key={yearlyHours}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-2xl sm:text-3xl font-black font-mono text-accent-coral"
              >
                ≈ {yearlyHours.toLocaleString()} hrs/yr
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="p-4 bg-background border border-editorial-border space-y-1">
            <span className="text-[10px] font-mono text-editorial-dim uppercase">Yearly Days Lost</span>
            <AnimatePresence mode="wait">
              <motion.p
                key={yearlyDays24h}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-2xl sm:text-3xl font-black font-mono text-white"
              >
                ≈ {yearlyDays24h} full days/yr
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 24-Hour Circular Day Partition Clock */}
      <Clock24hDial hours={hours} minutes={minutes} />
    </div>
  );
};
