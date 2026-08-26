'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimeGoalOption } from '@/types';
import {
  Laptop,
  Dumbbell,
  Rocket,
  Palette,
  Heart,
  BookOpen,
  Globe,
  Sparkles,
  Check,
  Hourglass,
  Plus
} from 'lucide-react';

interface CapsuleContainerVisualProps {
  selectedGoal: TimeGoalOption | null;
  customGoalText: string;
  onSelectGoal: (goal: TimeGoalOption) => void;
  onChangeCustomGoalText: (val: string) => void;
}

export const TIME_GOAL_OPTIONS: TimeGoalOption[] = [
  {
    id: 'skill_coding',
    label: 'Master a Skill / Coding',
    category: 'Skill',
    iconName: 'laptop',
    color: 'text-accent-coral',
    description: 'Build web applications, master programming languages, or gain technical mastery.',
  },
  {
    id: 'fitness_health',
    label: 'Physical Health & Fitness',
    category: 'Health',
    iconName: 'dumbbell',
    color: 'text-accent-emerald',
    description: 'Build physical strength, train for marathons, or cultivate lifelong health.',
  },
  {
    id: 'build_business',
    label: 'Build Something & Enterprise',
    category: 'Building',
    iconName: 'rocket',
    color: 'text-accent-amber',
    description: 'Launch an independent product, build a side business, or create real value.',
  },
  {
    id: 'create_art',
    label: 'Creative Art & Music',
    category: 'Creativity',
    iconName: 'palette',
    color: 'text-purple-400',
    description: 'Design artwork, compose music, write stories, or express your creative self.',
  },
  {
    id: 'deep_relationships',
    label: 'Deep Human Relationships',
    category: 'Connection',
    iconName: 'heart',
    color: 'text-rose-400',
    description: 'Be fully present with family, deepen friendships, and create real memories.',
  },
  {
    id: 'read_books',
    label: 'Read & Deep Learning',
    category: 'Knowledge',
    iconName: 'book',
    color: 'text-accent-cyan',
    description: 'Read hundreds of books, expand your worldview, and master philosophy & science.',
  },
  {
    id: 'explore_world',
    label: 'Explore the World & Nature',
    category: 'Adventure',
    iconName: 'globe',
    color: 'text-blue-400',
    description: 'Travel new continents, hike in nature, and experience real-world geography.',
  },
];

export const CapsuleContainerVisual: React.FC<CapsuleContainerVisualProps> = ({
  selectedGoal,
  customGoalText,
  onSelectGoal,
  onChangeCustomGoalText,
}) => {
  const getIconComponent = (iconName: TimeGoalOption['iconName']) => {
    switch (iconName) {
      case 'laptop': return <Laptop className="w-6 h-6" />;
      case 'dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'rocket': return <Rocket className="w-6 h-6" />;
      case 'palette': return <Palette className="w-6 h-6" />;
      case 'heart': return <Heart className="w-6 h-6" />;
      case 'book': return <BookOpen className="w-6 h-6" />;
      case 'globe': return <Globe className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-10 text-left select-none">
      
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
          <Hourglass className="w-4 h-4" /> STEP 01 // INTENTION CAPSULE
        </span>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          If you had those hours back, what would you choose?
        </h3>
        <p className="text-sm text-editorial-muted">
          Select the core visual focus you want to lock into your personal Time Capsule.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Visual Glowing Capsule Container */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-xs h-[360px] border-2 border-accent-coral/60 bg-surface-50 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(255,77,77,0.2)]">
            
            {/* Top Ring Header */}
            <div className="flex items-center justify-between border-b border-editorial-border pb-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-accent-coral" /> Glowing Time Capsule
              </span>
              <span className="text-[10px] font-mono text-editorial-dim uppercase">EMPTY TIME</span>
            </div>

            {/* Container Interior Visual Holding Object */}
            <div className="flex-1 flex flex-col items-center justify-center relative p-4">
              <AnimatePresence mode="wait">
                {selectedGoal ? (
                  <motion.div
                    key={selectedGoal.id}
                    initial={{ scale: 0, y: -40, opacity: 0, rotate: -15 }}
                    animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0, y: 40, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="flex flex-col items-center text-center space-y-3"
                  >
                    <div className={`p-5 rounded-2xl bg-surface-100 border-2 border-accent-coral shadow-[0_0_25px_rgba(255,77,77,0.4)] ${selectedGoal.color}`}>
                      {getIconComponent(selectedGoal.iconName)}
                    </div>
                    <span className="text-sm font-mono font-bold text-white tracking-wide">
                      {selectedGoal.label}
                    </span>
                    <span className="text-[10px] font-mono text-accent-coral uppercase font-bold px-2 py-0.5 bg-accent-coral/10 border border-accent-coral/30">
                      Intention Locked
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-center space-y-2 text-editorial-dim"
                  >
                    <div className="w-16 h-16 rounded-full border border-dashed border-editorial-border flex items-center justify-center animate-pulse">
                      <Hourglass className="w-6 h-6 text-editorial-dim" />
                    </div>
                    <span className="text-xs font-mono uppercase">Select an Intention Object</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Capsule Base Status */}
            <div className="pt-3 border-t border-editorial-border text-center">
              <span className="text-[10px] font-mono text-editorial-muted uppercase">
                {selectedGoal ? 'Capsule Ready to Seal' : 'Waiting for choice...'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Choice Cards Grid */}
        <div className="lg:col-span-7 space-y-3">
          <label className="text-xs font-mono font-bold uppercase text-editorial-dim">
            Visual Intention Objects
          </label>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIME_GOAL_OPTIONS.map((opt) => {
              const isSelected = selectedGoal?.id === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onSelectGoal(opt)}
                  className={`p-4 border text-left rounded-sm transition-all cursor-pointer space-y-2 group ${
                    isSelected
                      ? 'bg-surface-100 border-accent-coral shadow-[0_0_20px_rgba(255,77,77,0.3)] scale-[1.02]'
                      : 'bg-surface-50 border-editorial-border hover:border-editorial-border-bright hover:bg-surface-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 bg-background border border-editorial-border ${opt.color}`}>
                      {getIconComponent(opt.iconName)}
                    </div>
                    {isSelected ? (
                      <span className="p-1 bg-accent-coral text-background rounded-full">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-editorial-dim group-hover:text-white uppercase font-bold">
                        {opt.category}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-white group-hover:text-accent-coral transition-colors">
                      {opt.label}
                    </h4>
                    <p className="text-[11px] text-editorial-muted line-clamp-2 pt-0.5">
                      {opt.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Goal Input */}
          <div className="pt-2">
            <div className="p-3 border border-editorial-border bg-surface-50 space-y-2">
              <label className="text-[10px] font-mono font-bold uppercase text-editorial-dim flex items-center gap-1">
                <Plus className="w-3 h-3 text-accent-coral" /> Or enter custom goal:
              </label>
              <input
                type="text"
                placeholder="e.g. Master piano, write a novel, build a garden..."
                value={customGoalText}
                onChange={(e) => onChangeCustomGoalText(e.target.value)}
                className="w-full bg-background border border-editorial-border px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-accent-coral"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
