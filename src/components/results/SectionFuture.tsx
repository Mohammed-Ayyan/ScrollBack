'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { Flame, ArrowRight } from 'lucide-react';

interface SectionFutureProps {
  dailyMinutesTotal: number;
}

export const SectionFuture: React.FC<SectionFutureProps> = ({ dailyMinutesTotal }) => {
  const [reductionMinutes, setReductionMinutes] = useState(30);

  const minsPerYear = reductionMinutes * 365;
  const hoursPerYear = Math.round(minsPerYear / 60);

  const statsBreakdown = [
    { period: '1 Month', hours: Math.round((reductionMinutes * 30) / 60), desc: 'Read 3 full non-fiction books' },
    { period: '6 Months', hours: Math.round((reductionMinutes * 180) / 60), desc: 'Build 1 full MVP software project' },
    { period: '1 Year', hours: hoursPerYear, desc: 'Learn conversational Spanish or Python' },
    { period: '5 Years', hours: hoursPerYear * 5, desc: 'Master a professional career skill' },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-emerald flex items-center justify-center gap-1.5">
            <Flame className="w-4 h-4" /> Section 06 // The Future Chapter
          </span>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight">
            Your next chapter starts here.
          </h2>
          <p className="text-sm sm:text-base text-editorial-muted max-w-xl mx-auto leading-relaxed">
            Reclaiming your focus doesn&apos;t require deleting social media. Small daily adjustments yield massive cumulative freedom.
          </p>
        </div>

        {/* Dynamic Compounding Habit Slider Module */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="border border-editorial-border bg-surface-50 p-8 sm:p-12 space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-editorial-border pb-6">
            <div>
              <p className="text-xs font-mono text-editorial-dim uppercase">Habit Reduction Scenario</p>
              <h3 className="text-2xl font-bold text-white">If you reduce scrolling by:</h3>
            </div>
            <div className="px-4 py-2 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald font-mono font-black text-2xl">
              {reductionMinutes} mins / day
            </div>
          </div>

          <div className="space-y-3">
            <input
              type="range"
              min="10"
              max={Math.max(30, Math.min(180, dailyMinutesTotal))}
              step="5"
              value={reductionMinutes}
              onChange={(e) => setReductionMinutes(Number(e.target.value))}
              className="w-full h-3 bg-surface-200 rounded-none appearance-none cursor-pointer accent-accent-emerald"
            />
            <div className="flex justify-between text-xs font-mono text-editorial-dim">
              <span>10m / day</span>
              <span>30m / day</span>
              <span>60m / day</span>
              <span>90m+ / day</span>
            </div>
          </div>

          {/* Time Gained Compounding Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {statsBreakdown.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{ scale: [0.98, 1] }}
                transition={{ duration: 0.2 }}
                className="p-5 border border-editorial-border bg-background space-y-2"
              >
                <p className="text-xs font-mono text-accent-emerald font-bold uppercase">{item.period}</p>
                <p className="text-3xl font-mono font-black text-white">
                  +<Counter value={item.hours} duration={800} /> <span className="text-xs text-editorial-dim">hrs</span>
                </p>
                <p className="text-xs text-editorial-muted leading-snug pt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <p className="text-sm font-bold text-white">
                That&apos;s <span className="text-accent-emerald font-mono font-black">{hoursPerYear} free hours</span> regained every single year.
              </p>
              <p className="text-xs text-editorial-muted">Set a screen time limit on your phone today.</p>
            </div>

            <Link
              href="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-emerald text-background font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] group"
            >
              <span>Start Reclaiming Your Time</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
