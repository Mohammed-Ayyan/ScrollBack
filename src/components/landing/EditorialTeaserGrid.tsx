'use client';

import React from 'react';
import { EditorialBlock } from '@/components/ui/EditorialBlock';
import { History, Clock, ArrowRight, Hourglass, Compass, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const EditorialTeaserGrid: React.FC = () => {
  return (
    <section id="time-stages" className="py-20 bg-background border-b border-editorial-border time-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-editorial-border pb-8">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
              <Hourglass className="w-4 h-4" /> 01 / The Anatomy of Time Loss
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              An interactive journey through your attention history.
            </h2>
          </div>
          <p className="text-sm text-editorial-muted max-w-md font-normal leading-relaxed text-left">
            Every screen in ScrollBack is engineered to make the abstract concept of time visible, physical, and emotionally clear.
          </p>
        </div>

        {/* 3 Time Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-editorial-border p-px">
          
          {/* Stage 1 */}
          <EditorialBlock variant="default" className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-editorial-dim">STAGE // 01</span>
              <Clock className="w-5 h-5 text-accent-coral" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono">The 15-Second Illusion</h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Short videos feel harmless because each clip is brief. But thousands of 15-second loops compound into solid months of disappeared living.
            </p>
            <div className="pt-4 text-[11px] font-mono text-accent-coral border-t border-editorial-border">
              → 15s × 240 reels = 1 full hour
            </div>
          </EditorialBlock>

          {/* Stage 2 */}
          <EditorialBlock variant="default" className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-editorial-dim">STAGE // 02</span>
              <Compass className="w-5 h-5 text-accent-amber" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono">The 24-Hour Reality</h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Carve out your actual 24-hour day. See how scrolling directly cannibalizes your waking free hours, leaving less time for what matters.
            </p>
            <div className="pt-4 text-[11px] font-mono text-accent-amber border-t border-editorial-border">
              → Visual 24h day partition clock
            </div>
          </EditorialBlock>

          {/* Stage 3 */}
          <EditorialBlock variant="default" className="space-y-4 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-editorial-dim">STAGE // 03</span>
              <History className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono">The Lifetime Ledger</h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Examine the scale through flying calendar pages, physical scrolling distance, world historical milestones, and parallel life timelines.
            </p>
            <div className="pt-4 text-[11px] font-mono text-accent-cyan border-t border-editorial-border">
              → Branching alternate futures
            </div>
          </EditorialBlock>

        </div>

        {/* Feature Split Banner */}
        <div className="border border-editorial-border bg-surface-50 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-xs font-mono text-accent-coral font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Personal Attention Machine
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Step into your personal time audit. No sign-up required.
            </h3>
            <p className="text-sm text-editorial-muted max-w-xl">
              Enter your average screen time, select your starting year, and experience your time passing in front of your eyes.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)]"
            >
              <span>Audit My Time</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
