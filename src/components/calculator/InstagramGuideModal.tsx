'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Smartphone, Check, AlertCircle } from 'lucide-react';

interface InstagramGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StepInfo {
  step: number;
  title: string;
  instruction: string;
  highlightText: string;
}

const STEPS: StepInfo[] = [
  {
    step: 1,
    title: 'Open Instagram',
    instruction: 'Launch the Instagram app on your smartphone.',
    highlightText: 'App Icon on Home Screen',
  },
  {
    step: 2,
    title: 'Go to your profile',
    instruction: 'Tap your profile picture in the bottom-right corner.',
    highlightText: 'Bottom-Right Profile Icon',
  },
  {
    step: 3,
    title: 'Open the menu',
    instruction: 'Tap the hamburger menu icon (☰) in the top-right corner.',
    highlightText: 'Top-Right ☰ Menu Icon',
  },
  {
    step: 4,
    title: 'Open "Your activity"',
    instruction: 'Find and tap "Your activity" in the settings list.',
    highlightText: '"Your activity" Menu Item',
  },
  {
    step: 5,
    title: 'Open "Time spent"',
    instruction: 'Tap "Time spent" under your activity options.',
    highlightText: '"Time spent" Row',
  },
  {
    step: 6,
    title: 'Read your average daily time',
    instruction: 'Look at the bold Daily Average header shown at the top.',
    highlightText: 'Daily Average Metric (e.g. 2h 34m)',
  },
];

export const InstagramGuideModal: React.FC<InstagramGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const stepData = STEPS[currentStep];

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-surface-50 border border-editorial-border shadow-2xl overflow-hidden rounded-none my-auto"
        >
          {/* Top Header */}
          <div className="p-4 sm:p-5 border-b border-editorial-border bg-background/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-accent-coral/10 border border-accent-coral/30 text-accent-coral">
                <Smartphone className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  INSTAGRAM IN-APP GUIDE
                </h3>
                <p className="text-[10px] font-mono text-editorial-muted">
                  Step {currentStep + 1} of {STEPS.length}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-2 text-editorial-muted hover:text-white hover:bg-surface-100 transition-colors cursor-pointer"
              aria-label="Close walkthrough"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Progress Indicator Bar */}
          <div className="w-full h-1 bg-surface-200 flex">
            {STEPS.map((_, idx) => (
              <div
                key={idx}
                className={`h-full flex-1 transition-all duration-300 ${
                  idx <= currentStep ? 'bg-accent-coral' : 'bg-transparent'
                }`}
              />
            ))}
          </div>

          {/* Main Body */}
          <div className="p-6 space-y-6">
            
            {/* Step Header */}
            <div className="space-y-1 text-left">
              <span className="text-[11px] font-mono font-bold text-accent-coral uppercase tracking-widest">
                STEP 0{stepData.step}
              </span>
              <h4 className="text-2xl font-extrabold text-white tracking-tight">
                {stepData.title}
              </h4>
              <p className="text-sm text-editorial-cream">
                {stepData.instruction}
              </p>
            </div>

            {/* Simulated Smartphone Interactive Graphic */}
            <div className="relative mx-auto w-full max-w-[280px] h-[340px] bg-zinc-950 border-4 border-zinc-800 rounded-[32px] p-3 shadow-2xl flex flex-col justify-between overflow-hidden">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-zinc-800 rounded-full z-20" />

              {/* Phone Screen Mockup Content depending on Step */}
              <div className="mt-4 flex-1 bg-black rounded-[20px] p-3 flex flex-col justify-between text-zinc-100 relative overflow-hidden font-sans border border-zinc-800">
                
                {/* STEP 1: Phone Home Screen */}
                {currentStep === 0 && (
                  <div className="h-full flex flex-col justify-between p-2">
                    <div className="text-[10px] font-mono text-zinc-500 text-center pt-1">9:41 AM</div>
                    <div className="grid grid-cols-4 gap-3 my-auto">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">App</div>
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">App</div>
                      {/* Highlighted Instagram Icon */}
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                          IG
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="absolute -inset-1.5 rounded-2xl border-2 border-accent-coral pointer-events-none"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">App</div>
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">App</div>
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">App</div>
                    </div>
                    <div className="text-[9px] font-mono text-accent-coral text-center font-bold">Tap Instagram</div>
                  </div>
                )}

                {/* STEP 2: Instagram Feed Screen */}
                {currentStep === 1 && (
                  <div className="h-full flex flex-col justify-between pt-1">
                    <div className="flex justify-between items-center px-1 pb-2 border-b border-zinc-800">
                      <span className="font-serif font-bold text-sm text-white">Instagram</span>
                      <span className="text-xs text-zinc-400">♡</span>
                    </div>
                    <div className="space-y-2 py-2">
                      <div className="h-24 bg-zinc-900 rounded-lg flex items-center justify-center text-xs text-zinc-600">Feed Post</div>
                      <div className="h-10 bg-zinc-900/60 rounded-lg" />
                    </div>
                    {/* Bottom Nav Bar */}
                    <div className="flex justify-around items-center pt-2 border-t border-zinc-800 text-zinc-400 text-xs relative">
                      <span>🏠</span>
                      <span>🔍</span>
                      <span>➕</span>
                      <span>🎬</span>
                      {/* Highlighted Profile Tab */}
                      <div className="relative">
                        <div className="w-6 h-6 rounded-full bg-accent-coral text-black font-bold flex items-center justify-center text-[10px]">
                          ME
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="absolute -inset-1 rounded-full border-2 border-accent-coral pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Profile Screen with Hamburger Menu */}
                {currentStep === 2 && (
                  <div className="h-full flex flex-col justify-between pt-1">
                    <div className="flex justify-between items-center px-1 pb-2 border-b border-zinc-800">
                      <span className="font-bold text-xs text-white">@your_username</span>
                      {/* Highlighted Hamburger Menu */}
                      <div className="relative p-1">
                        <span className="text-base font-bold text-white">☰</span>
                        <motion.div
                          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="absolute -inset-1 border-2 border-accent-coral rounded-md pointer-events-none"
                        />
                      </div>
                    </div>
                    <div className="py-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold">ME</div>
                      <div className="flex-1 space-y-1">
                        <div className="h-2.5 bg-zinc-800 rounded w-3/4" />
                        <div className="h-2 bg-zinc-800/60 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1 h-28">
                      <div className="bg-zinc-900 rounded" />
                      <div className="bg-zinc-900 rounded" />
                      <div className="bg-zinc-900 rounded" />
                    </div>
                  </div>
                )}

                {/* STEP 4: Settings & Menu List */}
                {currentStep === 3 && (
                  <div className="h-full flex flex-col justify-between pt-1">
                    <div className="text-xs font-bold pb-2 border-b border-zinc-800 text-zinc-300">Settings & Menu</div>
                    <div className="space-y-2 py-2 text-xs">
                      <div className="p-1.5 text-zinc-400">Settings and privacy</div>
                      <div className="p-1.5 text-zinc-400">Threads</div>
                      {/* Highlighted Your Activity */}
                      <div className="relative p-2 bg-zinc-800/90 rounded border border-accent-coral/80 text-white font-bold flex items-center justify-between">
                        <span>📊 Your activity</span>
                        <span className="text-[10px] text-accent-coral">➔</span>
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                          className="absolute inset-0 bg-accent-coral/10 rounded pointer-events-none"
                        />
                      </div>
                      <div className="p-1.5 text-zinc-400">Saved</div>
                      <div className="p-1.5 text-zinc-400">Archive</div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Your Activity List -> Time Spent */}
                {currentStep === 4 && (
                  <div className="h-full flex flex-col justify-between pt-1">
                    <div className="text-xs font-bold pb-2 border-b border-zinc-800 text-zinc-300">Your Activity</div>
                    <div className="space-y-2 py-2 text-xs">
                      {/* Highlighted Time Spent */}
                      <div className="relative p-2.5 bg-zinc-800/90 rounded border border-accent-coral/80 text-white font-bold flex items-center justify-between">
                        <span>⏱️ Time spent</span>
                        <span className="text-[10px] text-accent-coral">➔</span>
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                          className="absolute inset-0 bg-accent-coral/10 rounded pointer-events-none"
                        />
                      </div>
                      <div className="p-1.5 text-zinc-400">Photos and videos</div>
                      <div className="p-1.5 text-zinc-400">Interactions</div>
                      <div className="p-1.5 text-zinc-400">Account history</div>
                    </div>
                  </div>
                )}

                {/* STEP 6: Time Spent Readout Screen */}
                {currentStep === 5 && (
                  <div className="h-full flex flex-col justify-between pt-1 text-center">
                    <div className="text-xs font-bold text-zinc-300">Time Spent</div>
                    <div className="my-auto space-y-2">
                      <div className="relative p-3 bg-accent-coral/20 border border-accent-coral rounded-xl">
                        <p className="text-[9px] font-mono text-zinc-400 uppercase">Daily Average</p>
                        <p className="text-xl font-black font-mono text-accent-coral">2h 34m</p>
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="absolute -inset-1 border border-accent-coral rounded-xl pointer-events-none"
                        />
                      </div>
                      <div className="h-12 bg-zinc-900 rounded p-1 flex items-end justify-between gap-1">
                        <div className="w-full bg-zinc-700 h-[40%]" />
                        <div className="w-full bg-zinc-700 h-[60%]" />
                        <div className="w-full bg-accent-coral h-[90%]" />
                        <div className="w-full bg-zinc-700 h-[50%]" />
                        <div className="w-full bg-zinc-700 h-[70%]" />
                      </div>
                    </div>
                    <p className="text-[9px] font-mono text-emerald-400 font-bold">Copy this daily time into ScrollBack!</p>
                  </div>
                )}

              </div>
            </div>

            {/* Disclaimer notice */}
            <div className="p-3 bg-surface-100 border border-editorial-border flex items-start gap-2 text-left">
              <AlertCircle className="w-4 h-4 text-editorial-dim shrink-0 mt-0.5" />
              <p className="text-[11px] font-mono text-editorial-muted">
                Your Instagram layout may look slightly different depending on app version.
              </p>
            </div>

          </div>

          {/* Footer Controls */}
          <div className="p-4 sm:p-5 border-t border-editorial-border bg-background/80 flex items-center justify-between">
            <button
              onClick={handlePrev}
              type="button"
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-1 px-4 py-2 text-xs font-mono font-bold uppercase transition-colors ${
                currentStep === 0
                  ? 'text-editorial-dim opacity-50 cursor-not-allowed'
                  : 'text-white hover:text-accent-coral cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-1.5">
              {STEPS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    currentStep === idx ? 'bg-accent-coral w-4' : 'bg-surface-200'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            {currentStep < STEPS.length - 1 ? (
              <button
                onClick={handleNext}
                type="button"
                className="inline-flex items-center gap-1 px-5 py-2.5 bg-accent-coral text-background text-xs font-mono font-bold uppercase hover:bg-white transition-all cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onClose}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent-coral text-background text-xs font-mono font-bold uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(255,77,77,0.4)] cursor-pointer"
              >
                <span>Enter My Time</span>
                <Check className="w-4 h-4 stroke-[3]" />
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
