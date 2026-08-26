'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, RefreshCw, Trash2 } from 'lucide-react';

interface DisappearingCalendarProps {
  startYear: number;
  totalDaysLost: number;
}

export const DisappearingCalendar: React.FC<DisappearingCalendarProps> = ({
  startYear,
  totalDaysLost,
}) => {
  const currentYear = new Date().getFullYear();
  const yearList = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  const [activeYearIdx, setActiveYearIdx] = useState(0);

  const currentYearVal = yearList[activeYearIdx] || currentYear;
  const daysInYearLost = Math.round(totalDaysLost / yearList.length);

  return (
    <div className="py-16 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <CalendarIcon className="w-4 h-4" /> Visual Experience // The Dissolving Calendar
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Lost Time in Calendar Form
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Watch calendar pages dissolve into short-video feed fragments year by year.
          </p>
        </div>

        {/* Calendar Page Card with Flip & Tear Effect */}
        <div className="max-w-md mx-auto relative perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentYearVal}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0, y: 40 }}
              transition={{ duration: 0.5 }}
              className="border-2 border-editorial-border bg-surface-50 p-8 shadow-2xl space-y-6 select-none"
            >
              {/* Calendar Top Binding Ring */}
              <div className="flex justify-between border-b-2 border-editorial-border pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-coral" />
                  <div className="w-3 h-3 rounded-full bg-editorial-dim" />
                  <div className="w-3 h-3 rounded-full bg-editorial-dim" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-editorial-dim">
                  ANNUAL LEAF
                </span>
              </div>

              {/* Big Year Header */}
              <div className="space-y-1">
                <p className="text-6xl font-black font-mono text-accent-coral tracking-tight">
                  {currentYearVal}
                </p>
                <p className="text-xs font-mono text-editorial-muted uppercase">
                  ~{daysInYearLost} days lost this year
                </p>
              </div>

              {/* Mini Calendar Month Blocks */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((m, i) => (
                  <div
                    key={i}
                    className="p-2 border border-editorial-border bg-background text-[10px] font-mono text-editorial-dim flex flex-col items-center gap-1"
                  >
                    <span>{m}</span>
                    <div className="w-full h-1 bg-accent-coral/40 rounded-full" />
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[10px] font-mono text-accent-coral flex items-center justify-center gap-1">
                <Trash2 className="w-3.5 h-3.5" />
                <span>Page {activeYearIdx + 1} of {yearList.length} dissolved</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Flip Control Button */}
          <div className="pt-6">
            <button
              onClick={() => setActiveYearIdx((prev) => (prev + 1) % yearList.length)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-100 border border-editorial-border hover:border-accent-coral text-white font-mono text-xs font-bold uppercase transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-accent-coral" />
              <span>Tear Next Calendar Page ({currentYearVal + 1 > currentYear ? startYear : currentYearVal + 1})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
