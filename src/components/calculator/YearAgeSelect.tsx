'use client';

import React from 'react';
import { Calendar, User } from 'lucide-react';

interface YearAgeSelectProps {
  startYear: number;
  age?: number;
  country?: string;
  onChangeStartYear: (val: number) => void;
  onChangeAge: (val?: number) => void;
  onChangeCountry: (val?: string) => void;
}

export const YearAgeSelect: React.FC<YearAgeSelectProps> = ({
  startYear,
  age,
  country,
  onChangeStartYear,
  onChangeAge,
  onChangeCountry,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2009 }, (_, i) => 2010 + i).reverse();

  return (
    <div className="space-y-6 pt-4 border-t border-white/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Start Year Dropdown */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
            <Calendar className="w-4 h-4 text-brand-cyan" />
            Started Watching Since (Year)
          </label>
          <select
            value={startYear}
            onChange={(e) => onChangeStartYear(Number(e.target.value))}
            className="w-full bg-zinc-900/90 border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-zinc-900 text-white">
                {y} {y === 2020 ? '(COVID Era)' : y === 2018 ? '(TikTok Boom)' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Age Selector (Optional) */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
            <User className="w-4 h-4 text-brand-amber" />
            Current Age <span className="text-zinc-500 font-normal text-xs">(Optional)</span>
          </label>
          <input
            type="number"
            min="10"
            max="99"
            placeholder="e.g. 24"
            value={age || ''}
            onChange={(e) => onChangeAge(e.target.value ? Number(e.target.value) : undefined)}
            className="w-full bg-zinc-900/90 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-amber transition-colors"
          />
        </div>
      </div>
    </div>
  );
};
