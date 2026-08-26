'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, AlertCircle, GitBranch, ArrowRight } from 'lucide-react';

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
  const [activeBranch, setActiveBranch] = useState<'all' | 'scrolling' | 'mastery'>('all');

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
            <GitBranch className="w-4 h-4" /> Section 06 // The Branching Timeline Split
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Where the Timeline Branch Split
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            At every moment, your time splits into two paths: the automated scroll loop or the alternate life built with those hours.
          </p>
        </div>

        {/* Branch Filter Selector */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveBranch('all')}
            className={`px-4 py-2 border font-bold uppercase cursor-pointer ${
              activeBranch === 'all'
                ? 'bg-accent-coral text-background border-accent-coral'
                : 'bg-surface-100 border-editorial-border text-editorial-muted'
            }`}
          >
            Show Both Timelines
          </button>
          <button
            onClick={() => setActiveBranch('scrolling')}
            className={`px-4 py-2 border font-bold uppercase cursor-pointer ${
              activeBranch === 'scrolling'
                ? 'bg-background border-editorial-border text-white'
                : 'bg-surface-100 border-editorial-border text-editorial-muted'
            }`}
          >
            Path A: Scroll Loop
          </button>
          <button
            onClick={() => setActiveBranch('mastery')}
            className={`px-4 py-2 border font-bold uppercase cursor-pointer ${
              activeBranch === 'mastery'
                ? 'bg-accent-emerald text-background border-accent-emerald font-bold'
                : 'bg-surface-100 border-editorial-border text-editorial-muted'
            }`}
          >
            Path B: Mastered Life
          </button>
        </div>

        {/* Side-by-Side Dual Path Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT PATH: REALITY SCROLLING */}
          {(activeBranch === 'all' || activeBranch === 'scrolling') && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
          )}

          {/* RIGHT PATH: ALTERNATE MASTERY */}
          {(activeBranch === 'all' || activeBranch === 'mastery') && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="border-2 border-accent-coral/60 bg-surface-100 p-6 sm:p-8 space-y-6 text-left"
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
          )}

        </div>

      </div>
    </div>
  );
};
