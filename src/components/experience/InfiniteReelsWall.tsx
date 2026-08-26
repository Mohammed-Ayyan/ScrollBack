'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Play, Film, Zap, Check, Sparkles } from 'lucide-react';

interface InfiniteReelsWallProps {
  estimatedReels: number;
}

export const InfiniteReelsWall: React.FC<InfiniteReelsWallProps> = ({ estimatedReels }) => {
  const [speed, setSpeed] = useState<number>(1);
  const [selectedCount, setSelectedCount] = useState<number>(0);

  const mockCards = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `Reel #${((i + 1) * 850).toLocaleString()}`,
    category: ['Viral Dance', 'Fast Recipe', 'Life Hack', 'Gym Flex', 'Tech Meme', 'Podcast Clip'][i % 6],
    duration: '15s',
  }));

  const speedDuration = 16 / speed;
  const totalInspectedSeconds = selectedCount * 15;

  const handleCardClick = () => {
    setSelectedCount((prev) => prev + 1);
  };

  return (
    <div className="py-20 border-b border-editorial-border bg-surface-50 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Scale Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Film className="w-4 h-4" /> Section 03 // Interactive Reel Card Inspection
          </span>
          <p className="text-xl font-mono uppercase text-editorial-muted">
            Your attention was broken into
          </p>
          <h3 className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_35px_rgba(255,77,77,0.3)]">
            <Counter value={estimatedReels} /> <span className="text-accent-coral">REELS</span>
          </h3>
          <p className="text-xs font-mono text-editorial-muted">
            Click individual reel cards below to experience their micro scale.
          </p>
        </div>

        {/* Speed Mode & Inspected Counter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-background border border-editorial-border p-4 max-w-2xl mx-auto text-xs font-mono gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent-coral" />
            <span className="text-editorial-muted font-bold">Speed:</span>
            <div className="flex gap-1">
              {[1, 2, 4, 8].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2.5 py-1 border font-bold uppercase cursor-pointer ${
                    speed === s
                      ? 'bg-accent-coral text-background border-accent-coral'
                      : 'bg-surface-100 border-editorial-border text-editorial-muted hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-accent-coral font-bold bg-accent-coral/10 border border-accent-coral/30 px-3 py-1.5 rounded-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {selectedCount > 0
                ? `You clicked ${selectedCount} Reels (~${totalInspectedSeconds}s)`
                : 'Click cards below to inspect'}
            </span>
          </div>
        </div>

        {/* Interactive Reel Multi-Inspection Feedback Box */}
        {selectedCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-background border border-accent-coral text-center space-y-1 max-w-xl mx-auto font-mono text-xs"
          >
            <p className="text-white font-bold">
              You just clicked <span className="text-accent-coral font-extrabold">{selectedCount} Reels</span> (~{totalInspectedSeconds} seconds of life).
            </p>
            <p className="text-editorial-muted">
              Imagine repeating that simple tap gesture <strong className="text-white">{estimatedReels.toLocaleString()} times</strong> over years.
            </p>
          </motion.div>
        )}

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
                    onClick={handleCardClick}
                    className="p-4 border border-editorial-border bg-surface-50 rounded-sm space-y-2 hover:border-accent-coral hover:bg-surface-100 transition-all cursor-pointer group"
                    title="Click to inspect this 15-second Reel"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-editorial-muted">
                      <span className="flex items-center gap-1 text-white font-bold group-hover:text-accent-coral transition-colors">
                        <Play className="w-3 h-3 text-accent-coral fill-accent-coral" />
                        {card.category}
                      </span>
                      <span className="text-accent-coral font-bold">15s</span>
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
