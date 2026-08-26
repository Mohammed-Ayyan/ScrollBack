'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GOAL_OPTIONS } from '@/lib/goalMilestones';
import { GoalCategory } from '@/types';
import { Target, Trophy, ArrowRight, Zap } from 'lucide-react';
import { Counter } from '@/components/ui/Counter';

interface OpportunitySimulatorProps {
  totalHoursLost: number;
}

export const OpportunitySimulator: React.FC<OpportunitySimulatorProps> = ({ totalHoursLost }) => {
  const [activeCategory, setActiveCategory] = useState<GoalCategory>('coding');

  const categoryDetails: Record<GoalCategory, { title: string; skillTree: { hrs: number; title: string; desc: string }[] }> = {
    coding: {
      title: 'Full-Stack Software & AI Development',
      skillTree: [
        { hrs: 100, title: 'HTML, CSS & JS Core', desc: 'Build interactive web applications & APIs' },
        { hrs: 500, title: 'React, Next.js & Databases', desc: 'Deploy full-stack production web apps & SaaS' },
        { hrs: 1000, title: 'System Design & Open Source', desc: 'Architect scalable cloud infrastructure' },
        { hrs: 2000, title: 'Senior Software Engineer Level', desc: 'Lead complex technical engineering products' },
      ],
    },
    fitness: {
      title: 'Peak Physical Body Conditioning',
      skillTree: [
        { hrs: 100, title: 'Consistent 4-Day Discipline', desc: 'Fixed body posture & energy baseline' },
        { hrs: 500, title: 'Body Recomposition & 10K', desc: 'Substantial strength & endurance gains' },
        { hrs: 1000, title: 'Half-Marathon & Peak Fitness', desc: 'Advanced cardiovascular resilience' },
        { hrs: 2000, title: 'Elite Athlete Conditioning', desc: 'Lifetime athletic transformation & longevity' },
      ],
    },
    business: {
      title: 'Independent Business & Startup',
      skillTree: [
        { hrs: 100, title: 'Validation & Interviews', desc: 'Validated product demand with 20 customers' },
        { hrs: 500, title: 'MVP Launch & First $1k MRR', desc: 'Built viable product & acquired first users' },
        { hrs: 1000, title: 'Product-Market Fit & Scale', desc: 'Scaled sales funnels to $10,000/month MRR' },
        { hrs: 2000, title: 'Independent Enterprise Mastery', desc: 'Achieved complete financial & location freedom' },
      ],
    },
    reading: {
      title: 'Polymath Wisdom & Literary Mastery',
      skillTree: [
        { hrs: 100, title: '25 Landmark Books Read', desc: 'Established focused daily reading routine' },
        { hrs: 500, title: '125 Non-Fiction Books Read', desc: 'Mastered behavioral economics & history' },
        { hrs: 1000, title: 'Deep Polymath Perspective', desc: 'Synthesized mental models across disciplines' },
        { hrs: 2000, title: '500+ Books & Personal Vault', desc: 'Published insightful synthesis & strategic clarity' },
      ],
    },
    travel: {
      title: 'Global Cultural Immersion',
      skillTree: [
        { hrs: 100, title: 'Budgeting & First Expedition', desc: 'Explored 2 new international destinations' },
        { hrs: 500, title: 'Multi-Country Journey', desc: 'Immersed in local traditions across 8 countries' },
        { hrs: 1000, title: 'Global Explorer', desc: 'Backpacked across 3 diverse continents' },
        { hrs: 2000, title: 'World Culture Fluency', desc: 'Traveled 25+ countries forming lifelong bonds' },
      ],
    },
    creativity: {
      title: 'Music Production & Visual Arts',
      skillTree: [
        { hrs: 100, title: 'Instrument/Software Core', desc: 'Mastered scales, digital canvas & production' },
        { hrs: 500, title: 'First EP Album / Portfolio', desc: 'Released digital portfolio or music tracks' },
        { hrs: 1000, title: 'Audience & Live Craft', desc: 'Performed live or exhibited art to 1,000 fans' },
        { hrs: 2000, title: 'Master Artist Level', desc: 'Executed complex multi-media creative brand' },
      ],
    },
  };

  const activeData = categoryDetails[activeCategory];

  return (
    <div className="py-20 border-b border-editorial-border bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4" /> Interactive Simulator // Transferable Time
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Opportunity Cost Simulator
          </h3>
          <p className="text-sm text-editorial-muted max-w-xl mx-auto">
            Select a personal discipline below to see how your <span className="text-white font-mono font-bold">{totalHoursLost} scroll hours</span> map to skill tree progression.
          </p>
        </div>

        {/* Skill Category Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {GOAL_OPTIONS.map((g) => {
            const isSelected = activeCategory === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveCategory(g.id)}
                className={`px-4 py-2.5 border font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-accent-coral text-background border-accent-coral shadow-[0_0_15px_rgba(255,77,77,0.4)]'
                    : 'bg-surface-50 border-editorial-border text-editorial-muted hover:border-editorial-border-bright hover:bg-surface-100'
                }`}
              >
                <span>{g.icon}</span>
                <span>{g.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Tree Progress Visualization */}
        <div className="border border-editorial-border bg-surface-50 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-editorial-border pb-6">
            <div>
              <p className="text-xs font-mono text-editorial-dim uppercase">Active Discipline</p>
              <h4 className="text-2xl font-bold font-mono text-white">{activeData.title}</h4>
            </div>
            <div className="px-4 py-2 bg-surface-100 border border-editorial-border font-mono text-xs font-bold text-accent-coral">
              Available Investment: {totalHoursLost} Hours
            </div>
          </div>

          {/* Interactive Skill Tree Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeData.skillTree.map((node, idx) => {
              const isUnlocked = totalHoursLost >= node.hrs;
              const progressPct = Math.min(100, Math.round((totalHoursLost / node.hrs) * 100));

              return (
                <div
                  key={idx}
                  className={`p-5 border space-y-3 transition-colors ${
                    isUnlocked
                      ? 'bg-surface-100 border-accent-coral text-white'
                      : 'bg-background border-editorial-border text-editorial-muted opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-accent-coral">{node.hrs} Hours</span>
                    <span className="text-[10px] text-editorial-dim uppercase">
                      {isUnlocked ? '✓ UNLOCKED' : `${progressPct}%`}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold font-mono text-white leading-snug">{node.title}</h5>
                  <p className="text-xs text-editorial-muted leading-relaxed">{node.desc}</p>

                  <div className="w-full h-1.5 bg-surface-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${isUnlocked ? 'bg-accent-coral' : 'bg-editorial-dim'}`}
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
