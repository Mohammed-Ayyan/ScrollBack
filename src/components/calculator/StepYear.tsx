'use client';

import React from 'react';
import { Calendar } from 'lucide-react';

interface StepYearProps {
  startYear: number;
  onChangeStartYear: (val: number) => void;
}

export const StepYear: React.FC<StepYearProps> = ({
  startYear,
  onChangeStartYear,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2009 }, (_, i) => 2010 + i).reverse();

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
          STEP 02 / STARTING POINT
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          When did it start?
        </h2>
        <p className="text-sm text-editorial-muted">
          Select the year you began watching Instagram Reels or short-form video feeds regularly.
        </p>
      </div>

      {/* Selected Year Display */}
      <div className="p-6 border border-editorial-border bg-surface-50 flex items-center justify-between">
        <div>
          <p className="text-xs font-mono uppercase text-editorial-dim">Selected Start Year</p>
          <p className="text-4xl font-black font-mono text-accent-coral">{startYear}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-mono text-editorial-muted">
            Watching duration: <span className="text-white font-bold">{currentYear - startYear + 1} years</span>
          </p>
        </div>
      </div>

      {/* Large Year Grid Picker */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {years.map((y) => {
          const isSelected = startYear === y;
          return (
            <button
              key={y}
              type="button"
              onClick={() => onChangeStartYear(y)}
              className={`p-4 border text-center font-mono text-sm sm:text-base font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)] scale-105 z-10'
                  : 'bg-surface-50 border-editorial-border text-editorial-cream hover:border-editorial-border-bright hover:bg-surface-100'
              }`}
            >
              {y}
            </button>
          );
        })}
      </div>
    </div>
  );
};
