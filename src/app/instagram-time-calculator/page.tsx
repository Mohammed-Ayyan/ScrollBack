import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calculator, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { FaqSection } from '@/components/landing/FaqSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrollback.app';

export const metadata: Metadata = {
  title: 'Instagram Time Calculator — Calculate Your Total Hours Spent on Instagram',
  description:
    'Use our free Instagram Time Calculator to compute your total accumulated hours, days, and years spent scrolling on Instagram based on your reported daily average.',
  alternates: {
    canonical: `${siteUrl}/instagram-time-calculator`,
  },
  openGraph: {
    title: 'Instagram Time Calculator — See How Much Time You Spend Scrolling',
    description:
      'Enter your average daily time from Instagram to calculate cumulative hours lost and estimated Reels watched over your usage history.',
    url: `${siteUrl}/instagram-time-calculator`,
  },
};

export default function InstagramTimeCalculatorPage() {
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
        name: 'Instagram Time Calculator',
        item: `${siteUrl}/instagram-time-calculator`,
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
          <Clock className="w-3.5 h-3.5" />
          <span>Interactive Screen Time Audit</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Instagram Time Calculator: See Where Your Hours Disappeared
        </h1>
        <p className="text-lg sm:text-xl text-editorial-muted max-w-3xl leading-relaxed">
          Instagram tracks your daily usage inside app settings. The ScrollBack Instagram Time Calculator transforms your reported daily average into total accumulated hours, full 24-hour days, and waking life lost.
        </p>
        <div className="pt-4">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)]"
          >
            <span>Launch Instagram Time Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="space-y-12 text-editorial-cream leading-relaxed font-normal">
        
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <Calculator className="w-6 h-6 text-accent-coral" />
            What is the ScrollBack Instagram Time Calculator?
          </h2>
          <p>
            The Instagram Time Calculator is a specialized digital screen time auditing engine. While social platforms show daily app usage graphs for the past 7 days, they rarely show your total multi-year accumulated totals. ScrollBack takes your reported daily Instagram time (e.g. 2 hours and 30 minutes) and computes the exact time spent over your entire account lifetime.
          </p>
          <p>
            By looking at total hours rather than single days, you gain an accurate perspective on how scrolling impacts your real-world goals, sleep, health, and productivity.
          </p>
        </section>

        {/* Section 2: Calculation Breakdown Table */}
        <section className="space-y-6 p-8 border border-editorial-border bg-surface-50">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How Instagram Usage Translates Over Time
          </h2>
          <p className="text-sm text-editorial-muted">
            Here is a breakdown of what various daily Instagram averages look like over 1 year and 5 years of account usage:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-editorial-border text-editorial-dim uppercase">
                  <th className="py-3 px-4">Daily Average</th>
                  <th className="py-3 px-4">1 Year (Hours)</th>
                  <th className="py-3 px-4">1 Year (24h Days)</th>
                  <th className="py-3 px-4">5 Years (Hours)</th>
                  <th className="py-3 px-4">5 Years (24h Days)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-editorial-border/60">
                <tr>
                  <td className="py-3 px-4 font-bold text-white">30 mins/day</td>
                  <td className="py-3 px-4">182.6 hrs</td>
                  <td className="py-3 px-4">7.6 days</td>
                  <td className="py-3 px-4">913 hrs</td>
                  <td className="py-3 px-4">38.0 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">1 hour/day</td>
                  <td className="py-3 px-4">365.25 hrs</td>
                  <td className="py-3 px-4">15.2 days</td>
                  <td className="py-3 px-4">1,826 hrs</td>
                  <td className="py-3 px-4">76.1 days</td>
                </tr>
                <tr className="bg-accent-coral/10">
                  <td className="py-3 px-4 font-bold text-accent-coral">2h 34m (IG Avg)</td>
                  <td className="py-3 px-4 font-bold text-white">937.5 hrs</td>
                  <td className="py-3 px-4 font-bold text-accent-coral">39.1 days</td>
                  <td className="py-3 px-4 font-bold text-white">4,687 hrs</td>
                  <td className="py-3 px-4 font-bold text-accent-coral">195.3 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-white">4 hours/day</td>
                  <td className="py-3 px-4">1,461 hrs</td>
                  <td className="py-3 px-4">60.9 days</td>
                  <td className="py-3 px-4">7,305 hrs</td>
                  <td className="py-3 px-4">304.4 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Step-by-Step Instructions preview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How to Use the Instagram Time Calculator
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 border border-editorial-border bg-background space-y-2">
              <span className="text-accent-coral font-bold">01. Find IG Average</span>
              <p className="text-editorial-muted">Open Instagram &gt; Profile &gt; Menu (☰) &gt; Your activity &gt; Time spent.</p>
            </div>
            <div className="p-4 border border-editorial-border bg-background space-y-2">
              <span className="text-accent-coral font-bold">02. Enter Values</span>
              <p className="text-editorial-muted">Input your daily hours, minutes, and starting year into ScrollBack.</p>
            </div>
            <div className="p-4 border border-editorial-border bg-background space-y-2">
              <span className="text-accent-coral font-bold">03. See Audit</span>
              <p className="text-editorial-muted">Receive your lifetime scrolling report and alternate life comparisons.</p>
            </div>
          </div>
        </section>

        {/* Internal Linking Cards */}
        <section className="p-6 border border-editorial-border bg-surface-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Want to see how Reels count is estimated?</h3>
            <p className="text-xs text-editorial-muted">Read our short-form video estimation guide.</p>
          </div>
          <Link
            href="/reels-time-calculator"
            className="px-4 py-2 border border-editorial-border bg-surface-100 text-xs font-mono font-bold text-editorial-cream hover:text-white uppercase transition-colors"
          >
            Reels Calculator Guide →
          </Link>
        </section>

      </div>

      {/* Embedded FAQ */}
      <FaqSection />
    </article>
  );
}
