'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Play, Flame, Film } from 'lucide-react';

interface InfiniteReelsWallProps {
  estimatedReels: number;
}

export const InfiniteReelsWall: React.FC<InfiniteReelsWallProps> = ({ estimatedReels }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mockCards = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Reel #${(i + 1) * 1200}`,
    category: ['Viral Dance', 'Fast Recipe', 'Life Hack', 'Gym Flex', 'Tech Meme'][i % 5],
    duration: '15s',
  }));

  return (
    <div className="py-16 border-b border-editorial-border bg-surface-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Film className="w-4 h-4" /> Visual Experience // Content Mass
          </span>
          <p className="text-xl font-mono uppercase text-editorial-muted">
            This is what your thumb consumed:
          </p>
          <h3 className="text-5xl sm:text-7xl font-black font-mono tracking-tight text-white">
            <Counter value={estimatedReels} /> <span className="text-accent-coral">REELS</span>
          </h3>
          <p className="text-xs font-mono text-editorial-dim">
            Hover over the matrix wall below to slow down consumption.
          </p>
        </div>

        {/* 3-Column Accelerated Reel Wall Stream */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative h-[420px] border border-editorial-border bg-background p-4 overflow-hidden grid grid-cols-1 sm:grid-cols-3 gap-4 cursor-pointer group"
        >
          {/* Overlay Speed Badge */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-background/90 border border-editorial-border text-xs font-mono font-bold text-accent-coral uppercase">
            {isHovered ? '⏸️ Slow Inspection Mode' : '⚡ Velocity Scroll Mode'}
          </div>

          {[0, 1, 2].map((colIdx) => (
            <div key={colIdx} className="overflow-hidden relative h-full">
              <motion.div
                animate={{
                  y: colIdx % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%'],
                }}
                transition={{
                  duration: isHovered ? 24 : 10,
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
                      <div className="h-full bg-accent-coral w-2/3" />
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
