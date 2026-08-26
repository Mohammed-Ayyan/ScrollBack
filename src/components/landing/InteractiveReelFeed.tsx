'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Play, Clock, Sparkles } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';

interface TimeScaleOption {
  years: number;
  label: string;
  reels: number;
  daysLost: number;
  speedDuration: number;
}

export const InteractiveReelFeed: React.FC = () => {
  const [selectedYears, setSelectedYears] = useState<number>(3);

  const scales: TimeScaleOption[] = [
    { years: 1, label: '1 Year', reels: 243300, daysLost: 38, speedDuration: 12 },
    { years: 3, label: '3 Years', reels: 729900, daysLost: 114, speedDuration: 7 },
    { years: 5, label: '5 Years', reels: 1216500, daysLost: 190, speedDuration: 4 },
    { years: 10, label: '10 Years', reels: 2433000, daysLost: 380, speedDuration: 2 },
  ];

  const activeScale = scales.find((s) => s.years === selectedYears) || scales[1];

  const reelCards = [
    { title: 'Dopamine Loop #1', category: 'Viral Dance', duration: '15s', color: 'from-zinc-900 to-zinc-950' },
    { title: 'Dopamine Loop #2', category: 'Fast Recipe', duration: '12s', color: 'from-surface-100 to-zinc-950' },
    { title: 'Dopamine Loop #3', category: 'Life Hack', duration: '18s', color: 'from-zinc-900 to-surface-200' },
    { title: 'Dopamine Loop #4', category: 'Gym Flex', duration: '15s', color: 'from-surface-200 to-zinc-950' },
    { title: 'Dopamine Loop #5', category: 'Tech Meme', duration: '10s', color: 'from-zinc-900 to-zinc-950' },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto h-[540px] bg-surface-50 border border-editorial-border rounded-sm overflow-hidden flex flex-col justify-between p-6 select-none shadow-2xl">
      
      {/* Top Controls: Time Scale Switch Buttons */}
      <div className="z-20 space-y-3 bg-background/95 backdrop-blur-md p-3.5 border border-editorial-border rounded-sm">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1">
            <Clock className="w-3 h-3 text-accent-coral" /> Click to Play with Time
          </span>
          <span className="text-[10px] font-mono text-accent-coral font-bold uppercase">
            ~{activeScale.daysLost} Days Lost
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1">
          {scales.map((s) => (
            <button
              key={s.years}
              type="button"
              onClick={() => setSelectedYears(s.years)}
              className={`py-1 text-[10px] font-mono font-bold uppercase border transition-all cursor-pointer ${
                selectedYears === s.years
                  ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_10px_rgba(255,77,77,0.4)]'
                  : 'bg-surface-100 border-editorial-border text-editorial-muted hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Dynamic Scale Readout */}
        <div className="text-left pt-1 border-t border-editorial-border flex items-baseline justify-between">
          <div>
            <p className="text-xl font-black font-mono text-white tracking-tight">
              <Counter value={activeScale.reels} duration={1200} />
            </p>
            <p className="text-[9px] text-editorial-muted uppercase tracking-wider font-semibold">
              Reels watched in {activeScale.label}
            </p>
          </div>
          <span className="text-[10px] font-mono text-accent-amber font-bold">
            {activeScale.years * 365} Days Total
          </span>
        </div>
      </div>

      {/* Scrolling Blurred Reel Stream */}
      <div className="absolute inset-0 top-28 overflow-hidden opacity-60 hover:opacity-95 transition-opacity">
        <motion.div
          animate={{
            y: ['0%', '-50%'],
          }}
          transition={{
            duration: activeScale.speedDuration,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full flex flex-col gap-4 p-4"
        >
          {[...reelCards, ...reelCards, ...reelCards].map((reel, idx) => (
            <div
              key={idx}
              className={`w-full h-32 rounded-sm bg-gradient-to-r ${reel.color} border border-editorial-border p-4 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-editorial-muted">
                <span className="flex items-center gap-1">
                  <Play className="w-3 h-3 text-accent-coral fill-accent-coral" />
                  {reel.category}
                </span>
                <span>{reel.duration}</span>
              </div>
              <div className="space-y-1 text-left">
                <p className="text-xs font-bold text-white font-mono">{reel.title}</p>
                <div className="w-full h-1 bg-surface-300 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-coral w-3/4 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Status Banner */}
      <div className="z-20 bg-background/95 backdrop-blur-md p-2.5 border border-editorial-border text-center text-[10px] font-mono text-editorial-muted flex items-center justify-center gap-1">
        <Sparkles className="w-3 h-3 text-accent-coral" />
        <span>Click scale buttons above to manipulate the speed & volume of time</span>
      </div>
    </div>
  );
};
