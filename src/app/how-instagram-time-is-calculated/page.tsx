import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Calculator, Lock } from 'lucide-react';
import { FaqSection } from '@/components/landing/FaqSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrollback.app';

export const metadata: Metadata = {
  title: 'How Instagram Time & Reels Count is Calculated | ScrollBack Methodology',
  description:
    'Learn about the formulas, mathematical models, assumptions, and privacy principles behind the ScrollBack screen time calculator.',
  alternates: {
    canonical: `${siteUrl}/how-instagram-time-is-calculated`,
  },
  openGraph: {
    title: 'ScrollBack Calculation Methodology & Transparency Statement',
    description:
      'Inspect our calculation formulas, assumptions for Reels count, waking days partition, and client-side privacy model.',
    url: `${siteUrl}/how-instagram-time-is-calculated`,
  },
};

export default function HowInstagramTimeIsCalculatedPage() {
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
        name: 'Calculation Methodology',
        item: `${siteUrl}/how-instagram-time-is-calculated`,
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
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Calculation Methodology & Transparency</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          How ScrollBack Calculates Your Instagram Time & Reels Count
        </h1>
        <p className="text-lg sm:text-xl text-editorial-muted max-w-3xl leading-relaxed">
          We believe data calculations should be transparent, verifiable, and private. Here is an exact mathematical breakdown of how ScrollBack computes your cumulative metrics.
        </p>
      </header>

      {/* Formulas Breakdown */}
      <div className="space-y-12 text-editorial-cream leading-relaxed font-normal">
        
        {/* Formula 1 */}
        <section className="p-8 border border-editorial-border bg-surface-50 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-accent-coral" />
            1. Cumulative Time Calculation
          </h2>
          <p className="text-sm">
            ScrollBack takes your daily hours (H) and minutes (M) reported by Instagram, computes total daily minutes (M_daily = H × 60 + M), and calculates exact elapsed calendar days (D_total) between January 1st of your starting year and today.
          </p>
          <div className="p-4 bg-background border border-editorial-border font-mono text-xs text-accent-coral font-bold">
            Total Hours Lost = (M_daily × D_total) ÷ 60
          </div>
        </section>

        {/* Formula 2 */}
        <section className="p-8 border border-editorial-border bg-surface-50 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-accent-coral" />
            2. Waking Days vs 24-Hour Days
          </h2>
          <p className="text-sm">
            We provide two distinct day calculations:
          </p>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-3 bg-background border border-editorial-border text-white">
              Full 24-Hour Days Lost = Total Hours Lost ÷ 24
            </div>
            <div className="p-3 bg-background border border-editorial-border text-accent-coral">
              Waking Days Lost (16h Day) = Total Hours Lost ÷ 16
            </div>
          </div>
        </section>

        {/* Formula 3 */}
        <section className="p-8 border border-editorial-border bg-surface-50 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-accent-coral" />
            3. Estimated Reels Count Assumption
          </h2>
          <p className="text-sm">
            Because Instagram's reported metric measures total Instagram app usage rather than Reels specifically, ScrollBack computes an estimated video count based on a standard 15-second short video duration assumption:
          </p>
          <div className="p-4 bg-background border border-editorial-border font-mono text-xs text-editorial-cream font-bold">
            Estimated Reels = (Total Seconds Spent) ÷ 15
          </div>
          <p className="text-xs text-editorial-muted">
            This estimation provides perspective on scrolling scale without misrepresenting estimated numbers as exact server logs.
          </p>
        </section>

        {/* Privacy Principles */}
        <section className="p-8 border border-accent-coral/30 bg-accent-coral/5 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-accent-coral" />
            Privacy & Local-First Processing
          </h2>
          <p className="text-sm text-editorial-cream">
            ScrollBack never asks for your Instagram credentials, API tokens, or login details. All calculations occur inside your browser using client-side JavaScript. Your data remains on your device.
          </p>
        </section>

      </div>

      <FaqSection />
    </article>
  );
}
