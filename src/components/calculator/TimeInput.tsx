'use client';

import React from 'react';
import { Clock } from 'lucide-react';

interface TimeInputProps {
  hours: number;
  minutes: number;
  onChangeHours: (val: number) => void;
  onChangeMinutes: (val: number) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({
  hours,
  minutes,
  onChangeHours,
  onChangeMinutes,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-rose/10 border border-brand-rose/20 flex items-center justify-center">
          <Clock className="w-5 h-5 text-brand-rose" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Daily Reels & Short Video Time</h3>
          <p className="text-xs text-zinc-400">Estimate your average daily watching duration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Hours Selector */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-zinc-200">Hours per day</label>
            <span className="font-mono font-bold text-brand-rose text-lg">{hours} hrs</span>
          </div>
          <input
            type="range"
            min="0"
            max="16"
            step="1"
            value={hours}
            onChange={(e) => onChangeHours(Number(e.target.value))}
            className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-rose"
          />
          <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
            <span>0h</span>
            <span>4h</span>
            <span>8h</span>
            <span>12h</span>
            <span>16h</span>
          </div>
        </div>

        {/* Minutes Selector */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <label className="font-semibold text-zinc-200">Minutes per day</label>
            <span className="font-mono font-bold text-brand-purple text-lg">{minutes} mins</span>
          </div>
          <input
            type="range"
            min="0"
            max="59"
            step="5"
            value={minutes}
            onChange={(e) => onChangeMinutes(Number(e.target.value))}
            className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-purple"
          />
          <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
            <span>0m</span>
            <span>15m</span>
            <span>30m</span>
            <span>45m</span>
            <span>59m</span>
          </div>
        </div>
      </div>
    </div>
  );
};
