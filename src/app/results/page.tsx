'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserInputState, ScrollCalculationResult } from '@/types';
import { calculateScrollStats } from '@/lib/calculations';
import { SectionBigNumber } from '@/components/results/SectionBigNumber';
import { ScrollAgeCard } from '@/components/experience/ScrollAgeCard';
import { TimeRiver } from '@/components/experience/TimeRiver';
import { DisappearingCalendar } from '@/components/experience/DisappearingCalendar';
import { InfiniteReelsWall } from '@/components/experience/InfiniteReelsWall';
import { ThumbJourney } from '@/components/experience/ThumbJourney';
import { OneMoreReelCounter } from '@/components/experience/OneMoreReelCounter';
import { AttentionHeatmap } from '@/components/experience/AttentionHeatmap';
import { ArchiveRoom } from '@/components/experience/ArchiveRoom';
import { SectionPerspective } from '@/components/results/SectionPerspective';
import { OpportunitySimulator } from '@/components/experience/OpportunitySimulator';
import { ParallelTimeline } from '@/components/experience/ParallelTimeline';
import { SectionTimeline } from '@/components/results/SectionTimeline';
import { SectionAlternate } from '@/components/results/SectionAlternate';
import { SectionFuture } from '@/components/results/SectionFuture';
import { AttentionPassport } from '@/components/experience/AttentionPassport';
import { ShareModal } from '@/components/share/ShareModal';
import { Share2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ResultsPage() {
  const [inputState, setInputState] = useState<UserInputState>({
    dailyHours: 2,
    dailyMinutes: 30,
    startYear: 2019,
    age: 24,
    selectedGoals: ['coding', 'fitness', 'business'],
  });

  const [stats, setStats] = useState<ScrollCalculationResult | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    try {
      confetti({ particleCount: 70, spread: 75, origin: { y: 0.5 } });
    } catch (e) {}

    const saved = localStorage.getItem('scrollback_user_input');
    let currentInput = inputState;
    if (saved) {
      try {
        currentInput = JSON.parse(saved);
        setInputState(currentInput);
      } catch (err) {
        console.error('Failed to parse saved input', err);
      }
    }

    const calculatedStats = calculateScrollStats(currentInput);
    setStats(calculatedStats);

    fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dailyHours: currentInput.dailyHours,
        dailyMinutes: currentInput.dailyMinutes,
        startYear: currentInput.startYear,
        age: currentInput.age,
        country: currentInput.country,
        goals: currentInput.selectedGoals,
        totalDaysLost: calculatedStats.full24hDaysLost,
        estimatedReels: calculatedStats.estimatedReels,
        thumbDistanceKm: calculatedStats.thumbDistanceKm,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setShareUrl(typeof window !== 'undefined' ? window.location.origin : '');
      })
      .catch(() => {
        setShareUrl(typeof window !== 'undefined' ? window.location.origin : '');
      });
  }, []);

  if (!stats) return null;

  const yearsLost = Math.floor(stats.totalHoursLost / (365.25 * 24));
  const remainingHours = stats.totalHoursLost % (365.25 * 24);
  const monthsLost = Math.floor(remainingHours / (30.4375 * 24));
  const daysLost = Math.floor((remainingHours % (30.4375 * 24)) / 24);

  return (
    <div className="min-h-screen bg-background text-editorial-cream space-y-0">
      
      {/* Top Floating Sticky Action Bar */}
      <div className="sticky top-16 z-40 bg-surface-50/90 backdrop-blur-md border-b border-editorial-border py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
            Cinematic Personal Audit // {inputState.startYear} – Present
          </span>

          <div className="flex items-center gap-3">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-editorial-border bg-surface-100 text-editorial-cream font-mono text-xs font-bold uppercase hover:bg-surface-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Recalculate
            </Link>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-accent-coral text-background font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(255,77,77,0.3)] cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              Share Passport
            </button>
          </div>
        </div>
      </div>

      {/* 1. Big Number Section & Scroll Age Card */}
      <SectionBigNumber
        totalHoursLost={stats.totalHoursLost}
        wakingDaysLost={stats.wakingDaysLost}
        full24hDaysLost={stats.full24hDaysLost}
      />
      <ScrollAgeCard age={inputState.age} totalHoursLost={stats.totalHoursLost} />

      {/* 2. Flowing Time River */}
      <TimeRiver startYear={inputState.startYear} totalDaysLost={stats.full24hDaysLost} />

      {/* 3. Disappearing Calendar Pages */}
      <DisappearingCalendar startYear={inputState.startYear} totalDaysLost={stats.full24hDaysLost} />

      {/* 4. Infinite Reels Matrix Wall */}
      <InfiniteReelsWall estimatedReels={stats.estimatedReels} />

      {/* 5. Swiping Thumb Journey */}
      <ThumbJourney thumbDistanceKm={stats.thumbDistanceKm} estimatedReels={stats.estimatedReels} />

      {/* 6. One More Reel Decision Counter */}
      <OneMoreReelCounter estimatedReels={stats.estimatedReels} />

      {/* 7. Weekly Attention Heatmap */}
      <AttentionHeatmap />

      {/* 8. Physical Media Archive Room */}
      <ArchiveRoom estimatedReels={stats.estimatedReels} totalDaysLost={stats.full24hDaysLost} />

      {/* 9. Real-World Perspective Comparisons */}
      <SectionPerspective
        totalHoursLost={stats.totalHoursLost}
        booksCount={stats.booksCount}
        workoutsCount={stats.workoutsCount}
        languagesCount={stats.languagesCount}
        appsBuiltCount={stats.appsBuiltCount}
        worldTripsCount={stats.worldTripsCount}
      />

      {/* 10. Interactive Opportunity Cost Simulator */}
      <OpportunitySimulator totalHoursLost={stats.totalHoursLost} />

      {/* 11. Parallel Life Timeline Comparison */}
      <ParallelTimeline
        startYear={inputState.startYear}
        totalDaysLost={stats.full24hDaysLost}
        totalHoursLost={stats.totalHoursLost}
      />

      {/* 12. World Timeline Experience */}
      <SectionTimeline startYear={inputState.startYear} />

      {/* 13. Alternate Reality Milestone Map */}
      <SectionAlternate
        selectedGoals={inputState.selectedGoals}
        totalHoursLost={stats.totalHoursLost}
      />

      {/* 14. Future Reclaim Simulation */}
      <SectionFuture dailyMinutesTotal={stats.dailyMinutesTotal} />

      {/* 15. Collectible Attention Passport */}
      <AttentionPassport
        startYear={inputState.startYear}
        totalDaysLost={stats.full24hDaysLost}
        estimatedReels={stats.estimatedReels}
        dailyHours={inputState.dailyHours}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        yearsLost={yearsLost}
        monthsLost={monthsLost}
        daysLost={daysLost}
        totalDaysLost={stats.full24hDaysLost}
        estimatedReels={stats.estimatedReels}
        booksCount={stats.booksCount}
        shareUrl={shareUrl || (typeof window !== 'undefined' ? window.location.origin : '')}
      />
    </div>
  );
}
