'use client';

import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { getEventsForRange } from '@/lib/historicalEvents';
import { HistoricalEvent } from '@/types';
import { History, Globe, Sparkles, X, ChevronRight, Clock } from 'lucide-react';

interface SectionTimelineProps {
  startYear: number;
}

const TimelineItem: React.FC<{
  event: HistoricalEvent;
  index: number;
  onSelectEvent: (event: HistoricalEvent) => void;
}> = ({ event, index, onSelectEvent }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: '-80px 0px -80px 0px' });

  return (
    <div ref={ref} className="relative group select-none">
      {/* Active Year Node */}
      <motion.div
        animate={{
          scale: isInView ? 1.25 : 1,
          borderColor: isInView ? '#ff4d4d' : 'rgba(255, 255, 255, 0.2)',
          boxShadow: isInView ? '0 0 20px rgba(255, 77, 77, 0.6)' : 'none',
        }}
        transition={{ duration: 0.3 }}
        onClick={() => onSelectEvent(event)}
        className="absolute -left-[33px] sm:-left-[57px] top-2 w-10 h-10 bg-background border-2 flex items-center justify-center text-sm z-20 cursor-pointer hover:scale-110 transition-transform"
      >
        <span>{event.icon}</span>
      </motion.div>

      {/* Event Card */}
      <motion.div
        animate={{
          opacity: isInView ? 1 : 0.4,
          x: isInView ? 0 : -10,
        }}
        transition={{ duration: 0.4 }}
        onClick={() => onSelectEvent(event)}
        className={`border p-6 sm:p-8 space-y-3 transition-all cursor-pointer group hover:border-accent-coral ${
          isInView
            ? 'bg-surface-100 border-accent-coral shadow-2xl'
            : 'bg-surface-50 border-editorial-border'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 font-mono font-black text-sm transition-colors ${
                isInView ? 'bg-accent-coral text-background' : 'bg-surface-200 text-editorial-muted'
              }`}
            >
              {event.year}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono group-hover:text-accent-coral transition-colors">
              {event.title}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-accent-coral font-bold uppercase flex items-center gap-1">
            Click to Inspect <ChevronRight className="w-3 h-3" />
          </span>
        </div>

        <p className="text-sm text-editorial-muted leading-relaxed font-normal">
          {event.description}
        </p>

        <div className="pt-2 text-[11px] font-mono text-accent-coral flex items-center justify-between border-t border-editorial-border">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Humanity moved forward while feeds scrolled in parallel.
          </span>
          <span className="text-editorial-dim">~312h scrolled in {event.year}</span>
        </div>
      </motion.div>
    </div>
  );
};

export const SectionTimeline: React.FC<SectionTimelineProps> = ({ startYear }) => {
  const currentYear = new Date().getFullYear();
  const events = getEventsForRange(startYear, currentYear);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  return (
    <section id="timeline" className="py-20 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Globe className="w-4 h-4" /> Section 05 // Clickable World History Panels
          </span>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight">
            The World Kept Moving Forward
          </h2>
          <p className="text-sm sm:text-base text-editorial-muted max-w-2xl mx-auto leading-relaxed">
            Click any event card or year node below to inspect world history alongside your personal lost hours.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-editorial-border ml-4 sm:ml-12 pl-6 sm:pl-12 space-y-12">
          {events.map((event, idx) => (
            <TimelineItem
              key={idx}
              event={event}
              index={idx}
              onSelectEvent={(e) => setSelectedEvent(e)}
            />
          ))}
        </div>

        {/* Detailed Event Inspection Modal Panel */}
        <AnimatePresence>
          {selectedEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md select-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-surface-50 border-2 border-accent-coral p-6 sm:p-8 space-y-6 shadow-2xl text-left"
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 text-editorial-dim hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-2 border-b border-editorial-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedEvent.icon}</span>
                    <span className="px-3 py-1 bg-accent-coral text-background text-xs font-mono font-bold">
                      {selectedEvent.year} HISTORICAL EVENT
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white pt-1">
                    {selectedEvent.title}
                  </h3>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <p className="text-editorial-cream leading-relaxed text-sm">
                    {selectedEvent.description}
                  </p>

                  <div className="p-4 bg-background border border-editorial-border space-y-2">
                    <p className="text-[10px] uppercase text-accent-coral font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Personal Attention Overlap in {selectedEvent.year}
                    </p>
                    <p className="text-white font-bold">
                      During {selectedEvent.year}, an estimated ~312 hours (~13 waking days) were consumed watching short video feeds.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-2.5 bg-accent-coral text-background font-mono font-bold text-xs uppercase cursor-pointer"
                  >
                    Close Inspection
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
