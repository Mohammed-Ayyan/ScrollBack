import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Film, Calculator, ShieldCheck, Info } from 'lucide-react';
import { FaqSection } from '@/components/landing/FaqSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrollback.app';

export const metadata: Metadata = {
  title: 'Reels Time Calculator — How Many Reels Have You Watched?',
  description:
    'Calculate how many Instagram Reels you have watched over time using your daily screen time average. Transparent formula and estimations.',
  alternates: {
    canonical: `${siteUrl}/reels-time-calculator`,
  },
  openGraph: {
    title: 'Reels Time Calculator — Short Video Screen Time Audit',
    description:
      'Estimate your total Reels watched and hours consumed based on average video duration and daily Instagram screen time.',
    url: `${siteUrl}/reels-time-calculator`,
  },
};

export default function ReelsTimeCalculatorPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reels Time Calculator',
        item: `${siteUrl}/reels-time-calculator`,
      },
    ],
  };

  return (
    <article className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Page Header */}
      <header className="space-y-4 border-b border-editorial-border pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-100 border border-editorial-border text-xs font-mono text-accent-coral uppercase">
          <Film className="w-3.5 h-3.5" />
          <span>Short Video Consumption Audit</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Reels Time Calculator: How Many Short Videos Have You Scrolled?
        </h1>
        <p className="text-lg sm:text-xl text-editorial-muted max-w-3xl leading-relaxed">
          Short videos consume attention in 15-second slices. Calculate your total estimated Reels watched over years of scrolling and see what that screen time equals in real-world scale.
        </p>
        <div className="pt-4">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)]"
          >
            <span>Launch Reels Time Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="space-y-12 text-editorial-cream leading-relaxed font-normal">
        
        {/* Section 1: Short Video Dynamics */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Film className="w-6 h-6 text-accent-coral" />
            The Economics of Short Video Feeds
          </h2>
          <p>
            Instagram Reels are engineered for continuous micro-engagements. Because individual videos last between 5 to 60 seconds, users often scroll past hundreds of clips in a single sitting without noticing the total duration passed.
          </p>
          <p>
            While traditional long-form video formats (like movies or podcasts) create clear natural stopping points, algorithmic short-video feeds deliver immediate variable rewards that make time slip away unnoticed.
          </p>
        </section>

        {/* Section 2: Honest Methodology & Disclosure */}
        <section className="p-8 border border-editorial-border bg-surface-50 space-y-4">
          <div className="flex items-center gap-2 text-accent-coral font-mono text-xs font-bold uppercase">
            <Info className="w-4 h-4" /> TRANSPARENT CALCULATION METHODOLOGY
          </div>
          <h2 className="text-2xl font-bold text-white">
            How ScrollBack Estimates Reels Watched
          </h2>
          <p className="text-sm text-editorial-cream">
            Instagram does not provide an official API count of total individual Reels watched. ScrollBack calculates an estimated Reel count using the average short video length of <strong className="text-white">15 seconds per video</strong>:
          </p>
          <div className="p-4 bg-background border border-editorial-border font-mono text-xs text-accent-coral font-bold">
            Total Daily Instagram Seconds × Total Calendar Days ÷ 15 Seconds/Reel = Estimated Reels Watched
          </div>
          <p className="text-xs text-editorial-muted">
            Note: This is an estimation designed to illustrate scale. If your viewing behavior trends toward longer 60-second clips, your exact video count may differ, but total hours remain mathematically accurate to your reported Instagram average.
          </p>
        </section>

        {/* Section 3: Reels Count Scale Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Reels Watched Scale Chart
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 border border-editorial-border bg-background space-y-2">
              <span className="text-editorial-dim uppercase">1 Hour / Day</span>
              <p className="text-2xl font-black text-white">87,660 Reels</p>
              <p className="text-editorial-muted">Per single year (15s avg)</p>
            </div>
            <div className="p-5 border border-accent-coral/40 bg-accent-coral/5 space-y-2">
              <span className="text-accent-coral font-bold uppercase">2.5 Hours / Day (Avg)</span>
              <p className="text-2xl font-black text-accent-coral">219,150 Reels</p>
              <p className="text-editorial-muted">Per single year (15s avg)</p>
            </div>
            <div className="p-5 border border-editorial-border bg-background space-y-2">
              <span className="text-editorial-dim uppercase">4 Hours / Day</span>
              <p className="text-2xl font-black text-white">350,640 Reels</p>
              <p className="text-editorial-muted">Per single year (15s avg)</p>
            </div>
          </div>
        </section>

        {/* Internal Linking Cards */}
        <section className="p-6 border border-editorial-border bg-surface-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Need to check how to find your Instagram daily time?</h3>
            <p className="text-xs text-editorial-muted">Follow our visual guide for Instagram app settings.</p>
          </div>
          <Link
            href="/how-to-check-instagram-time"
            className="px-4 py-2 border border-editorial-border bg-surface-100 text-xs font-mono font-bold text-editorial-cream hover:text-white uppercase transition-colors"
          >
            How to Check IG Time →
          </Link>
        </section>

      </div>

      {/* Embedded FAQ */}
      <FaqSection />
    </article>
  );
}
