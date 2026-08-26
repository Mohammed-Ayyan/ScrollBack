'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Play, Flame, Film, Zap } from 'lucide-react';

interface InfiniteReelsWallProps {
  estimatedReels: number;
}

export const InfiniteReelsWall: React.FC<InfiniteReelsWallProps> = ({ estimatedReels }) => {
  const [speed, setSpeed] = useState<number>(1);

  const mockCards = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Reel #${((i + 1) * 850).toLocaleString()}`,
    category: ['Viral Dance', 'Fast Recipe', 'Life Hack', 'Gym Flex', 'Tech Meme', 'Podcast Clip'][i % 6],
    duration: '15s',
  }));

  const speedDuration = 16 / speed;

  return (
    <div className="py-20 border-b border-editorial-border bg-surface-50 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Scale Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Film className="w-4 h-4" /> Section 03 // The Reels Scale
          </span>
          <p className="text-xl font-mono uppercase text-editorial-muted">
            Your attention was broken into
          </p>
          <h3 className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,77,77,0.3)]">
            <Counter value={estimatedReels} /> <span className="text-accent-coral">REELS</span>
          </h3>
          <p className="text-xs font-mono text-editorial-muted">
            Imagine every short clip moving past at hyper-speed over years of scrolling.
          </p>
        </div>

        {/* Speed Mode Bar */}
        <div className="flex items-center justify-between bg-background border border-editorial-border p-3 max-w-xl mx-auto text-xs font-mono">
          <span className="text-editorial-muted font-bold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-accent-coral" /> Reel Stream Speed:
          </span>
          <div className="flex gap-2">
            {[1, 2, 4, 8].map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-3 py-1 border font-bold uppercase cursor-pointer ${
                  speed === s
                    ? 'bg-accent-coral text-background border-accent-coral'
                    : 'bg-surface-100 border-editorial-border text-editorial-muted hover:text-white'
                }`}
              >
                {s}x {s === 8 ? 'Warp' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Accelerated Reel Wall Stream */}
        <div className="relative h-[460px] border border-editorial-border bg-background p-4 overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {[0, 1, 2, 3].map((colIdx) => (
            <div key={colIdx} className="overflow-hidden relative h-full">
              <motion.div
                animate={{
                  y: colIdx % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
                }}
                transition={{
                  duration: speedDuration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="space-y-4"
              >
                {[...mockCards, ...mockCards].map((card, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-editorial-border bg-surface-50 rounded-sm space-y-2 hover:border-accent-coral transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-editorial-muted">
                      <span className="flex items-center gap-1 text-white font-bold">
                        <Play className="w-3 h-3 text-accent-coral fill-accent-coral" />
                        {card.category}
                      </span>
                      <span>{card.duration}</span>
                    </div>
                    <p className="text-xs font-mono font-bold text-editorial-cream">{card.title}</p>
                    <div className="w-full h-1 bg-surface-200 rounded-full overflow-hidden">
                      <div className="h-full bg-accent-coral w-3/4 animate-pulse" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};
