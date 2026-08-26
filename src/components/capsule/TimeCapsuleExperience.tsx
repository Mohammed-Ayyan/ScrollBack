'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CinematicTransition } from './CinematicTransition';
import { CapsuleContainerVisual, TIME_GOAL_OPTIONS } from './CapsuleContainerVisual';
import { FutureTreeVisual } from './FutureTreeVisual';
import { CapsuleTimelineTraveler } from './CapsuleTimelineTraveler';
import { TimeCapsuleCardModal } from './TimeCapsuleCardModal';
import { TimeGoalOption, TimeCapsuleData } from '@/types';
import { Hourglass, Sparkles, ArrowRight, ShieldCheck, Heart, Download } from 'lucide-react';

interface TimeCapsuleExperienceProps {
  pastDaysLost?: number;
}

export const TimeCapsuleExperience: React.FC<TimeCapsuleExperienceProps> = ({
  pastDaysLost = 642,
}) => {
  const [step, setStep] = useState<'transition' | 'intention' | 'promise' | 'future' | 'sealed'>('transition');
  
  const [selectedGoal, setSelectedGoal] = useState<TimeGoalOption | null>(TIME_GOAL_OPTIONS[0]);
  const [customGoalText, setCustomGoalText] = useState('');
  const [promiseText, setPromiseText] = useState('I will protect my attention and build my future.');
  const [reclaimedMinutes, setReclaimedMinutes] = useState(45);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCapsuleData = (): TimeCapsuleData => ({
    id: `capsule_${Date.now()}`,
    selectedGoalId: selectedGoal?.id || 'custom',
    selectedGoalLabel: selectedGoal?.label || 'Personal Focus Goal',
    customGoal: customGoalText || undefined,
    promiseText,
    pastDaysLost,
    dailyReclaimedMinutes: reclaimedMinutes,
    createdAt: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
  });

  return (
    <section id="capsule" className="py-20 border-b border-editorial-border bg-background relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Experience Flow */}
        <AnimatePresence mode="wait">
          {step === 'transition' && (
            <motion.div
              key="transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CinematicTransition onComplete={() => setStep('intention')} />
            </motion.div>
          )}

          {step === 'intention' && (
            <motion.div
              key="intention"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <CapsuleContainerVisual
                selectedGoal={selectedGoal}
                customGoalText={customGoalText}
                onSelectGoal={(g) => setSelectedGoal(g)}
                onChangeCustomGoalText={(txt) => setCustomGoalText(txt)}
              />

              <div className="flex justify-end pt-4 border-t border-editorial-border">
                <button
                  onClick={() => setStep('promise')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.4)] cursor-pointer"
                >
                  <span>Next: Write Time Promise</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'promise' && (
            <motion.div
              key="promise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8 text-left max-w-2xl mx-auto"
            >
              <div className="space-y-2 text-center">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center justify-center gap-1.5">
                  <Heart className="w-4 h-4" /> STEP 02 // PERSONAL TIME PROMISE
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  What do you want future you to remember?
                </h3>
                <p className="text-sm text-editorial-muted">
                  Write a short message to your future self that will be locked into your Time Capsule.
                </p>
              </div>

              <div className="p-6 border border-editorial-border bg-surface-50 space-y-4">
                <label className="text-xs font-mono font-bold uppercase text-editorial-dim">
                  Your Personal Promise
                </label>
                <textarea
                  rows={4}
                  value={promiseText}
                  onChange={(e) => setPromiseText(e.target.value)}
                  placeholder="e.g. I want to spend more time building my future and less time in feeds..."
                  className="w-full bg-background border border-editorial-border p-4 text-sm font-mono text-white focus:outline-none focus:border-accent-coral"
                />
                <div className="flex justify-between text-[11px] font-mono text-editorial-dim">
                  <span>Keep it simple & honest</span>
                  <span>Will be sealed in capsule</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 border-t border-editorial-border">
                <button
                  onClick={() => setStep('intention')}
                  className="px-6 py-3 border border-editorial-border bg-surface-50 text-editorial-cream text-xs font-mono font-bold uppercase hover:bg-surface-100 cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep('future')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.4)] cursor-pointer"
                >
                  <span>Next: View Compounding Future</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {(step === 'future' || step === 'sealed') && (
            <motion.div
              key="future"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12 text-left"
            >
              <div className="space-y-2 text-center max-w-2xl mx-auto">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-emerald flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> STEP 03 // FUTURE RECLAIM & PROJECTION
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Your Future Attention Is Still Yours
                </h3>
                <p className="text-sm text-editorial-muted">
                  See how small daily focus choices compound into your blooming Attention Tree and future years.
                </p>
              </div>

              {/* Attention Tree Visual */}
              <FutureTreeVisual
                reclaimedMinutes={reclaimedMinutes}
                onChangeReclaimedMinutes={(mins) => setReclaimedMinutes(mins)}
              />

              {/* Timeline Traveler (2026 -> 2030) */}
              <CapsuleTimelineTraveler
                goalLabel={customGoalText || selectedGoal?.label || 'Personal Focus'}
                promiseText={promiseText}
                reclaimedMinutes={reclaimedMinutes}
              />

              {/* Final Seal & Card Trigger Banner */}
              <div className="p-8 border-2 border-accent-coral bg-surface-50 text-center space-y-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold font-mono text-white">
                    Ready to Seal Your Time Capsule?
                  </h4>
                  <p className="text-xs font-mono text-editorial-muted max-w-md mx-auto">
                    Export your official Time Capsule card to seal your attention promise and keep it as a reminder.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setStep('sealed');
                      setIsModalOpen(true);
                    }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(255,77,77,0.4)] cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Seal & Export Capsule Card</span>
                  </button>

                  <button
                    onClick={() => setStep('intention')}
                    className="px-6 py-4 border border-editorial-border bg-background text-editorial-cream text-xs font-mono font-bold uppercase hover:bg-surface-100 cursor-pointer"
                  >
                    Edit Intention
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Card */}
        <TimeCapsuleCardModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          capsuleData={getCapsuleData()}
        />

      </div>
    </section>
  );
};
