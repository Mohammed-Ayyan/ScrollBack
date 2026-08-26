'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EditorialBlock } from '@/components/ui/EditorialBlock';
import { GoalCategory } from '@/types';
import { getAlternateRealityRoadmap } from '@/lib/goalMilestones';
import { Sparkles, Trophy } from 'lucide-react';

interface SectionAlternateProps {
  selectedGoals: GoalCategory[];
  totalHoursLost: number;
}

export const SectionAlternate: React.FC<SectionAlternateProps> = ({
  selectedGoals,
  totalHoursLost,
}) => {
  const milestones = getAlternateRealityRoadmap(selectedGoals);
  const shouldReduceMotion = useReducedMotion();

  const hourTiers = [
    { tier: '100 Hours', status: 'Beginner Level', height: 'h-full', border: 'border-editorial-border' },
    { tier: '500 Hours', status: 'Competent Level', height: 'h-full', border: 'border-editorial-border' },
    { tier: '1,000 Hours', status: 'Serious Skill', height: 'h-full', border: 'border-editorial-border' },
    { tier: '2,000+ Hours', status: 'Advanced Mastery', height: 'h-full', border: 'border-accent-coral' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-20 border-b border-editorial-border bg-surface-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Section 05 // Alternate Timeline
          </span>
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight">
            What could those hours have become?
          </h2>
          <p className="text-sm sm:text-base text-editorial-muted max-w-2xl mx-auto leading-relaxed">
            If you directed your daily scroll hours into your primary interests ({selectedGoals.join(', ')}), here is your progressive accumulation of possibilities:
          </p>
        </div>

        {/* Hour Tier Progressive Accumulation Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {milestones.map((m, idx) => {
            const tierInfo = hourTiers[idx] || hourTiers[3];
            return (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <EditorialBlock variant={idx === 3 ? 'accent' : 'default'} className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-editorial-border pb-3">
                      <span className="text-xs font-mono font-bold text-accent-coral">{tierInfo.tier}</span>
                      <span className="text-[10px] font-mono text-editorial-dim uppercase">{m.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-mono leading-snug">{m.title}</h3>
                    <p className="text-xs text-editorial-muted leading-relaxed">{m.description}</p>
                  </div>

                  <div className="pt-4 border-t border-editorial-border space-y-1">
                    <span className="text-[10px] font-mono font-bold text-accent-emerald uppercase flex items-center gap-1">
                      <Trophy className="w-3 h-3 text-accent-emerald" /> {tierInfo.status}
                    </span>
                    <p className="text-xs font-semibold text-white">{m.achievement}</p>
                  </div>
                </EditorialBlock>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
