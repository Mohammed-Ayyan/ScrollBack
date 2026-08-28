'use client';

import React from 'react';
import { Clock, Moon, Briefcase, Sparkles, Flame } from 'lucide-react';

interface Clock24hDialProps {
  hours: number;
  minutes: number;
}

export const Clock24hDial: React.FC<Clock24hDialProps> = ({ hours, minutes }) => {
  const totalScrollingHours = hours + minutes / 60;
  const sleepHours = 8;
  const workHours = 8;
  const wakingHours = 24 - sleepHours; // 16h
  const freeLifeHours = Math.max(0, wakingHours - workHours - totalScrollingHours);

  // Percentages of 24-hour day
  const sleepPercent = (sleepHours / 24) * 100;
  const workPercent = (workHours / 24) * 100;
  const scrollPercent = (totalScrollingHours / 24) * 100;
  const freePercent = Math.max(0, 100 - sleepPercent - workPercent - scrollPercent);

  // Waking life percentage lost
  const wakingScrollPercent = Math.min(100, Math.round((totalScrollingHours / wakingHours) * 100));

  // Circular clock SVG arc calculation
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="border border-editorial-border bg-surface-50 p-6 space-y-6 select-none">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-editorial-border pb-4">
        <div>
          <h4 className="text-sm font-bold font-mono text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-coral" />
            Your 24-Hour Day Partition
          </h4>
          <p className="text-xs text-editorial-muted">See how scrolling eats directly from your 16 waking hours</p>
        </div>

        <div className="px-3 py-1.5 bg-accent-coral/10 border border-accent-coral/40 text-xs font-mono font-bold text-accent-coral flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5" />
          <span>{wakingScrollPercent}% of Waking Life Consumed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* SVG Circular Clock Graphic */}
        <div className="md:col-span-5 flex flex-col items-center justify-center relative">
          <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
            {/* Background Ring */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              className="text-surface-200 stroke-current"
              strokeWidth="16"
              fill="transparent"
            />
            {/* Sleep Segment */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              className="text-indigo-900/60 stroke-current"
              strokeWidth="16"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (sleepPercent / 100) * circumference}
              fill="transparent"
            />
            {/* Work Segment */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              className="text-blue-800/60 stroke-current"
              strokeWidth="16"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (workPercent / 100) * circumference}
              style={{ transform: `rotate(${(sleepPercent / 100) * 360}deg)`, transformOrigin: '50% 50%' }}
              fill="transparent"
            />
            {/* Scrolling Glowing Highlight Arc */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              className="text-accent-coral stroke-current"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transform: `rotate(${((sleepPercent + workPercent) / 100) * 360}deg)`,
                transformOrigin: '50% 50%',
                filter: 'drop-shadow(0px 0px 8px rgba(255, 77, 77, 0.6))',
              }}
              fill="transparent"
            />
          </svg>

          {/* Center Readout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-mono text-editorial-dim uppercase">Scrolling</span>
            <span className="text-2xl font-black font-mono text-accent-coral">{totalScrollingHours.toFixed(1)}h</span>
            <span className="text-[10px] font-mono text-editorial-muted">out of 24h</span>
          </div>
        </div>

        {/* Linear Stacked Day Bar & Breakdown Legend */}
        <div className="md:col-span-7 space-y-4 text-left">
          
          {/* Horizontal Visual Day Bar */}
          <div className="w-full h-6 bg-surface-200 rounded-sm overflow-hidden flex border border-editorial-border">
            <div
              style={{ width: `${sleepPercent}%` }}
              className="h-full bg-indigo-950/80 border-r border-background/20 flex items-center justify-center text-[9px] font-mono font-bold text-indigo-300"
              title="Sleep (8h)"
            >
              Sleep
            </div>
            <div
              style={{ width: `${workPercent}%` }}
              className="h-full bg-blue-900/60 border-r border-background/20 flex items-center justify-center text-[9px] font-mono font-bold text-blue-200"
              title="Work/School (8h)"
            >
              Work
            </div>
            <div
              style={{ width: `${scrollPercent}%` }}
              className="h-full bg-accent-coral flex items-center justify-center text-[9px] font-mono font-bold text-background shadow-[0_0_12px_rgba(255,77,77,0.5)]"
              title={`Scrolling (${totalScrollingHours.toFixed(1)}h)`}
            >
              Scroll
            </div>
            {freePercent > 0 && (
              <div
                style={{ width: `${freePercent}%` }}
                className="h-full bg-emerald-900/40 flex items-center justify-center text-[9px] font-mono font-bold text-emerald-300"
                title={`Free Life (${freeLifeHours.toFixed(1)}h)`}
              >
                Life
              </div>
            )}
          </div>

          {/* Breakdown Legend */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
            <div className="p-2.5 bg-indigo-950/30 border border-indigo-900/40 flex items-center justify-between">
              <span className="text-editorial-dim flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-indigo-400" /> Sleep
              </span>
              <span className="font-bold text-white">8h</span>
            </div>

            <div className="p-2.5 bg-blue-950/30 border border-blue-900/40 flex items-center justify-between">
              <span className="text-editorial-dim flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" /> Work / School
              </span>
              <span className="font-bold text-white">8h</span>
            </div>

            <div className="p-2.5 bg-accent-coral/10 border border-accent-coral/40 flex items-center justify-between col-span-2">
              <span className="text-accent-coral font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-accent-coral" /> Daily Instagram Baseline Time
              </span>
              <span className="font-bold text-accent-coral">{hours}h {minutes}m ({wakingScrollPercent}% of waking day)</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
