'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Package, Database } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';

interface ArchiveRoomProps {
  estimatedReels: number;
  totalDaysLost: number;
}

export const ArchiveRoom: React.FC<ArchiveRoomProps> = ({ estimatedReels, totalDaysLost }) => {
  // 1 physical card stack = 10,000 reels
  const totalPhysicalStacks = Math.max(12, Math.round(estimatedReels / 10000));

  return (
    <div className="py-20 border-b border-editorial-border bg-surface-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4" /> Visual Experience // Physical Content Archive
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            If All Your Reels Became Physical Objects
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Visualizing <span className="text-white font-mono font-bold">{estimatedReels.toLocaleString()} video frames</span> stacked as physical media archive towers.
          </p>
        </div>

        {/* 3D-Depth Media Archive Room Grid */}
        <div className="border border-editorial-border bg-background p-8 relative overflow-hidden space-y-6">
          <div className="flex items-center justify-between border-b border-editorial-border pb-4 text-xs font-mono">
            <span className="text-accent-coral font-bold flex items-center gap-1.5">
              <Database className="w-4 h-4" /> SCROLLBACK PHYSICAL VAULT ARCHIVE
            </span>
            <span className="text-editorial-dim">
              {totalPhysicalStacks} STORAGE TOWERS (10,000 REELS / TOWER)
            </span>
          </div>

          {/* Isometric Perspective Stacked Towers */}
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3 py-6 min-h-[220px] items-end">
            {Array.from({ length: Math.min(24, totalPhysicalStacks) }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: `${Math.min(180, 40 + (idx % 5) * 35)}px`, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.03 }}
                className="w-full bg-gradient-to-t from-surface-100 via-surface-200 to-accent-coral/40 border border-editorial-border hover:border-accent-coral flex flex-col justify-between p-1.5 rounded-sm relative group cursor-pointer"
              >
                <span className="text-[8px] font-mono text-accent-coral font-bold">#{idx + 1}</span>
                <span className="text-[8px] font-mono text-editorial-dim opacity-0 group-hover:opacity-100 transition-opacity">
                  10k
                </span>
              </motion.div>
            ))}
          </div>

          <div className="pt-4 border-t border-editorial-border text-center text-xs font-mono text-editorial-muted">
            Each glowing tower contains 10,000 consumed short-form video cards. Total archive volume fills <span className="text-white font-bold">{Math.round(totalDaysLost * 1.8)} cubic meters</span>.
          </div>
        </div>

      </div>
    </div>
  );
};
