'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { getEventsForRange } from '@/lib/historicalEvents';
import { History, Sparkles } from 'lucide-react';

interface HistoricalTimelineProps {
  startYear: number;
}

export const HistoricalTimeline: React.FC<HistoricalTimelineProps> = ({ startYear }) => {
  const currentYear = new Date().getFullYear();
  const events = getEventsForRange(startYear, currentYear);

  return (
    <div className="space-y-8 pt-6 border-t border-white/10">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-semibold text-brand-cyan">
          <History className="w-3.5 h-3.5" />
          <span>Historical Context ({startYear} – {currentYear})</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          While you were scrolling...
        </h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Pivotal global events, technological breakthroughs, and scientific leaps that happened during your watching years.
        </p>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
        {events.map((event, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node icon dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-8 h-8 rounded-full bg-zinc-900 border-2 border-brand-cyan/60 flex items-center justify-center text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
              <span>{event.icon}</span>
            </div>

            <GlassCard hoverEffect={true} className="space-y-2 p-5 bg-zinc-900/60 border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-md bg-brand-cyan/20 text-brand-cyan font-mono font-bold text-xs">
                  {event.year}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {event.title}
                </h4>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {event.description}
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};
