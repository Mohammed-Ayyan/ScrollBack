'use client';

import React, { useState } from 'react';
import { User, Clock, AlertTriangle, Sparkles, HelpCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollAgeCardProps {
  age?: number;
  totalHoursLost: number;
}

export const ScrollAgeCard: React.FC<ScrollAgeCardProps> = ({ age = 24, totalHoursLost }) => {
  const [userAge, setUserAge] = useState<number>(age);
  const [dailyScrollMins, setDailyScrollMins] = useState<number>(150);

  // Quiz state
  const [quizAnswer1, setQuizAnswer1] = useState<string | null>(null);
  const [quizAnswer2, setQuizAnswer2] = useState<string | null>(null);
  const [showPersonality, setShowPersonality] = useState(false);

  const scrollYearsLost = Number(((dailyScrollMins * 365.25 * 5) / (60 * 24 * 365.25)).toFixed(1));
  const effectiveScrollAge = Number((userAge + scrollYearsLost).toFixed(1));

  const getPersonalityTitle = () => {
    if (quizAnswer1 === 'night') return 'Midnight Dopamine Streamer';
    if (quizAnswer1 === 'bored') return 'Micro-Boredom Surrenderer';
    if (quizAnswer2 === 'many') return 'Hyper-Loop Habitualist';
    return 'Twilight Attention Observer';
  };

  return (
    <div className="border border-editorial-border bg-background p-6 sm:p-8 space-y-8 text-left max-w-2xl mx-auto my-8 select-none">
      
      <div className="flex items-center justify-between border-b border-editorial-border pb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-accent-amber" />
          <span className="text-xs font-mono font-bold uppercase text-white">Interactive Metric // Biological Age vs Scroll Age</span>
        </div>
        <span className="text-[10px] font-mono text-editorial-dim">Live Age Slider</span>
      </div>

      {/* Real Age vs Scroll Age Dual Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        <div className="p-4 border border-editorial-border bg-surface-50 space-y-3">
          <p className="text-xs font-mono text-editorial-dim uppercase flex items-center justify-center gap-1">
            <User className="w-3.5 h-3.5 text-editorial-muted" /> Real Biological Age: <strong className="text-white">{userAge}</strong>
          </p>
          <input
            type="range"
            min="12"
            max="80"
            value={userAge}
            onChange={(e) => setUserAge(Number(e.target.value))}
            className="w-full h-2 bg-surface-200 appearance-none cursor-pointer accent-accent-coral"
          />
        </div>

        <div className="p-4 border border-accent-amber/40 bg-surface-100 space-y-3">
          <p className="text-xs font-mono text-accent-amber uppercase font-bold flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5 text-accent-amber" /> Scroll Time Spent: <strong className="text-accent-amber">{scrollYearsLost} yrs</strong>
          </p>
          <input
            type="range"
            min="30"
            max="480"
            step="15"
            value={dailyScrollMins}
            onChange={(e) => setDailyScrollMins(Number(e.target.value))}
            className="w-full h-2 bg-surface-200 appearance-none cursor-pointer accent-accent-amber"
          />
        </div>
      </div>

      <p className="text-xs text-editorial-muted leading-relaxed">
        Meaning: At <span className="text-white font-bold">{dailyScrollMins} mins/day</span> over 5 years, you surrender <span className="text-accent-amber font-mono font-bold">{scrollYearsLost} full 24-hour years</span> of your existence to micro videos.
      </p>

      {/* Discovery Quiz */}
      <div className="border-t border-editorial-border pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-accent-coral uppercase flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Discovery Quiz // Reveal Your Scroll Personality
          </span>
        </div>

        {!showPersonality ? (
          <div className="space-y-4 text-xs font-mono">
            {/* Q1 */}
            <div className="space-y-2">
              <p className="text-white font-bold">1. When do you usually scroll short feeds?</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'night', label: '🌙 Late Night Bedtime' },
                  { id: 'bored', label: '⚡ Whenever I am Bored' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizAnswer1(opt.id)}
                    className={`p-2.5 border text-left cursor-pointer transition-colors ${
                      quizAnswer1 === opt.id
                        ? 'bg-accent-coral text-background border-accent-coral font-bold'
                        : 'bg-surface-50 border-editorial-border text-editorial-muted hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-2 pt-2">
              <p className="text-white font-bold">2. What usually happens when you open a feed?</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'one', label: '1 Reel → 5 Minutes' },
                  { id: 'many', label: '1 Reel → 1 Hour Spiral' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setQuizAnswer2(opt.id)}
                    className={`p-2.5 border text-left cursor-pointer transition-colors ${
                      quizAnswer2 === opt.id
                        ? 'bg-accent-coral text-background border-accent-coral font-bold'
                        : 'bg-surface-50 border-editorial-border text-editorial-muted hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {quizAnswer1 && quizAnswer2 && (
              <button
                onClick={() => setShowPersonality(true)}
                className="w-full py-3 bg-accent-coral text-background font-bold text-xs uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(255,77,77,0.3)]"
              >
                Reveal Scroll Personality
              </button>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 border-2 border-accent-coral bg-surface-50 space-y-2 text-center"
          >
            <span className="text-[10px] font-mono text-editorial-dim uppercase">OFFICIAL SCROLL PERSONALITY</span>
            <p className="text-2xl font-black font-mono text-accent-coral flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" /> {getPersonalityTitle()}
            </p>
            <p className="text-xs font-mono text-editorial-muted">
              High vulnerability during {quizAnswer1 === 'night' ? 'late night hours' : 'micro boredom breaks'}.
            </p>
          </motion.div>
        )}
      </div>

    </div>
  );
};
