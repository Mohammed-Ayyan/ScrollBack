'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { getEventsForRange } from '@/lib/historicalEvents';
import { HistoricalEvent } from '@/types';
import { History } from 'lucide-react';

interface SectionTimelineProps {
  startYear: number;
}

const TimelineItem: React.FC<{ event: HistoricalEvent; index: number }> = ({ event, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: '-100px 0px -100px 0px' });

  return (
    <div ref={ref} className="relative group">
      {/* Active Year Marker Node */}
      <motion.div
        animate={{
          scale: isInView ? 1.25 : 1,
          borderColor: isInView ? '#ff4d4d' : 'rgba(255, 255, 255, 0.2)',
          boxShadow: isInView ? '0 0 20px rgba(255, 77, 77, 0.6)' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="absolute -left-[33px] sm:-left-[57px] top-2 w-10 h-10 bg-background border-2 flex items-center justify-center text-sm z-20"
      >
        <span>{event.icon}</span>
      </motion.div>

      {/* Event Card Content Reveal */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0.45,
          x: isInView ? 0 : -10,
        }}
        transition={{ duration: 0.4 }}
        className={`border p-6 sm:p-8 space-y-3 transition-colors ${
          isInView
            ? 'bg-surface-100 border-accent-coral shadow-2xl'
            : 'bg-surface-50 border-editorial-border'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1 font-mono font-black text-sm transition-colors ${
              isInView ? 'bg-accent-coral text-background' : 'bg-surface-200 text-editorial-muted'
            }`}
          >
            {event.year}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
            {event.title}
          </h3>
        </div>
        <p className="text-sm text-editorial-muted leading-relaxed font-normal">
          {event.description}
        </p>
      </motion.div>
    </div>
  );
};

export const SectionTimeline: React.FC<SectionTimelineProps> = ({ startYear }) => {
  const currentYear = new Date().getFullYear();
  const events = getEventsForRange(startYear, currentYear);

  return (
    <section id="timeline" className="py-20 border-b border-editorial-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <History className="w-4 h-4" /> Section 04 // Historical Progression
          </span>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight">
            While you were scrolling...
          </h2>
          <p className="text-sm sm:text-base text-editorial-muted max-w-2xl mx-auto leading-relaxed">
            Major global events, technological breakthroughs, and scientific leaps that transpired from {startYear} to {currentYear} as your hours accumulated in the background.
          </p>
        </div>

        {/* Timeline Stream with Viewport Highlighting */}
        <div className="relative border-l-2 border-editorial-border ml-4 sm:ml-12 pl-6 sm:pl-12 space-y-12">
          {events.map((event, idx) => (
            <TimelineItem key={idx} event={event} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
