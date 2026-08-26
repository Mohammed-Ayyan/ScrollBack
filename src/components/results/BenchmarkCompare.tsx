'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Counter } from '@/components/ui/Counter';
import { Users, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

interface BenchmarkCompareProps {
  dailyMinutesTotal: number;
  percentileRank: number;
}

export const BenchmarkCompare: React.FC<BenchmarkCompareProps> = ({
  dailyMinutesTotal,
  percentileRank,
}) => {
  const globalAvgMinutes = 150; // 2.5 hours
  const userHours = (dailyMinutesTotal / 60).toFixed(1);
  const isHigherThanAverage = dailyMinutesTotal > globalAvgMinutes;

  return (
    <GlassCard glow={isHigherThanAverage ? 'rose' : 'emerald'} className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${isHigherThanAverage ? 'bg-brand-rose/10 text-brand-rose border border-brand-rose/20' : 'bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20'}`}>
            {isHigherThanAverage ? <AlertTriangle className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Your Scrolling vs Average User</h3>
            <p className="text-xs text-zinc-400">Global average social video screen time is 2.5 hours/day</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-zinc-400">Your percentile tier</p>
          <p className="text-2xl font-black text-white">
            Top <span className={isHigherThanAverage ? 'text-brand-rose' : 'text-brand-emerald'}>{percentileRank}%</span>
          </p>
        </div>
      </div>

      {/* Progress Comparison Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold text-zinc-300">
          <span>Your daily time: {userHours}h ({dailyMinutesTotal}m)</span>
          <span>Global Avg: 2.5h (150m)</span>
        </div>
        <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden flex">
          <div
            className={`h-full transition-all duration-1000 ${isHigherThanAverage ? 'bg-gradient-to-r from-brand-purple to-brand-rose' : 'bg-gradient-to-r from-teal-500 to-brand-emerald'}`}
            style={{ width: `${Math.min(100, Math.max(10, (dailyMinutesTotal / 360) * 100))}%` }}
          />
        </div>
      </div>
    </GlassCard>
  );
};
