export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getReportById } from '@/lib/prisma';
import { calculateScrollStats } from '@/lib/calculations';
import { TimeLostCard } from '@/components/results/TimeLostCard';
import { ReelsCountCard } from '@/components/results/ReelsCountCard';
import { RealityComparison } from '@/components/results/RealityComparison';
import { AlternateReality } from '@/components/results/AlternateReality';
import { HistoricalTimeline } from '@/components/results/HistoricalTimeline';
import { GoalCategory } from '@/types';
import { ArrowRight, Sparkles } from 'lucide-react';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const report = await getReportById(params.id);

  if (!report) {
    return { title: 'Report Not Found — ScrollBack' };
  }

  return {
    title: `ScrollBack Report — ${Number(report.totalDaysLost || 0).toFixed(0)} Days Spent Watching Reels`,
    description: `A user spent approximately ${Number(report.totalDaysLost || 0).toFixed(0)} days watching short vertical videos. Calculate your scroll cost on ScrollBack.`,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SharedReportPage({ params }: { params: { id: string } }) {
  const report = await getReportById(params.id);

  if (!report) {
    notFound();
  }

  const selectedGoals: GoalCategory[] = typeof report.goals === 'string' ? JSON.parse(report.goals || '["coding", "business"]') : (report.goals || ['coding', 'business']);

  const stats = calculateScrollStats({
    dailyHours: report.dailyHours,
    dailyMinutes: report.dailyMinutes,
    startYear: report.startYear,
    age: report.age || undefined,
    country: report.country || undefined,
    selectedGoals,
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Banner CTA */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-rose/20 via-brand-purple/20 to-brand-cyan/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-rose">
            <Sparkles className="w-4 h-4" /> Shared ScrollBack Report
          </div>
          <h2 className="text-xl font-bold text-white">How much of your life disappeared into scrolling?</h2>
        </div>
        <Link
          href="/calculator"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-rose to-brand-purple text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap"
        >
          <span>Calculate My Scroll Time</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Main Results */}
      <TimeLostCard
        totalHoursLost={stats.totalHoursLost}
        wakingDaysLost={stats.wakingDaysLost}
        full24hDaysLost={stats.full24hDaysLost}
      />

      <ReelsCountCard
        estimatedReels={stats.estimatedReels}
        thumbDistanceKm={stats.thumbDistanceKm}
        caloriesBurned={stats.caloriesBurnedIdling}
      />

      <RealityComparison
        totalHoursLost={stats.totalHoursLost}
        booksCount={stats.booksCount}
        workoutsCount={stats.workoutsCount}
        languagesCount={stats.languagesCount}
        appsBuiltCount={stats.appsBuiltCount}
        worldTripsCount={stats.worldTripsCount}
      />

      <AlternateReality
        selectedGoals={selectedGoals}
        totalHoursLost={stats.totalHoursLost}
      />

      <HistoricalTimeline startYear={report.startYear} />
    </div>
  );
}
