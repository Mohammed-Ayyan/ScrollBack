'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Play, Sparkles } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';

export const InteractiveReelFeed: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const reelCards = [
    { title: 'Dopamine Loop #1', category: 'Viral Dance', duration: '15s', color: 'from-zinc-900 to-zinc-950' },
    { title: 'Dopamine Loop #2', category: 'Fast Recipe', duration: '12s', color: 'from-surface-100 to-zinc-950' },
    { title: 'Dopamine Loop #3', category: 'Life Hack', duration: '18s', color: 'from-zinc-900 to-surface-200' },
    { title: 'Dopamine Loop #4', category: 'Gym Flex', duration: '15s', color: 'from-surface-200 to-zinc-950' },
    { title: 'Dopamine Loop #5', category: 'Tech Meme', duration: '10s', color: 'from-zinc-900 to-zinc-950' },
  ];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-sm mx-auto h-[520px] bg-surface-50 border border-editorial-border rounded-sm overflow-hidden flex flex-col justify-between p-6 select-none cursor-pointer group"
    >
      {/* Top Header Counter Banner */}
      <div className="z-20 flex items-center justify-between bg-background/90 backdrop-blur-md p-3.5 border border-editorial-border rounded-sm">
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1">
            <Flame className="w-3 h-3 text-accent-coral animate-pulse" /> Live Scroll Stream
          </p>
          <p className="text-2xl font-black font-mono text-white tracking-tight">
            <Counter value={isHovered ? 1284900 : 847320} duration={1500} />
          </p>
          <p className="text-[10px] text-editorial-muted uppercase tracking-wider font-semibold">
            estimated reels
          </p>
        </div>

        <div className="px-2.5 py-1 rounded bg-accent-coral/10 border border-accent-coral/30 text-[10px] font-mono text-accent-coral font-bold uppercase">
          {isHovered ? '⚡ Accelerated' : 'Hover to Speed Up'}
        </div>
      </div>

      {/* Scrolling Blurred Reel Stream */}
      <div className="absolute inset-0 top-20 overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity">
        <motion.div
          animate={{
            y: ['0%', '-50%'],
          }}
          transition={{
            duration: isHovered ? 4 : 14,
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
                  <div className="h-full bg-accent-coral w-3/4" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Hint Banner */}
      <div className="z-20 bg-background/90 backdrop-blur-md p-3 border border-editorial-border text-center text-xs font-mono text-editorial-muted">
        {isHovered ? 'High Velocity Consumption Active' : 'Hover over screen to accelerate time'}
      </div>
    </div>
  );
};
