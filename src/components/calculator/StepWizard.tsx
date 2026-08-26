'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { StepTime } from './StepTime';
import { StepYear } from './StepYear';
import { StepDetails } from './StepDetails';
import { TimeCollapseOverlay } from '@/components/experience/TimeCollapseOverlay';
import { GoalCategory, UserInputState } from '@/types';
import { ArrowRight, ArrowLeft, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StepWizard: React.FC = () => {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [hours, setHours] = useState<number>(2);
  const [minutes, setMinutes] = useState<number>(30);
  const [startYear, setStartYear] = useState<number>(2019);
  const [age, setAge] = useState<number | undefined>(24);
  const [country, setCountry] = useState<string | undefined>('');
  const [selectedGoals, setSelectedGoals] = useState<GoalCategory[]>(['coding', 'fitness', 'business']);
  const [showTimeCollapse, setShowTimeCollapse] = useState(false);

  const handleToggleGoal = (goalId: GoalCategory) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    const inputData: UserInputState = {
      dailyHours: hours,
      dailyMinutes: minutes,
      startYear,
      age,
      country,
      selectedGoals: selectedGoals.length > 0 ? selectedGoals : ['coding', 'business'],
    };

    localStorage.setItem('scrollback_user_input', JSON.stringify(inputData));
    setShowTimeCollapse(true);
  };

  const handleCollapseComplete = () => {
    router.push('/results');
  };

  const currentYear = new Date().getFullYear();
  const estimatedYears = Math.max(1, currentYear - startYear + 1);
  const estimatedTotalDays = Math.round(((hours * 60 + minutes) * 365.25 * estimatedYears) / (24 * 60));

  return (
    <>
      {showTimeCollapse && (
        <TimeCollapseOverlay
          onComplete={handleCollapseComplete}
          years={estimatedYears}
          days={estimatedTotalDays}
        />
      )}

      <div className="w-full max-w-3xl mx-auto space-y-8">
        
        {/* Editorial Progress Header Bar */}
        <div className="border border-editorial-border bg-surface-50 p-4 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex items-center gap-1.5 px-3 py-1 font-bold ${
                  step === s
                    ? 'bg-accent-coral text-background'
                    : step > s
                    ? 'bg-surface-200 text-white'
                    : 'text-editorial-dim'
                }`}
              >
                <span>0{s}</span>
                {step > s && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            ))}
          </div>
          <span className="text-editorial-muted uppercase tracking-wider font-semibold">
            Step {step} of 3
          </span>
        </div>

        {/* Main Step Container */}
        <div className="border border-editorial-border bg-surface-50 p-6 sm:p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepTime
                  hours={hours}
                  minutes={minutes}
                  onChangeHours={setHours}
                  onChangeMinutes={setMinutes}
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepYear
                  startYear={startYear}
                  onChangeStartYear={setStartYear}
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <StepDetails
                  age={age}
                  country={country}
                  selectedGoals={selectedGoals}
                  onChangeAge={setAge}
                  onChangeCountry={setCountry}
                  onToggleGoal={handleToggleGoal}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wizard Controls */}
          <div className="pt-8 mt-8 border-t border-editorial-border flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 border border-editorial-border bg-surface-100 text-editorial-cream text-xs font-mono font-bold uppercase hover:bg-surface-200 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-coral text-background text-xs font-mono font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(255,77,77,0.3)] cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background text-sm font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(255,77,77,0.4)] cursor-pointer"
              >
                <span>Show Me My Scroll</span>
                <Sparkles className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
