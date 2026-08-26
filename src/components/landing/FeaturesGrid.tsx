'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Clock, Film, History, Compass, Share2, Flame } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Time Lost Engine',
      description: 'Accurately converts daily scroll minutes into waking days, months, and full years lost from your lifetime.',
      glow: 'purple' as const,
    },
    {
      icon: Film,
      title: 'Reels Count & Thumb KM',
      description: 'Calculates estimated short videos watched and total physical kilometers scrolled by your thumb.',
      glow: 'rose' as const,
    },
    {
      icon: History,
      title: 'Historical Event Matcher',
      description: 'Discover major scientific breakthroughs, space launches, and global events that occurred while you scrolled.',
      glow: 'cyan' as const,
    },
    {
      icon: Compass,
      title: 'Alternate Reality Roadmap',
      description: 'Generates a realistic milestone timeline showing what skills or businesses you could have mastered instead.',
      glow: 'amber' as const,
    },
    {
      icon: Flame,
      title: 'Streak & Habit Reclaim Planner',
      description: 'Test interactive habit reduction scenarios: reclaim 300+ free hours every year with small daily tweaks.',
      glow: 'emerald' as const,
    },
    {
      icon: Share2,
      title: 'Shareable Graphic Cards',
      description: 'Export high-resolution story and post summary cards to inspire your friends and community.',
      glow: 'purple' as const,
    },
  ];

  return (
    <section className="py-20 bg-surface-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Uncover the hidden economics of short-form media
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            ScrollBack translates passive screen time into concrete achievements, historical context, and actionable habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <GlassCard key={idx} glow={item.glow} className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <item.icon className="w-6 h-6 text-brand-rose" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
