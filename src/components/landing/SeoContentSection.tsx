'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, HelpCircle, ShieldCheck, ArrowRight, Activity, Clock } from 'lucide-react';

export const SeoContentSection: React.FC = () => {
  return (
    <section id="time-calculator-explained" className="py-20 bg-background border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1.5">
            <Calculator className="w-4 h-4" /> METHODOLOGY & EXPLANATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Understanding Your Instagram Screen Time
          </h2>
          <p className="text-base text-editorial-muted leading-relaxed">
            ScrollBack translates daily mobile app usage numbers into concrete years, full 24-hour days, and estimated short-form video consumption over your personal timeline.
          </p>
        </div>

        {/* 4 Key Explanatory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Card 1: What is an Instagram time calculator */}
          <article className="p-8 border border-editorial-border bg-surface-50 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent-coral/10 border border-accent-coral/30 flex items-center justify-center text-accent-coral">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                What is an Instagram time calculator?
              </h3>
              <p className="text-sm text-editorial-cream leading-relaxed">
                An Instagram time calculator is an analytical tool designed to measure the total accumulated hours and days spent scrolling on Instagram over months or years. Instead of viewing daily numbers in isolation, it aggregates daily averages to reveal long-term life impact.
              </p>
            </div>
            <div className="pt-4 border-t border-editorial-border/60">
              <Link
                href="/instagram-time-calculator"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-coral hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Read detailed guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 2: How does it work */}
          <article className="p-8 border border-editorial-border bg-surface-50 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent-coral/10 border border-accent-coral/30 flex items-center justify-center text-accent-coral">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                How does ScrollBack work?
              </h3>
              <p className="text-sm text-editorial-cream leading-relaxed">
                ScrollBack does not require app downloads or Instagram login permissions. You simply locate your official daily average reported by Instagram inside <strong className="text-white font-semibold">Your activity → Time spent</strong>, enter your starting year, and ScrollBack calculates your lifetime scrolling totals locally in your browser.
              </p>
            </div>
            <div className="pt-4 border-t border-editorial-border/60">
              <Link
                href="/how-to-check-instagram-time"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-coral hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>View step-by-step tutorial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 3: Calculation breakdown */}
          <article className="p-8 border border-editorial-border bg-surface-50 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent-coral/10 border border-accent-coral/30 flex items-center justify-center text-accent-coral">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                How is total time calculated?
              </h3>
              <p className="text-sm text-editorial-cream leading-relaxed">
                Total accumulated time is computed using exact elapsed calendar days:
              </p>
              <div className="p-3 bg-background border border-editorial-border font-mono text-xs text-accent-coral font-bold">
                Daily Instagram Average (mins) × Elapsed Calendar Days = Total Minutes Lost
              </div>
              <p className="text-xs text-editorial-muted">
                From total minutes, we compute waking days lost (based on 16 waking hours/day) and full 24-hour continuous days lost.
              </p>
            </div>
            <div className="pt-4 border-t border-editorial-border/60">
              <Link
                href="/how-instagram-time-is-calculated"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-coral hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Inspect full formula</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Card 4: Honesty & Reels Count Disclosure */}
          <article className="p-8 border border-editorial-border bg-surface-50 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 bg-accent-coral/10 border border-accent-coral/30 flex items-center justify-center text-accent-coral">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Can ScrollBack calculate exact Reels watched?
              </h3>
              <p className="text-sm text-editorial-cream leading-relaxed">
                Instagram's in-app metric measures total time on Instagram overall, not strictly Reels viewing. ScrollBack calculates an estimated Reel count assuming an average short video duration of 15 seconds per Reel:
              </p>
              <div className="p-3 bg-background border border-editorial-border font-mono text-xs text-editorial-cream font-bold">
                Total Viewing Seconds ÷ 15 Seconds/Reel = Estimated Reels Watched
              </div>
              <p className="text-xs text-editorial-muted">
                Because exact Reels-only duration is not separately reported by Instagram's API, this number is an estimate for scale rather than a measured fact.
              </p>
            </div>
            <div className="pt-4 border-t border-editorial-border/60">
              <Link
                href="/reels-time-calculator"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-coral hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Read Reels calculation methodology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

        </div>

        {/* Real Search Intent Examples Section */}
        <div className="p-8 border border-editorial-border bg-surface-50 space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-accent-coral">
              REALITY EXAMPLES
            </span>
            <h3 className="text-2xl font-extrabold text-white">
              What does daily Instagram screen time look like per year?
            </h3>
            <p className="text-sm text-editorial-muted">
              Here is how different daily usage averages translate over a 12-month calendar year:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Example 1 */}
            <div className="p-5 bg-background border border-editorial-border space-y-2">
              <span className="text-xs font-mono font-bold text-accent-coral">1 Hour / Day</span>
              <p className="text-xl font-black font-mono text-white">365.25 Hours/Yr</p>
              <p className="text-xs font-mono text-editorial-muted">≈ 15.2 Full 24h Days</p>
              <p className="text-xs font-mono text-editorial-muted">≈ 22.8 Waking Days (16h)</p>
            </div>

            {/* Example 2 */}
            <div className="p-5 bg-background border border-accent-coral/40 space-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 text-[9px] font-mono text-accent-coral uppercase font-bold bg-accent-coral/10">Global Average</div>
              <span className="text-xs font-mono font-bold text-accent-coral">2.5 Hours / Day</span>
              <p className="text-xl font-black font-mono text-white">913 Hours/Yr</p>
              <p className="text-xs font-mono text-editorial-muted">≈ 38.0 Full 24h Days</p>
              <p className="text-xs font-mono text-editorial-muted">≈ 57.0 Waking Days (16h)</p>
            </div>

            {/* Example 3 */}
            <div className="p-5 bg-background border border-editorial-border space-y-2">
              <span className="text-xs font-mono font-bold text-accent-coral">4 Hours / Day</span>
              <p className="text-xl font-black font-mono text-white">1,461 Hours/Yr</p>
              <p className="text-xs font-mono text-editorial-muted">≈ 60.9 Full 24h Days</p>
              <p className="text-xs font-mono text-editorial-muted">≈ 91.3 Waking Days (16h)</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
