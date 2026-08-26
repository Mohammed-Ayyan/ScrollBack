'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { GoalCategory } from '@/types';
import { getAlternateRealityRoadmap } from '@/lib/goalMilestones';
import { Sparkles, Trophy, ArrowRight } from 'lucide-react';

interface AlternateRealityProps {
  selectedGoals: GoalCategory[];
  totalHoursLost: number;
}

export const AlternateReality: React.FC<AlternateRealityProps> = ({
  selectedGoals,
  totalHoursLost,
}) => {
  const milestones = getAlternateRealityRoadmap(selectedGoals);

  return (
    <div className="space-y-8 pt-8 border-t border-white/10">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Alternate Timeline Simulation</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Imagine another version of you
        </h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          If you redirected those daily scroll hours into your core goals ({selectedGoals.length} selected), here is your realistic timeline:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((m, idx) => (
          <GlassCard key={idx} glow={idx === 3 ? 'emerald' : 'purple'} className="space-y-4 relative flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs font-bold">
                  {m.period}
                </span>
                <span className="text-xs font-semibold text-zinc-400 capitalize">{m.goalId}</span>
              </div>

              <h4 className="text-base font-bold text-white leading-snug">{m.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">{m.description}</p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-1">
              <span className="text-[10px] font-bold text-brand-emerald uppercase tracking-wider flex items-center gap-1">
                <Trophy className="w-3 h-3 text-brand-emerald" /> Milestone Reached
              </span>
              <p className="text-xs font-semibold text-zinc-200">{m.achievement}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
