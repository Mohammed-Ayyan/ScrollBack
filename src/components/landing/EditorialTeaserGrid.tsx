'use client';

import React from 'react';
import { EditorialBlock } from '@/components/ui/EditorialBlock';
import { History, BookOpen, Trophy, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export const EditorialTeaserGrid: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-editorial-border pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
              01 / Content Architecture & Storytelling
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              An editorial audit of passive media consumption.
            </h2>
          </div>
          <p className="text-sm text-editorial-muted max-w-md font-normal leading-relaxed">
            ScrollBack transforms abstract daily minutes into concrete lifetime data, historical milestones, and actionable habits.
          </p>
        </div>

        {/* Multi-Column Dense Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-editorial-border p-px">
          
          {/* Module 1 */}
          <EditorialBlock variant="default" className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-editorial-dim">MODULE // 01</span>
              <Zap className="w-5 h-5 text-accent-coral" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono">The Big Number</h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Calculates your cumulative screen time into full 24-hour days and 16-hour waking days lost from your lifetime.
            </p>
            <div className="pt-4 text-[11px] font-mono text-accent-coral border-t border-editorial-border">
              → Exact mathematical conversion
            </div>
          </EditorialBlock>

          {/* Module 2 */}
          <EditorialBlock variant="default" className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-editorial-dim">MODULE // 02</span>
              <History className="w-5 h-5 text-accent-amber" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono">Historical Overlap</h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Maps major technological leaps, scientific discoveries, and global events that transpired while you watched short videos.
            </p>
            <div className="pt-4 text-[11px] font-mono text-accent-amber border-t border-editorial-border">
              → 2010–2026 Historical Dataset
            </div>
          </EditorialBlock>

          {/* Module 3 */}
          <EditorialBlock variant="default" className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-editorial-dim">MODULE // 03</span>
              <Trophy className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono">Alternate Reality</h3>
            <p className="text-xs text-editorial-muted leading-relaxed">
              Generates a realistic step-by-step roadmap showing what skills, projects, or physical feats you could have mastered instead.
            </p>
            <div className="pt-4 text-[11px] font-mono text-accent-cyan border-t border-editorial-border">
              → 100h / 500h / 1000h / 2000h+ Milestones
            </div>
          </EditorialBlock>

        </div>

        {/* Feature Split Banner */}
        <div className="border border-editorial-border bg-surface-50 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-xs font-mono text-accent-coral font-bold uppercase tracking-wider">
              Ready to reveal your personal data report?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              It takes less than 30 seconds. No sign-up required.
            </h3>
            <p className="text-sm text-editorial-muted max-w-xl">
              Enter your average screen time, select your start year, and discover what your scrolling hours became.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)]"
            >
              <span>Start Calculation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
