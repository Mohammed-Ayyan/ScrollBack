'use client';

import React from 'react';
import { Clock, Flame } from 'lucide-react';
import { Clock24hDial } from './Clock24hDial';

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
  const presets = [
    { label: '30 mins', h: 0, m: 30 },
    { label: '1 hour', h: 1, m: 0 },
    { label: '2.5 hours', h: 2, m: 30 },
    { label: '4 hours', h: 4, m: 0 },
    { label: '6+ hours', h: 6, m: 0 },
  ];

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
          <Clock className="w-4 h-4" /> STEP 01 // TIME MACHINE INPUT
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          How much of your day disappears here?
        </h2>
        <p className="text-sm text-editorial-muted">
          Drag the sliders or tap presets to see how scrolling carves away your actual 24-hour day.
        </p>
      </div>

      {/* Massive Visually Dominant Time Readout */}
      <div className="p-8 border border-editorial-border bg-surface-50 text-center space-y-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-accent-coral uppercase font-bold bg-accent-coral/10 border-b border-l border-accent-coral/30">
          Daily Loss Rate
        </div>
        <p className="text-6xl sm:text-8xl font-black font-mono text-white tracking-tight">
          <span className="text-accent-coral">{hours}</span>
          <span className="text-2xl sm:text-4xl text-editorial-dim font-bold font-sans">h </span>
          <span className="text-white">{minutes}</span>
          <span className="text-2xl sm:text-4xl text-editorial-dim font-bold font-sans">m</span>
        </p>
        <p className="text-xs font-mono uppercase tracking-wider text-editorial-muted flex items-center justify-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-accent-coral" />
          Average Daily Short Video Consumption
        </p>
      </div>

      {/* Interactive 24-Hour Circular Day Partition Clock */}
      <Clock24hDial hours={hours} minutes={minutes} />

      {/* Preset Buttons */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold uppercase text-editorial-dim">Quick Presets</label>
        <div className="flex flex-wrap gap-2">
          {presets.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                onChangeHours(p.h);
                onChangeMinutes(p.m);
              }}
              className={`px-4 py-2.5 rounded-sm border text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                hours === p.h && minutes === p.m
                  ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)]'
                  : 'bg-surface-100 border-editorial-border text-editorial-cream hover:border-editorial-border-bright'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fine-Tune Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-editorial-border">
        <div className="space-y-3">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-editorial-muted uppercase font-bold">Hours</span>
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

        <div className="space-y-3">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-editorial-muted uppercase font-bold">Minutes</span>
            <span className="text-white font-bold">{minutes} minutes</span>
          </div>
          <input
            type="range"
            min="0"
            max="59"
            step="5"
            value={minutes}
            onChange={(e) => onChangeMinutes(Number(e.target.value))}
            className="w-full h-2 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-coral"
          />
        </div>
      </div>
    </div>
  );
};
