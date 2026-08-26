'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, RefreshCw, Sun, Moon, Sparkles, Wind, ZoomIn, ArrowLeft } from 'lucide-react';

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
  const [autoFlip, setAutoFlip] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<'year' | 'month' | 'day'>('year');
  const [selectedMonth, setSelectedMonth] = useState<string>('MAR');
  const [selectedDayNum, setSelectedDayNum] = useState<number>(18);

  const currentYearVal = yearList[activeYearIdx] || currentYear;
  const daysInYearLost = Math.round(totalDaysLost / yearList.length);

  useEffect(() => {
    if (!autoFlip || zoomLevel !== 'year') return;
    const interval = setInterval(() => {
      setActiveYearIdx((prev) => (prev + 1) % yearList.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [autoFlip, yearList.length, zoomLevel]);

  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const seasons = [
    { name: 'Spring', color: 'text-emerald-400', bg: 'border-emerald-500/30' },
    { name: 'Summer', color: 'text-amber-400', bg: 'border-amber-500/30' },
    { name: 'Autumn', color: 'text-orange-400', bg: 'border-orange-500/30' },
    { name: 'Winter', color: 'text-cyan-400', bg: 'border-cyan-500/30' },
  ];

  return (
    <div className="py-20 border-b border-editorial-border bg-background relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <CalendarIcon className="w-4 h-4" /> Section 02 // Interactive Zoomable Calendar
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Click to Zoom From Years → Months → Single Days
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Click any month or day block to zoom down into actual lived time fragments.
          </p>
        </div>

        {/* Zoom Level Breadcrumb Indicator */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs">
          <button
            onClick={() => setZoomLevel('year')}
            className={`px-3 py-1 border font-bold uppercase cursor-pointer flex items-center gap-1 ${
              zoomLevel === 'year'
                ? 'bg-accent-coral text-background border-accent-coral'
                : 'bg-surface-100 border-editorial-border text-editorial-muted'
            }`}
          >
            Year View ({currentYearVal})
          </button>
          <span className="text-editorial-dim">→</span>
          <button
            onClick={() => setZoomLevel('month')}
            className={`px-3 py-1 border font-bold uppercase cursor-pointer ${
              zoomLevel === 'month'
                ? 'bg-accent-coral text-background border-accent-coral'
                : 'bg-surface-100 border-editorial-border text-editorial-muted'
            }`}
          >
            Month ({selectedMonth})
          </button>
          <span className="text-editorial-dim">→</span>
          <button
            onClick={() => setZoomLevel('day')}
            className={`px-3 py-1 border font-bold uppercase cursor-pointer ${
              zoomLevel === 'day'
                ? 'bg-accent-coral text-background border-accent-coral'
                : 'bg-surface-100 border-editorial-border text-editorial-muted'
            }`}
          >
            Day ({selectedDayNum})
          </button>
        </div>

        {/* Interactive Zoomable Card Target */}
        <div className="max-w-md mx-auto relative perspective-1000">
          <AnimatePresence mode="wait">
            
            {/* LEVEL 1: YEAR VIEW */}
            {zoomLevel === 'year' && (
              <motion.div
                key="yearView"
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="border-2 border-accent-coral/50 bg-surface-50 p-8 shadow-2xl space-y-6 relative overflow-hidden text-left"
              >
                <div className="flex justify-between border-b-2 border-editorial-border pb-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-accent-coral shadow-[0_0_8px_rgba(255,77,77,0.8)]" />
                    <div className="w-3 h-3 rounded-full bg-editorial-dim" />
                    <div className="w-3 h-3 rounded-full bg-editorial-dim" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase text-accent-coral tracking-widest">
                    YEAR VIEW // CLICK MONTH
                  </span>
                </div>

                <div className="space-y-1 text-center">
                  <p className="text-6xl font-black font-mono text-white tracking-tight">
                    {currentYearVal}
                  </p>
                  <p className="text-xs font-mono text-accent-coral uppercase font-bold">
                    ~{daysInYearLost} days lost in {currentYearVal}
                  </p>
                </div>

                {/* Clickable Month Blocks */}
                <div className="grid grid-cols-4 gap-2 pt-2">
                  {months.map((m, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedMonth(m);
                        setZoomLevel('month');
                      }}
                      className="p-2.5 border border-editorial-border bg-background hover:border-accent-coral text-[10px] font-mono text-editorial-cream hover:text-white flex flex-col items-center gap-1 transition-colors cursor-pointer group"
                    >
                      <span className="font-bold group-hover:text-accent-coral">{m}</span>
                      <div className="w-full h-1 bg-accent-coral/50 rounded-full" />
                    </button>
                  ))}
                </div>

                <div className="pt-2 text-[10px] font-mono text-editorial-dim text-center flex items-center justify-center gap-1">
                  <ZoomIn className="w-3.5 h-3.5 text-accent-coral" />
                  <span>Click any month block above to zoom inside</span>
                </div>
              </motion.div>
            )}

            {/* LEVEL 2: MONTH VIEW */}
            {zoomLevel === 'month' && (
              <motion.div
                key="monthView"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="border-2 border-accent-coral bg-surface-50 p-8 shadow-2xl space-y-6 text-left"
              >
                <div className="flex items-center justify-between border-b border-editorial-border pb-3">
                  <button
                    onClick={() => setZoomLevel('year')}
                    className="text-xs font-mono text-editorial-muted hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Year
                  </button>
                  <span className="text-xs font-mono font-bold text-accent-coral uppercase">
                    MONTH VIEW: {selectedMonth} {currentYearVal}
                  </span>
                </div>

                <div className="space-y-1 text-center">
                  <h4 className="text-4xl font-black font-mono text-white">
                    {selectedMonth} {currentYearVal}
                  </h4>
                  <p className="text-xs font-mono text-accent-coral">
                    ~{Math.round(daysInYearLost / 12)} days lost in this month
                  </p>
                </div>

                {/* 31 Days Grid */}
                <div className="grid grid-cols-7 gap-1.5 text-center font-mono">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
                    const isHighScrollDay = d % 3 === 0;
                    return (
                      <button
                        key={d}
                        onClick={() => {
                          setSelectedDayNum(d);
                          setZoomLevel('day');
                        }}
                        className={`p-2 border text-[11px] font-bold transition-all cursor-pointer ${
                          isHighScrollDay
                            ? 'bg-accent-coral/20 border-accent-coral text-accent-coral hover:bg-accent-coral hover:text-background'
                            : 'bg-background border-editorial-border text-editorial-dim hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>

                <div className="text-[10px] font-mono text-editorial-dim text-center">
                  Click any day square to zoom into a single lived 24-hour day
                </div>
              </motion.div>
            )}

            {/* LEVEL 3: DAY VIEW */}
            {zoomLevel === 'day' && (
              <motion.div
                key="dayView"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="border-2 border-accent-coral bg-surface-100 p-8 shadow-2xl space-y-6 text-left"
              >
                <div className="flex items-center justify-between border-b border-editorial-border pb-3">
                  <button
                    onClick={() => setZoomLevel('month')}
                    className="text-xs font-mono text-editorial-muted hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Month
                  </button>
                  <span className="text-xs font-mono font-bold text-accent-coral uppercase">
                    SINGLE DAY ZOOM
                  </span>
                </div>

                <div className="space-y-2 text-center">
                  <h4 className="text-3xl font-black font-mono text-white">
                    {selectedMonth} {selectedDayNum}, {currentYearVal}
                  </h4>
                  <p className="text-xs font-mono text-accent-coral font-bold">
                    Estimated Screen Time on this Day: ~2.5 Hours (~600 Reels)
                  </p>
                </div>

                <div className="p-4 bg-background border border-editorial-border space-y-2 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-editorial-dim">Morning (8 AM - 12 PM):</span>
                    <span className="text-white font-bold">25 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-editorial-dim">Afternoon (12 PM - 6 PM):</span>
                    <span className="text-white font-bold">45 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-editorial-dim">Night Peak (9 PM - 1 AM):</span>
                    <span className="text-accent-coral font-bold">80 mins (Peak)</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-editorial-dim text-center">
                  This was one actual 24-hour day of your life.
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Controls */}
          {zoomLevel === 'year' && (
            <div className="pt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setActiveYearIdx((prev) => (prev + 1) % yearList.length)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-100 border border-editorial-border hover:border-accent-coral text-white font-mono text-xs font-bold uppercase transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-accent-coral" />
                <span>Flip Next Calendar Leaf</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
