'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Counter } from '@/components/ui/Counter';
import { Film, Navigation, Flame } from 'lucide-react';

interface ReelsCountCardProps {
  estimatedReels: number;
  thumbDistanceKm: number;
  caloriesBurned: number;
}

export const ReelsCountCard: React.FC<ReelsCountCardProps> = ({
  estimatedReels,
  thumbDistanceKm,
  caloriesBurned,
}) => {
  const everestEquivalent = (thumbDistanceKm / 8.848).toFixed(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Reels Count Card */}
      <GlassCard glow="rose" className="space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-rose">Reels Watched</span>
          <Film className="w-5 h-5 text-brand-rose" />
        </div>
        <p className="text-3xl sm:text-4xl font-black text-white">
          <Counter value={estimatedReels} />
        </p>
        <p className="text-xs text-zinc-400">
          Based on an average video duration of 15 seconds per Reel.
        </p>
      </GlassCard>

      {/* Thumb Scroll Distance Card */}
      <GlassCard glow="cyan" className="space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">Thumb Travel Distance</span>
          <Navigation className="w-5 h-5 text-brand-cyan" />
        </div>
        <p className="text-3xl sm:text-4xl font-black text-white">
          <Counter value={thumbDistanceKm} decimals={1} suffix=" km" />
        </p>
        <p className="text-xs text-zinc-400">
          Equal to climbing Mount Everest <span className="text-brand-cyan font-bold">{everestEquivalent}x</span> times with your thumb.
        </p>
      </GlassCard>

      {/* Focus & Energy Loss Card */}
      <GlassCard glow="amber" className="space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">Idle Energy Burned</span>
          <Flame className="w-5 h-5 text-brand-amber" />
        </div>
        <p className="text-3xl sm:text-4xl font-black text-white">
          <Counter value={caloriesBurned} suffix=" kcal" />
        </p>
        <p className="text-xs text-zinc-400">
          Energy spent sitting stationary while consuming micro-dopamine loops.
        </p>
      </GlassCard>
    </div>
  );
};
