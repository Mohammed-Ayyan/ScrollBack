'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, ChevronDown, Compass, AlertCircle, Sparkles } from 'lucide-react';
import { InteractiveReelFeed } from './InteractiveReelFeed';
import { TextReveal } from '@/components/ui/TextReveal';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [secondsOnPage, setSecondsOnPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsOnPage((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const globalHoursLost = Math.floor(secondsOnPage * 142.5);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const visualScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.9]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={containerRef} className="relative border-b border-editorial-border py-16 lg:py-24 overflow-hidden time-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Ticking Time Notice */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-3 bg-surface-50/90 border border-accent-coral/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl backdrop-blur-md shadow-lg"
        >
          <div className="flex items-center gap-2.5 text-xs font-mono text-white">
            <Clock className="w-4 h-4 text-accent-coral animate-spin" style={{ animationDuration: '8s' }} />
            <span>
              Time spent on this page: <strong className="text-accent-coral">{secondsOnPage}s</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-editorial-dim">
            <AlertCircle className="w-3.5 h-3.5 text-accent-coral" />
            <span>Globally ~<strong className="text-white font-mono">{globalHoursLost.toLocaleString()} hrs</strong> lost since you landed</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Time Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tag Reveal */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-surface-100 border border-editorial-border text-xs font-mono text-accent-coral uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Time Audit Engine</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <TextReveal
                text="Where did your actual"
                as="h1"
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
              />
              <TextReveal
                text="time disappear?"
                as="h1"
                delay={0.2}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-accent-coral leading-[1.05]"
              />
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-editorial-muted max-w-xl font-normal leading-relaxed"
            >
              Short videos consume your days in 15-second slices. Audit your life timeline and see the scale of what was given away.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-coral text-background font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(255,77,77,0.3)] group"
              >
                <Compass className="w-4 h-4" />
                <span>Enter Personal Time Machine</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#time-stages"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-editorial-border bg-surface-50 hover:bg-surface-100 text-editorial-cream font-medium text-sm transition-colors"
              >
                <span>Explore the Time Stages</span>
                <ChevronDown className="w-4 h-4 text-editorial-dim" />
              </Link>
            </motion.div>

            {/* Metadata Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-8 border-t border-editorial-border grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <p className="text-xs font-mono text-editorial-dim uppercase">Slice Unit</p>
                <p className="text-lg font-bold text-white font-mono">15 Seconds</p>
              </div>
              <div>
                <p className="text-xs font-mono text-editorial-dim uppercase">Daily Average</p>
                <p className="text-lg font-bold text-white font-mono">2.5 Hours</p>
              </div>
              <div>
                <p className="text-xs font-mono text-editorial-dim uppercase">Decade Cost</p>
                <p className="text-lg font-bold text-accent-coral font-mono">~38 Waking Days/Yr</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column — Time Visual Component */}
          <motion.div
            style={{ scale: visualScale, opacity: visualOpacity }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <InteractiveReelFeed />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
