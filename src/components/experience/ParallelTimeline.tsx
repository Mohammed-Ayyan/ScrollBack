'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, AlertCircle, GitBranch, ArrowLeftRight } from 'lucide-react';

interface ParallelTimelineProps {
  startYear: number;
  totalDaysLost: number;
  totalHoursLost: number;
}

export const ParallelTimeline: React.FC<ParallelTimelineProps> = ({
  startYear,
  totalDaysLost,
  totalHoursLost,
}) => {
  const [splitPos, setSplitPos] = useState<number>(50); // percentage 0 to 100

  const comparisonMilestones = [
    {
      period: 'Year 1',
      reality: `${Math.round(totalDaysLost * 0.2)} Days Watching Short Videos`,
      possibility: 'Learned Python & Built 5 Interactive Web Apps',
    },
    {
      period: 'Year 2',
      reality: `${Math.round(totalDaysLost * 0.4)} Days In Infinite Scroll Feed`,
      possibility: 'Reached Conversational Fluency in a New Language',
    },
    {
      period: 'Year 3+',
      reality: `${Math.round(totalDaysLost)} Days Cumulative Passive Time`,
      possibility: 'Read 120+ Books & Completed 500 Fitness Workouts',
    },
  ];

  return (
    <div id="future" className="py-20 border-b border-editorial-border bg-surface-50 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <GitBranch className="w-4 h-4" /> Section 06 // Drag the Parallel Split Handle
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Drag the Split Handle to Uncover Both Lives
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Drag the handle horizontally to explore Path A (The Scroll Loop) vs Path B (The Mastered Life).
          </p>
        </div>

        {/* Draggable Divider Handle Controls */}
        <div className="space-y-2 max-w-xl mx-auto">
          <div className="flex justify-between text-xs font-mono text-editorial-muted font-bold">
            <span className="text-white">← Path A: Scroll Loop ({100 - splitPos}%)</span>
            <span className="text-accent-coral">Path B: Mastered Life ({splitPos}%) →</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={splitPos}
            onChange={(e) => setSplitPos(Number(e.target.value))}
            className="w-full h-3 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)]"
          />
        </div>

        {/* Side-by-Side Dual Path Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT PATH: REALITY SCROLLING */}
          <motion.div
            style={{ opacity: Math.max(0.2, (100 - splitPos) / 100) }}
            className="border border-editorial-border bg-background p-6 sm:p-8 space-y-6 text-left"
          >
            <div className="flex items-center justify-between border-b border-editorial-border pb-4">
              <span className="text-xs font-mono font-bold text-editorial-muted uppercase flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-editorial-dim" /> PATH A // THE SCROLL LOOP
              </span>
              <span className="text-xs font-mono text-editorial-dim">{totalDaysLost.toFixed(0)} Days Consumed</span>
            </div>

            <div className="space-y-4">
              {comparisonMilestones.map((item, idx) => (
                <div key={idx} className="p-4 border border-editorial-border bg-surface-50 space-y-1">
                  <span className="text-[10px] font-mono text-editorial-dim uppercase">{item.period}</span>
                  <p className="text-sm font-mono font-bold text-editorial-cream">{item.reality}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PATH: ALTERNATE MASTERY */}
          <motion.div
            style={{ opacity: Math.max(0.2, splitPos / 100) }}
            className="border-2 border-accent-coral/60 bg-surface-100 p-6 sm:p-8 space-y-6 text-left shadow-[0_0_30px_rgba(255,77,77,0.2)]"
          >
            <div className="flex items-center justify-between border-b border-editorial-border pb-4">
              <span className="text-xs font-mono font-bold text-accent-coral uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent-coral" /> PATH B // THE MASTERED LIFE
              </span>
              <span className="text-xs font-mono text-accent-coral font-bold">{totalHoursLost} Hours Invested</span>
            </div>

            <div className="space-y-4">
              {comparisonMilestones.map((item, idx) => (
                <div key={idx} className="p-4 border border-accent-coral/40 bg-background space-y-1">
                  <span className="text-[10px] font-mono text-accent-coral uppercase font-bold">{item.period}</span>
                  <p className="text-sm font-mono font-bold text-white">{item.possibility}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};
