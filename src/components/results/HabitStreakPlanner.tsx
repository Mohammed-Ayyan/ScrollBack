'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Counter } from '@/components/ui/Counter';
import { Flame, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface HabitStreakPlannerProps {
  dailyMinutesTotal: number;
}

export const HabitStreakPlanner: React.FC<HabitStreakPlannerProps> = ({ dailyMinutesTotal }) => {
  const [reduceMinutes, setReduceMinutes] = useState(30);

  const minsReducedPerYear = reduceMinutes * 365;
  const hoursRegainedYearly = Math.round(minsReducedPerYear / 60);
  const wakingDaysRegainedYearly = (hoursRegainedYearly / 16).toFixed(1);
  const booksRegainedYearly = Math.floor(hoursRegainedYearly / 4);

  return (
    <GlassCard glow="emerald" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center">
          <Flame className="w-5 h-5 text-brand-emerald animate-bounce" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Reclaim Your Time Challenge</h3>
          <p className="text-xs text-zinc-400">See what happens if you reduce your daily scroll by just a few minutes</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <label className="font-semibold text-zinc-200">Daily Scroll Reduction</label>
          <span className="font-mono font-bold text-brand-emerald text-xl">{reduceMinutes} mins / day</span>
        </div>
        <input
          type="range"
          min="10"
          max={Math.max(30, Math.min(180, dailyMinutesTotal))}
          step="5"
          value={reduceMinutes}
          onChange={(e) => setReduceMinutes(Number(e.target.value))}
          className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-emerald"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5 space-y-1">
          <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Hours Regained / Year</p>
          <p className="text-3xl font-black text-brand-emerald">
            +<Counter value={hoursRegainedYearly} /> hrs
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5 space-y-1">
          <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Waking Days Regained</p>
          <p className="text-3xl font-black text-white">
            +<Counter value={Number(wakingDaysRegainedYearly)} decimals={1} /> days
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5 space-y-1">
          <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Extra Books Readable</p>
          <p className="text-3xl font-black text-brand-purple">
            +<Counter value={booksRegainedYearly} /> books
          </p>
        </div>
      </div>
    </GlassCard>
  );
};
