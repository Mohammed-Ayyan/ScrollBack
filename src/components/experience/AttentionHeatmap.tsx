'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock } from 'lucide-react';

export const AttentionHeatmap: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const timeslots = ['Morning (7am)', 'Afternoon (1pm)', 'Evening (7pm)', 'Late Night (11pm)'];

  // Heatmap intensity grid matrix
  const heatData = [
    [20, 30, 60, 95], // Mon
    [25, 35, 65, 90], // Tue
    [20, 40, 70, 95], // Wed
    [30, 45, 75, 90], // Thu
    [35, 50, 85, 100], // Fri
    [50, 65, 90, 100], // Sat
    [40, 60, 85, 95], // Sun
  ];

  return (
    <div className="py-16 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Clock className="w-4 h-4" /> Visual Experience // Attention Heatmap
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            When Your Attention Disappears
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Estimated weekly peak watching windows, highlighting late-night dopamine loops.
          </p>
        </div>

        {/* Custom Editorial Weekly Heatmap */}
        <div className="border border-editorial-border bg-surface-50 p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono text-editorial-dim border-b border-editorial-border pb-4">
            <span>DAY</span>
            {timeslots.map((t, idx) => (
              <span key={idx}>{t}</span>
            ))}
          </div>

          <div className="space-y-3">
            {days.map((day, dIdx) => (
              <div key={dIdx} className="grid grid-cols-5 gap-2 items-center text-xs font-mono">
                <span className="text-white font-bold">{day}</span>
                {heatData[dIdx].map((val, tIdx) => {
                  const opacity = val / 100;
                  const isPeak = val >= 90;
                  return (
                    <motion.div
                      key={tIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: dIdx * 0.05 + tIdx * 0.02 }}
                      className={`h-10 border flex items-center justify-center text-[10px] font-bold transition-all ${
                        isPeak
                          ? 'border-accent-coral bg-accent-coral/30 text-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.3)]'
                          : 'border-editorial-border bg-surface-100 text-editorial-muted'
                      }`}
                    >
                      {val}% Peak
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-xs font-mono text-editorial-muted">
            <span className="flex items-center gap-1.5 text-accent-coral font-bold">
              <Flame className="w-3.5 h-3.5" /> Late Night (11pm – 2am) represents ~42% of total screen time
            </span>
            <span>Client-side estimated habit pattern</span>
          </div>
        </div>

      </div>
    </div>
  );
};
