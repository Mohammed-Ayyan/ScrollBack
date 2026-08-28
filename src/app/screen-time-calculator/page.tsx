import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Smartphone, Compass, Flame, BookOpen } from 'lucide-react';
import { FaqSection } from '@/components/landing/FaqSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrollback.app';

export const metadata: Metadata = {
  title: 'Screen Time Calculator — Measure Social Media & Instagram Time Wasted',
  description:
    'Calculate how many waking days and years of life are lost to screen time and social media scrolling. Discover your alternate reality timeline.',
  alternates: {
    canonical: `${siteUrl}/screen-time-calculator`,
  },
  openGraph: {
    title: 'Screen Time Calculator — Social Media Opportunity Cost Audit',
    description:
      'Measure total hours spent on mobile screen time and discover what those hours could become in books read, workouts, or skills built.',
    url: `${siteUrl}/screen-time-calculator`,
  },
};

export default function ScreenTimeCalculatorPage() {
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
        name: 'Screen Time Calculator',
        item: `${siteUrl}/screen-time-calculator`,
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
          <Smartphone className="w-3.5 h-3.5" />
          <span>Screen Time & Life Cost Audit</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Screen Time Calculator: Measure Your Waking Life Cost
        </h1>
        <p className="text-lg sm:text-xl text-editorial-muted max-w-3xl leading-relaxed">
          Understanding mobile screen time requires comparing hours spent against actual waking hours. See how social media usage carves away your 16 waking hours each day.
        </p>
        <div className="pt-4">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)]"
          >
            <span>Launch Screen Time Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Main Body */}
      <div className="space-y-12 text-editorial-cream leading-relaxed font-normal">
        
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            16 Waking Hours vs 24-Hour Days
          </h2>
          <p>
            Standard time metrics calculate days by dividing total hours by 24. However, humans spend approximately 8 hours asleep each night, leaving only <strong className="text-white">16 waking hours</strong> for work, learning, relationships, and health.
          </p>
          <p>
            When you scroll on Instagram for 4 hours a day, you are not losing 16% of a 24-hour day—you are giving away <strong className="text-accent-coral">25% of your conscious waking life</strong>.
          </p>
        </section>

        {/* Opportunity Cost Grid */}
        <section className="p-8 border border-editorial-border bg-surface-50 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-accent-coral" />
            What 1 Year of Instagram Average Time Could Become
          </h2>
          <p className="text-sm text-editorial-muted">
            If you reclaim an average of 2.5 hours per day (913 hours per year), here is what those hours equal in tangible lifetime achievements:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-center">
            <div className="p-4 bg-background border border-editorial-border space-y-1">
              <span className="text-editorial-dim">Books Read</span>
              <p className="text-2xl font-black text-white">~228 Books</p>
              <span className="text-[10px] text-editorial-muted">4h per 60k book</span>
            </div>
            <div className="p-4 bg-background border border-editorial-border space-y-1">
              <span className="text-editorial-dim">Workouts</span>
              <p className="text-2xl font-black text-white">~913 Sessions</p>
              <span className="text-[10px] text-editorial-muted">1h per session</span>
            </div>
            <div className="p-4 bg-background border border-editorial-border space-y-1">
              <span className="text-editorial-dim">Language Fluency</span>
              <p className="text-2xl font-black text-accent-coral">1.5 Languages</p>
              <span className="text-[10px] text-editorial-muted">600h per language</span>
            </div>
            <div className="p-4 bg-background border border-editorial-border space-y-1">
              <span className="text-editorial-dim">Apps Built</span>
              <p className="text-2xl font-black text-white">~11 Projects</p>
              <span className="text-[10px] text-editorial-muted">80h per project</span>
            </div>
          </div>
        </section>

        <section className="p-6 border border-editorial-border bg-surface-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Want to calculate your exact numbers?</h3>
            <p className="text-xs text-editorial-muted">Use your Instagram app reported average in our free calculator.</p>
          </div>
          <Link
            href="/calculator"
            className="px-4 py-2 bg-accent-coral text-background text-xs font-mono font-bold uppercase transition-colors"
          >
            Start Calculation →
          </Link>
        </section>

      </div>

      <FaqSection />
    </article>
  );
}
