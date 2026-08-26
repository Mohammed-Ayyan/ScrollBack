'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Counter } from '@/components/ui/Counter';
import { formatTimeSpan } from '@/lib/calculations';
import { Clock, Hourglass, Calendar } from 'lucide-react';

interface TimeLostCardProps {
  totalHoursLost: number;
  wakingDaysLost: number;
  full24hDaysLost: number;
}

export const TimeLostCard: React.FC<TimeLostCardProps> = ({
  totalHoursLost,
  wakingDaysLost,
  full24hDaysLost,
}) => {
  const { years, months, days, hours } = formatTimeSpan(totalHoursLost);

  return (
    <GlassCard glow="purple" className="text-center p-8 sm:p-12 relative overflow-hidden space-y-6">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-rose via-brand-purple to-brand-cyan" />

      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-rose/10 border border-brand-rose/20 text-xs font-semibold text-brand-rose">
        <Hourglass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
        <span>Lifetime Screen Time Breakdown</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
        You spent approximately
      </h2>

      {/* Main Big Time Display */}
      <div className="py-4">
        <div className="flex flex-wrap items-baseline justify-center gap-3 sm:gap-6 text-brand-rose">
          {years > 0 && (
            <div className="flex items-baseline gap-1.5">
              <Counter value={years} className="text-5xl sm:text-7xl font-black tracking-tight" />
              <span className="text-xl sm:text-2xl font-bold text-zinc-300">years</span>
            </div>
          )}
          <div className="flex items-baseline gap-1.5">
            <Counter value={months} className="text-5xl sm:text-7xl font-black tracking-tight text-white" />
            <span className="text-xl sm:text-2xl font-bold text-zinc-300">months</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <Counter value={days} className="text-5xl sm:text-7xl font-black tracking-tight text-brand-purple" />
            <span className="text-xl sm:text-2xl font-bold text-zinc-300">days</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <Counter value={hours} className="text-4xl sm:text-6xl font-black tracking-tight text-brand-cyan" />
            <span className="text-lg sm:text-xl font-bold text-zinc-300">hours</span>
          </div>
        </div>
      </div>

      <p className="text-lg font-medium text-zinc-300 max-w-xl mx-auto">
        watching short-form vertical videos on your phone.
      </p>

      {/* Waking Days vs 24h Days Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10 max-w-2xl mx-auto">
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
          <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
            Equivalent 24-Hour Days Lost
          </p>
          <p className="text-2xl font-bold text-white">
            <Counter value={full24hDaysLost} decimals={1} /> <span className="text-sm font-normal text-zinc-400">full days</span>
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
          <p className="text-xs text-zinc-400 flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-amber" />
            Equivalent Waking Days Lost (16h/day)
          </p>
          <p className="text-2xl font-bold text-brand-amber">
            <Counter value={wakingDaysLost} decimals={1} /> <span className="text-sm font-normal text-zinc-400">active days</span>
          </p>
        </div>
      </div>
    </GlassCard>
  );
};
