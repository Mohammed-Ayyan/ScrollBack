'use client';

import React from 'react';
import { GOAL_OPTIONS } from '@/lib/goalMilestones';
import { GoalCategory } from '@/types';
import { Check, Target } from 'lucide-react';
import { clsx } from 'clsx';

interface StepDetailsProps {
  age?: number;
  country?: string;
  selectedGoals: GoalCategory[];
  onChangeAge: (val?: number) => void;
  onChangeCountry: (val?: string) => void;
  onToggleGoal: (goalId: GoalCategory) => void;
}

export const StepDetails: React.FC<StepDetailsProps> = ({
  age,
  country,
  selectedGoals,
  onChangeAge,
  onChangeCountry,
  onToggleGoal,
}) => {
  return (
    <div className="space-y-8 text-left">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
          STEP 03 / PERSONAL CONTEXT
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tell us a little more
        </h2>
        <p className="text-sm text-editorial-muted">
          Optional details to tailor your historical timeline and alternate reality milestones.
        </p>
      </div>

      {/* Optional Demographic Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-editorial-muted">
            Current Age <span className="text-editorial-dim font-normal">(Optional)</span>
          </label>
          <input
            type="number"
            min="10"
            max="99"
            placeholder="e.g. 24"
            value={age || ''}
            onChange={(e) => onChangeAge(e.target.value ? Number(e.target.value) : undefined)}
            className="w-full bg-surface-100 border border-editorial-border px-4 py-3 text-white font-mono placeholder-editorial-dim focus:outline-none focus:border-accent-coral transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono font-bold uppercase text-editorial-muted">
            Country <span className="text-editorial-dim font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. United States"
            value={country || ''}
            onChange={(e) => onChangeCountry(e.target.value || undefined)}
            className="w-full bg-surface-100 border border-editorial-border px-4 py-3 text-white font-mono placeholder-editorial-dim focus:outline-none focus:border-accent-coral transition-colors"
          />
        </div>
      </div>

      {/* Primary Goal Choices */}
      <div className="space-y-4 pt-4 border-t border-editorial-border">
        <label className="text-xs font-mono font-bold uppercase text-editorial-muted flex items-center gap-2">
          <Target className="w-4 h-4 text-accent-coral" />
          Select goals for your alternate timeline:
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GOAL_OPTIONS.map((item) => {
            const isSelected = selectedGoals.includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onToggleGoal(item.id)}
                className={clsx(
                  'p-4 border text-left transition-all flex items-start justify-between cursor-pointer',
                  isSelected
                    ? 'bg-surface-100 border-accent-coral text-white'
                    : 'bg-surface-50 border-editorial-border text-editorial-muted hover:border-editorial-border-bright hover:bg-surface-100'
                )}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-bold text-sm text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-editorial-muted leading-tight">{item.subtitle}</p>
                </div>

                <div
                  className={clsx(
                    'w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 border',
                    isSelected
                      ? 'bg-accent-coral border-accent-coral text-background'
                      : 'border-editorial-border bg-surface-200'
                  )}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
