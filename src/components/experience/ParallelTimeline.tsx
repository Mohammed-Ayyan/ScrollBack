'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

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
  const currentYear = new Date().getFullYear();

  const comparisonMilestones = [
    {
      period: 'Year 1',
      reality: `${Math.round(totalDaysLost * 0.2)} Days Watching Micro Videos`,
      possibility: 'Could have learned core Python & built 5 interactive web apps',
    },
    {
      period: 'Year 2',
      reality: `${Math.round(totalDaysLost * 0.4)} Days Absorbing Short Video Feed`,
      possibility: 'Could have reached conversational fluency in a new language',
    },
    {
      period: 'Year 3+',
      reality: `${Math.round(totalDaysLost)} Days Cumulative Passive Consumption`,
      possibility: 'Could have completed 1,000+ workouts or launched an independent product',
    },
  ];

  return (
    <div className="py-20 border-b border-editorial-border bg-surface-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4" /> Visual Experience // Comparative Paths
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Parallel Life Timeline
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Side-by-side comparison of your actual screen time path vs what could have been explored with those exact hours.
          </p>
        </div>

        {/* Side-by-Side Dual Path Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT PATH: REALITY */}
          <div className="border border-editorial-border bg-background p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-editorial-border pb-4">
              <span className="text-xs font-mono font-bold text-editorial-muted uppercase flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-editorial-dim" /> PATH A // REALITY
              </span>
              <span className="text-xs font-mono text-editorial-dim">{totalDaysLost.toFixed(0)} Days Lost</span>
            </div>

            <div className="space-y-4">
              {comparisonMilestones.map((item, idx) => (
                <div key={idx} className="p-4 border border-editorial-border bg-surface-50 space-y-1 text-left">
                  <span className="text-[10px] font-mono text-editorial-dim uppercase">{item.period}</span>
                  <p className="text-sm font-mono font-bold text-editorial-cream">{item.reality}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PATH: POSSIBLE TIMELINE */}
          <div className="border border-accent-coral/60 bg-surface-100 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-editorial-border pb-4">
              <span className="text-xs font-mono font-bold text-accent-coral uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent-coral" /> PATH B // POSSIBLE TIMELINE
              </span>
              <span className="text-xs font-mono text-accent-coral font-bold">{totalHoursLost} Hours Invested</span>
            </div>

            <div className="space-y-4">
              {comparisonMilestones.map((item, idx) => (
                <div key={idx} className="p-4 border border-accent-coral/40 bg-background space-y-1 text-left">
                  <span className="text-[10px] font-mono text-accent-coral uppercase font-bold">{item.period}</span>
                  <p className="text-sm font-mono font-bold text-white">{item.possibility}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
