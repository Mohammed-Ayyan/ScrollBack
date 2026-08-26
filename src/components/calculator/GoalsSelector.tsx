'use client';

import React from 'react';
import { GOAL_OPTIONS } from '@/lib/goalMilestones';
import { GoalCategory } from '@/types';
import { Target, Check } from 'lucide-react';
import { clsx } from 'clsx';

interface GoalsSelectorProps {
  selectedGoals: GoalCategory[];
  onToggleGoal: (goalId: GoalCategory) => void;
}

export const GoalsSelector: React.FC<GoalsSelectorProps> = ({
  selectedGoals,
  onToggleGoal,
}) => {
  return (
    <div className="space-y-6 pt-4 border-t border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
          <Target className="w-5 h-5 text-brand-cyan" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">What would you rather achieve?</h3>
          <p className="text-xs text-zinc-400">Multi-select your primary interests for your alternate reality timeline</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {GOAL_OPTIONS.map((item) => {
          const isSelected = selectedGoals.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onToggleGoal(item.id)}
              className={clsx(
                'relative p-4 rounded-xl border text-left transition-all flex items-start justify-between group cursor-pointer',
                isSelected
                  ? 'bg-zinc-800/80 border-brand-rose/60 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
                  : 'bg-zinc-900/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
              )}
            >
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-bold text-white text-sm">{item.title}</span>
                </div>
                <p className="text-xs text-zinc-400 leading-snug">{item.subtitle}</p>
              </div>

              <div
                className={clsx(
                  'w-5 h-5 rounded-md flex items-center justify-center transition-colors flex-shrink-0 mt-0.5',
                  isSelected
                    ? 'bg-brand-rose text-white'
                    : 'border border-white/20 bg-zinc-800 group-hover:border-white/40'
                )}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
