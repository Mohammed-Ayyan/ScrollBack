'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Counter } from '@/components/ui/Counter';
import { Code, BookOpen, Dumbbell, Globe, Rocket, Compass } from 'lucide-react';

interface RealityComparisonProps {
  totalHoursLost: number;
  booksCount: number;
  workoutsCount: number;
  languagesCount: number;
  appsBuiltCount: number;
  worldTripsCount: number;
}

export const RealityComparison: React.FC<RealityComparisonProps> = ({
  totalHoursLost,
  booksCount,
  workoutsCount,
  languagesCount,
  appsBuiltCount,
  worldTripsCount,
}) => {
  const pythonMasteryPercentage = Math.min(100, Math.round((totalHoursLost / 300) * 100));

  const comparisons = [
    {
      icon: Code,
      title: 'Python & AI Engineering',
      metric: `${pythonMasteryPercentage}% Mastery`,
      subtitle: `Requires ~300 hours for beginner-to-advanced proficiency. You could have built ${Math.max(1, Math.floor(totalHoursLost / 80))} AI projects.`,
      color: 'text-cyan-400',
      glow: 'cyan' as const,
    },
    {
      icon: BookOpen,
      title: 'Read Books',
      metric: `${booksCount} Books`,
      subtitle: 'Based on average non-fiction book reading speed of 250 words/min (4 hours/book).',
      color: 'text-purple-400',
      glow: 'purple' as const,
    },
    {
      icon: Dumbbell,
      title: 'Physical Workouts',
      metric: `${workoutsCount} Sessions`,
      subtitle: 'Complete 1-hour workout sessions. Enough for years of peak body conditioning.',
      color: 'text-rose-400',
      glow: 'rose' as const,
    },
    {
      icon: Globe,
      title: 'New Languages',
      metric: `${languagesCount} Languages`,
      subtitle: 'FSI standard estimate of ~600 focused hours for conversational fluency.',
      color: 'text-emerald-400',
      glow: 'emerald' as const,
    },
    {
      icon: Rocket,
      title: 'Build Web Apps / SaaS',
      metric: `${appsBuiltCount} Full Products`,
      subtitle: 'Estimated 80 hours per functional production MVP web application.',
      color: 'text-amber-400',
      glow: 'amber' as const,
    },
    {
      icon: Compass,
      title: 'World Journeys',
      metric: `${worldTripsCount} Trips`,
      subtitle: 'Dedicated exploration time for cultural immersion across continents.',
      color: 'text-indigo-400',
      glow: 'purple' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          That time equals approximately:
        </h3>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto">
          Here is what you could have accomplished if those exact hours were invested into your personal development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comparisons.map((item, idx) => (
          <GlassCard key={idx} glow={item.glow} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className={`text-lg font-extrabold font-mono ${item.color}`}>
                {item.metric}
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">{item.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.subtitle}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
