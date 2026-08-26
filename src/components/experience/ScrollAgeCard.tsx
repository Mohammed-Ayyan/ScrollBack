'use client';

import React from 'react';
import { Counter } from '@/components/ui/Counter';
import { User, Clock, AlertTriangle } from 'lucide-react';

interface ScrollAgeCardProps {
  age?: number;
  totalHoursLost: number;
}

export const ScrollAgeCard: React.FC<ScrollAgeCardProps> = ({ age = 24, totalHoursLost }) => {
  const scrollYearsLost = Number((totalHoursLost / (365.25 * 24)).toFixed(1));
  const effectiveScrollAge = Number((age + scrollYearsLost).toFixed(1));

  return (
    <div className="border border-editorial-border bg-background p-6 sm:p-8 space-y-6 text-left max-w-2xl mx-auto my-8">
      <div className="flex items-center justify-between border-b border-editorial-border pb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-accent-amber" />
          <span className="text-xs font-mono font-bold uppercase text-white">Attention Metric // Scroll Age</span>
        </div>
        <span className="text-[10px] font-mono text-editorial-dim">Comparative Metric</span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 border border-editorial-border bg-surface-50 space-y-1">
          <p className="text-xs font-mono text-editorial-dim uppercase flex items-center justify-center gap-1">
            <User className="w-3.5 h-3.5 text-editorial-muted" /> Real Biological Age
          </p>
          <p className="text-4xl font-mono font-black text-white">{age} <span className="text-xs font-sans text-editorial-dim">yrs</span></p>
        </div>

        <div className="p-4 border border-accent-amber/40 bg-surface-100 space-y-1">
          <p className="text-xs font-mono text-accent-amber uppercase font-bold flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5 text-accent-amber" /> Scroll Age
          </p>
          <p className="text-4xl font-mono font-black text-accent-amber">
            {scrollYearsLost} <span className="text-xs font-sans text-editorial-dim">scrolling yrs</span>
          </p>
        </div>
      </div>

      <p className="text-xs text-editorial-muted leading-relaxed">
        Meaning: Out of your <span className="text-white font-bold">{age} years</span> on Earth, you spent the equivalent of <span className="text-accent-amber font-mono font-bold">{scrollYearsLost} full 24-hour years</span> watching micro vertical video feeds.
      </p>
    </div>
  );
};
