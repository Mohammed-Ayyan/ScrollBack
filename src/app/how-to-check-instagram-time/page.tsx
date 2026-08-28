import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Smartphone, CheckCircle, HelpCircle } from 'lucide-react';
import { FaqSection } from '@/components/landing/FaqSection';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scrollback.app';

export const metadata: Metadata = {
  title: 'How to Check Your Instagram Time Spent (Step-by-Step Guide)',
  description:
    'Learn how to find your average daily Instagram screen time inside the Instagram app on iOS and Android. Step-by-step instructions.',
  alternates: {
    canonical: `${siteUrl}/how-to-check-instagram-time`,
  },
  openGraph: {
    title: 'How to Check Your Instagram Time Spent (Step-by-Step Tutorial)',
    description:
      'Locate your reported daily average Instagram time under Your activity > Time spent inside the official mobile app.',
    url: `${siteUrl}/how-to-check-instagram-time`,
  },
};

export default function HowToCheckInstagramTimePage() {
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
        name: 'How to Check Instagram Time',
        item: `${siteUrl}/how-to-check-instagram-time`,
      },
    ],
  };

  const steps = [
    {
      num: '01',
      title: 'Open Instagram App',
      text: 'Launch the Instagram mobile application on your iOS or Android device.',
    },
    {
      num: '02',
      title: 'Tap Your Profile Icon',
      text: 'Tap your profile picture located in the bottom-right corner of the bottom navigation bar.',
    },
    {
      num: '03',
      title: 'Open Hamburger Menu (☰)',
      text: 'Tap the three-line menu icon (☰) in the top-right corner of your profile screen.',
    },
    {
      num: '04',
      title: 'Select "Your activity"',
      text: 'Find and tap "Your activity" in the settings list menu.',
    },
    {
      num: '05',
      title: 'Tap "Time spent"',
      text: 'Select "Time spent" under your activity options.',
    },
    {
      num: '06',
      title: 'Note Your Daily Average',
      text: 'Read the bold Daily Average time (e.g. 2h 34m) displayed at the top of the chart.',
    },
  ];

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
          <span>In-App Tutorial Guide</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          How to Check Your Instagram Average Daily Time
        </h1>
        <p className="text-lg sm:text-xl text-editorial-muted max-w-3xl leading-relaxed">
          Instagram includes an official built-in usage tracker. Follow this step-by-step guide to find your exact daily average screen time.
        </p>
        <div className="pt-4">
          <Link
            href="/calculator"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)]"
          >
            <span>Enter Your Time in ScrollBack</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* 6 Step Cards Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Step-by-Step Instructions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="p-6 border border-editorial-border bg-surface-50 space-y-2">
              <span className="text-xs font-mono font-bold text-accent-coral uppercase">
                STEP {s.num}
              </span>
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-xs text-editorial-cream leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Step CTA */}
      <div className="p-8 border border-editorial-border bg-surface-50 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">Got your average number?</h3>
        <p className="text-sm text-editorial-muted max-w-xl mx-auto">
          Enter your daily hours and minutes into ScrollBack to see your cumulative lifetime scrolling totals.
        </p>
        <Link
          href="/calculator"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
        >
          <span>Calculate Cumulative Time</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <FaqSection />
    </article>
  );
}
