'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Navigation, Globe, Compass, Mountain } from 'lucide-react';

interface ThumbJourneyProps {
  thumbDistanceKm: number;
  estimatedReels: number;
}

export const ThumbJourney: React.FC<ThumbJourneyProps> = ({
  thumbDistanceKm,
  estimatedReels,
}) => {
  const totalSwipes = estimatedReels;
  const everestEquivalent = (thumbDistanceKm / 8.848).toFixed(1);

  return (
    <div className="py-20 border-b border-editorial-border bg-background relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4" /> Section 04 // Spatial Distance of Time
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            If Your Scroll Was a Physical Journey...
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Time has spatial size. Every swipe moved your thumb a few inches across glass.
          </p>
        </div>

        {/* Big Distance Display */}
        <div className="p-8 border border-editorial-border bg-surface-50 max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-mono uppercase text-editorial-dim">Total Swiping Physical Distance</p>
          <p className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-accent-cyan">
            <Counter value={thumbDistanceKm} decimals={1} /> <span className="text-3xl font-sans text-white">KM</span>
          </p>
          <p className="text-sm text-editorial-muted font-mono">
            Equal to <strong className="text-white">{totalSwipes.toLocaleString()} physical vertical swipes</strong> on screen.
          </p>
        </div>

        {/* Spatial Journey Milestone Path Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          
          <div className="p-6 border border-editorial-border bg-surface-50 space-y-2">
            <div className="flex items-center justify-between text-accent-cyan">
              <Mountain className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">VERT. CLIMB</span>
            </div>
            <p className="text-2xl font-bold font-mono text-white">{everestEquivalent}x</p>
            <p className="text-xs text-editorial-muted font-mono">Mount Everest Climbs (8.8 km each)</p>
          </div>

          <div className="p-6 border border-editorial-border bg-surface-50 space-y-2">
            <div className="flex items-center justify-between text-accent-amber">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">CROSSING</span>
            </div>
            <p className="text-2xl font-bold font-mono text-white">{(thumbDistanceKm / 40075 * 100).toFixed(1)}%</p>
            <p className="text-xs text-editorial-muted font-mono">Circumference of Planet Earth</p>
          </div>

          <div className="p-6 border border-editorial-border bg-surface-50 space-y-2">
            <div className="flex items-center justify-between text-accent-coral">
              <Navigation className="w-5 h-5" />
              <span className="text-xs font-mono font-bold">MARATHONS</span>
            </div>
            <p className="text-2xl font-bold font-mono text-white">{Math.round(thumbDistanceKm / 42.195)}</p>
            <p className="text-xs text-editorial-muted font-mono">Full Marathons Run (42.2 km each)</p>
          </div>

        </div>

      </div>
    </div>
  );
};
