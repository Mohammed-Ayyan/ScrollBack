'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Hourglass, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CinematicTransitionProps {
  onComplete: () => void;
}

export const CinematicTransition: React.FC<CinematicTransitionProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1800);
    const t2 = setTimeout(() => setStage(2), 4200);
    const t3 = setTimeout(() => setStage(3), 6800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[520px] bg-gradient-to-b from-background via-surface-50 to-background border border-editorial-border p-8 sm:p-12 flex flex-col items-center justify-center text-center overflow-hidden select-none">
      
      {/* Slowing Clock Radial Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-coral/10 rounded-full blur-3xl pointer-events-none animate-time-pulse" />

      {/* Central Slowing Clock Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 relative"
      >
        <div className="w-20 h-20 rounded-full border-2 border-accent-coral/60 bg-surface-100 flex items-center justify-center relative shadow-[0_0_30px_rgba(255,77,77,0.3)]">
          <Clock className="w-10 h-10 text-accent-coral animate-spin" style={{ animationDuration: '16s' }} />
        </div>
      </motion.div>

      {/* Cinematic Text Reveal Sequence */}
      <div className="max-w-2xl mx-auto space-y-6 min-h-[160px] flex flex-col items-center justify-center">
        {stage >= 0 && (
          <motion.div
            key="stage0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-coral flex items-center justify-center gap-1.5">
              <Hourglass className="w-4 h-4" /> THE REFLECTION TRANSITION
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              You just saw where your time went.
            </h3>
          </motion.div>
        )}

        {stage >= 1 && (
          <motion.p
            key="stage1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-3xl font-extrabold text-accent-coral tracking-tight font-mono"
          >
            Now decide where it goes next.
          </motion.p>
        )}

        {stage >= 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2 pt-2"
          >
            <p className="text-base sm:text-lg text-editorial-muted font-normal max-w-lg mx-auto">
              Your past time is gone. Your future time is still yours.
            </p>
            <p className="text-xs font-mono font-bold text-accent-emerald uppercase tracking-wider flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent-emerald" /> Protect your next hour
            </p>
          </motion.div>
        )}
      </div>

      {/* Action Button */}
      {stage >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-8"
        >
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(255,77,77,0.4)] cursor-pointer group"
          >
            <Sparkles className="w-4 h-4" />
            <span>Create My Time Capsule</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      )}

    </div>
  );
};
