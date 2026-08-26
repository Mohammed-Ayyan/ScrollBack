'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Navigation, Globe, Compass, Mountain, Smartphone, MapPin } from 'lucide-react';

interface ThumbJourneyProps {
  thumbDistanceKm: number;
  estimatedReels: number;
}

export const ThumbJourney: React.FC<ThumbJourneyProps> = ({
  thumbDistanceKm,
  estimatedReels,
}) => {
  const [scaleMode, setScaleMode] = useState<'city' | 'country' | 'earth'>('city');
  const totalSwipes = estimatedReels;
  const everestEquivalent = (thumbDistanceKm / 8.848).toFixed(1);

  const getScaleComparisonText = () => {
    switch (scaleMode) {
      case 'city':
        return {
          title: 'Across Your City',
          desc: `Your thumb distance (~${thumbDistanceKm.toFixed(1)} km) is equal to walking across your entire city ${Math.max(1, Math.round(thumbDistanceKm / 12))} times.`,
          icon: <MapPin className="w-5 h-5 text-accent-cyan" />,
        };
      case 'country':
        return {
          title: 'Across Your State / Country',
          desc: `Your thumb traveled ~${thumbDistanceKm.toFixed(1)} km, which spans multiple major cities across the state.`,
          icon: <Navigation className="w-5 h-5 text-accent-amber" />,
        };
      case 'earth':
        return {
          title: 'Around Planet Earth',
          desc: `Equal to ${(thumbDistanceKm / 40075 * 100).toFixed(2)}% of the total circumference of Planet Earth (40,075 km).`,
          icon: <Globe className="w-5 h-5 text-accent-coral" />,
        };
    }
  };

  const scaleInfo = getScaleComparisonText();

  return (
    <div id="thumb-journey" className="py-20 border-b border-editorial-border bg-background relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-cyan flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4" /> Section 04 // Interactive Thumb Journey & Scale
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Thumb Traveled Approximately
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Time has physical distance. Every swipe moved your thumb a few inches across smartphone glass.
          </p>
        </div>

        {/* Big Distance Display */}
        <div className="p-8 border border-editorial-border bg-surface-50 max-w-2xl mx-auto space-y-4 shadow-2xl">
          <p className="text-xs font-mono uppercase text-editorial-dim">Total Vertical Swiping Distance</p>
          <p className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-accent-cyan">
            <Counter value={thumbDistanceKm} decimals={1} /> <span className="text-3xl font-sans text-white">KM</span>
          </p>
          <p className="text-sm text-editorial-muted font-mono">
            Equal to <strong className="text-white">{totalSwipes.toLocaleString()} physical vertical swipes</strong> across screen glass.
          </p>
        </div>

        {/* Interactive Phone Swiping Visual */}
        <div className="max-w-xs mx-auto p-6 border-2 border-accent-cyan/60 bg-surface-50 rounded-3xl shadow-2xl relative space-y-4">
          <div className="w-16 h-2 bg-surface-200 rounded-full mx-auto" />
          
          <div className="h-56 border border-editorial-border bg-background rounded-xl relative overflow-hidden flex flex-col items-center justify-center">
            {/* Animated Swiping Finger Cue */}
            <motion.div
              animate={{
                y: [40, -40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex flex-col items-center text-accent-cyan font-mono text-xs font-bold"
            >
              <div className="w-10 h-14 border-2 border-accent-cyan rounded-full bg-accent-cyan/20 flex items-center justify-center shadow-[0_0_15px_rgba(0,230,230,0.4)]">
                👆
              </div>
              <span className="mt-2 text-[10px] uppercase font-bold tracking-wider">SWIPING UP</span>
            </motion.div>
          </div>

          <div className="p-3 border border-editorial-border bg-background text-xs font-mono text-editorial-muted">
            Height equivalent: <span className="text-accent-cyan font-bold">{everestEquivalent}x Mount Everests</span>
          </div>
        </div>

        {/* Interactive Scale Comparison Switcher */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 font-mono text-xs">
            <span className="text-editorial-dim font-bold">Compare Distance Scale:</span>
            {[
              { id: 'city', label: 'City Scale' },
              { id: 'country', label: 'Country Scale' },
              { id: 'earth', label: 'Planet Earth' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setScaleMode(mode.id as any)}
                className={`px-4 py-2 border font-bold uppercase transition-all cursor-pointer ${
                  scaleMode === mode.id
                    ? 'bg-accent-cyan text-background border-accent-cyan shadow-[0_0_15px_rgba(0,230,230,0.4)]'
                    : 'bg-surface-100 border-editorial-border text-editorial-muted hover:text-white'
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          {/* Scale Detail Card */}
          <div className="p-6 border border-accent-cyan/40 bg-surface-50 max-w-xl mx-auto text-left space-y-2 font-mono">
            <div className="flex items-center gap-2 text-white font-bold">
              {scaleInfo.icon}
              <h4 className="text-base">{scaleInfo.title}</h4>
            </div>
            <p className="text-xs text-editorial-cream leading-relaxed">
              {scaleInfo.desc}
            </p>
          </div>
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
