'use client';

import React from 'react';
import { EditorialBlock } from '@/components/ui/EditorialBlock';
import { Code, BookOpen, Dumbbell, Globe, Rocket, Compass } from 'lucide-react';

interface SectionPerspectiveProps {
  totalHoursLost: number;
  booksCount: number;
  workoutsCount: number;
  languagesCount: number;
  appsBuiltCount: number;
  worldTripsCount: number;
}

export const SectionPerspective: React.FC<SectionPerspectiveProps> = ({
  totalHoursLost,
  booksCount,
  workoutsCount,
  languagesCount,
  appsBuiltCount,
  worldTripsCount,
}) => {
  const comparisons = [
    {
      icon: BookOpen,
      title: 'Read ~500 Books',
      metric: `${booksCount} Books`,
      subtitle: 'Calculated at 250 words per minute (approx. 4 hours per non-fiction book).',
      color: 'text-accent-coral',
    },
    {
      icon: Globe,
      title: 'Learn a New Language',
      metric: `${languagesCount} Languages`,
      subtitle: 'FSI standard benchmark of ~600 hours for conversational fluency.',
      color: 'text-accent-cyan',
    },
    {
      icon: Dumbbell,
      title: 'Complete ~2,000 Workouts',
      metric: `${workoutsCount} Sessions`,
      subtitle: 'Full 1-hour workout sessions. Enough for years of peak strength and conditioning.',
      color: 'text-accent-amber',
    },
    {
      icon: Rocket,
      title: 'Build Serious Projects',
      metric: `${appsBuiltCount} Products`,
      subtitle: 'Estimated 80 hours per functional software application or business MVP.',
      color: 'text-white',
    },
    {
      icon: Code,
      title: 'Learn Software Engineering',
      metric: `${Math.min(100, Math.round((totalHoursLost / 300) * 100))}% Mastery`,
      subtitle: 'Requires ~300 focused hours for beginner-to-advanced proficiency in modern tech stack.',
      color: 'text-accent-emerald',
    },
    {
      icon: Compass,
      title: 'Travel Extensively',
      metric: `${worldTripsCount} Major Journeys`,
      subtitle: 'Dedicated exploration time for multi-country cultural immersion.',
      color: 'text-editorial-cream',
    },
  ];

  return (
    <section className="py-16 border-b border-editorial-border bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral">
            Section 03 // Real-World Equivalents
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            That&apos;s a lot of time.
          </h2>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Credible real-world achievements you could have unlocked if those exact hours were invested into your personal goals.
          </p>
        </div>

        {/* Editorial Comparisons Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, idx) => (
            <EditorialBlock key={idx} variant="default" className="space-y-4">
              <div className="flex items-center justify-between">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className={`text-xl font-black font-mono ${item.color}`}>
                  {item.metric}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white font-mono">{item.title}</h4>
              <p className="text-xs text-editorial-muted leading-relaxed">{item.subtitle}</p>
            </EditorialBlock>
          ))}
        </div>

      </div>
    </section>
  );
};
