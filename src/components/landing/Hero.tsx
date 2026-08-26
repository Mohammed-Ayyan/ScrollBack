'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, ChevronDown } from 'lucide-react';
import { InteractiveReelFeed } from './InteractiveReelFeed';
import { TextReveal } from '@/components/ui/TextReveal';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const visualScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.9]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={containerRef} className="relative border-b border-editorial-border py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Motion & Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tag Reveal */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-surface-100 border border-editorial-border text-xs font-mono text-accent-coral uppercase tracking-wider"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Personal Data Report Engine</span>
            </motion.div>

            {/* Line/Word Mask Staggered Headline Reveal */}
            <div className="space-y-2">
              <TextReveal
                text="How much of your life"
                as="h1"
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
              />
              <TextReveal
                text="went into scrolling?"
                as="h1"
                delay={0.2}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-accent-coral leading-[1.05]"
              />
            </div>

            {/* Supporting Copy Reveal */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-editorial-muted max-w-xl font-normal leading-relaxed"
            >
              Enter your Reels screen time. We&apos;ll show you what those hours became.
            </motion.p>

            {/* CTAs Reveal */}
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
                <span>Calculate My Scroll</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-editorial-border bg-surface-50 hover:bg-surface-100 text-editorial-cream font-medium text-sm transition-colors"
              >
                <span>See an example</span>
                <ChevronDown className="w-4 h-4 text-editorial-dim" />
              </Link>
            </motion.div>

            {/* Micro Editorial Metadata Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-8 border-t border-editorial-border grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <p className="text-xs font-mono text-editorial-dim uppercase">Standard Reel</p>
                <p className="text-lg font-bold text-white font-mono">15s Average</p>
              </div>
              <div>
                <p className="text-xs font-mono text-editorial-dim uppercase">Global Benchmark</p>
                <p className="text-lg font-bold text-white font-mono">2.5h / day</p>
              </div>
              <div>
                <p className="text-xs font-mono text-editorial-dim uppercase">Data Privacy</p>
                <p className="text-lg font-bold text-accent-coral font-mono">100% Private</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column — Scroll Parallax Visual Transformation */}
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
