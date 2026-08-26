'use client';

import React from 'react';
import { Counter } from '@/components/ui/Counter';
import { Film, Navigation, Flame } from 'lucide-react';

interface SectionReelsStreamProps {
  estimatedReels: number;
  thumbDistanceKm: number;
  caloriesBurned: number;
}

export const SectionReelsStream: React.FC<SectionReelsStreamProps> = ({
  estimatedReels,
  thumbDistanceKm,
  caloriesBurned,
}) => {
  const everestTimes = (thumbDistanceKm / 8.848).toFixed(1);

  return (
    <section className="py-16 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
            Section 02 // Volume & Physical Mechanics
          </span>
          <p className="text-xl sm:text-2xl font-bold uppercase text-editorial-muted">
            That&apos;s roughly
          </p>
          <h3 className="text-5xl sm:text-7xl font-black font-mono tracking-tight text-white">
            <Counter value={estimatedReels} /> <span className="text-accent-coral">REELS</span>
          </h3>
          <p className="text-xs font-mono text-editorial-dim">
            Calculated at an average video length of 15 seconds per Reel.
          </p>
        </div>

        {/* Visual Stream Grid Matrix */}
        <div className="relative border border-editorial-border bg-surface-50 p-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff4d4d_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-1 max-h-48 overflow-hidden opacity-40">
            {Array.from({ length: 96 }).map((_, idx) => (
              <div
                key={idx}
                className="h-10 bg-surface-200 border border-editorial-border flex items-center justify-center text-[9px] font-mono text-editorial-dim"
              >
                #{idx + 1}
              </div>
            ))}
          </div>

          <div className="relative z-20 mt-4 pt-4 border-t border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-editorial-muted">
            <span className="flex items-center gap-1.5 text-accent-coral font-bold">
              <Film className="w-4 h-4" /> Continuous micro-content stream
            </span>
            <span>Showing visual sample of 96 out of {estimatedReels.toLocaleString()} reels</span>
          </div>
        </div>

        {/* Physical Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-editorial-border bg-surface-50 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-editorial-dim">
              <span className="uppercase font-bold">Thumb Travel Distance</span>
              <Navigation className="w-4 h-4 text-accent-cyan" />
            </div>
            <p className="text-4xl font-mono font-black text-white">
              <Counter value={thumbDistanceKm} decimals={1} /> <span className="text-base text-accent-cyan">km</span>
            </p>
            <p className="text-xs text-editorial-muted leading-relaxed pt-1">
              Equal to scrolling your thumb up Mount Everest <span className="text-white font-bold">{everestTimes}x</span> times.
            </p>
          </div>

          <div className="p-6 border border-editorial-border bg-surface-50 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-editorial-dim">
              <span className="uppercase font-bold">Stationary Idle Energy</span>
              <Flame className="w-4 h-4 text-accent-amber" />
            </div>
            <p className="text-4xl font-mono font-black text-white">
              <Counter value={caloriesBurned} /> <span className="text-base text-accent-amber">kcal</span>
            </p>
            <p className="text-xs text-editorial-muted leading-relaxed pt-1">
              Metabolic energy consumed while remaining stationary consuming video loops.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
