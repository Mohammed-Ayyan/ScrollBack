'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { TextReveal } from '@/components/ui/TextReveal';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

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
    hidden: { y: shouldReduceMotion ? 0 : 25, opacity: 0 },
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
    <footer className="w-full border-t border-editorial-border bg-background text-editorial-cream relative overflow-hidden">
      
      {/* Top Section — Viewport Triggered Final Statement */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
        className="border-b border-editorial-border bg-surface-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-surface-100 border border-editorial-border text-xs font-mono text-accent-coral uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Final Chapter // Attention & Freedom</span>
          </motion.div>

          {/* Word Stagger Mask Reveal */}
          <div className="py-2">
            <TextReveal
              text="Your time is still yours."
              as="h2"
              className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight justify-center"
            />
          </div>

          <motion.p variants={itemVariants} className="text-base sm:text-lg text-editorial-muted max-w-2xl mx-auto leading-relaxed font-normal">
            ScrollBack helps you understand where your attention goes — and what you want to do with it next.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,77,77,0.3)] group"
            >
              <span>Calculate Your Time</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Middle Section — Restrained Navigation & Privacy Guarantee */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        
        {/* Identity Block */}
        <motion.div variants={itemVariants} className="md:col-span-5 space-y-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-accent-coral" />
            <span className="text-lg font-black font-mono tracking-tighter uppercase text-white">
              SCROLLBACK
            </span>
          </div>
          <p className="text-xs text-editorial-muted leading-relaxed max-w-sm">
            An editorial data storytelling report designed to illuminate the cumulative cost of short-form video scrolling.
          </p>
        </motion.div>

        {/* Restrained Navigation */}
        <motion.div variants={itemVariants} className="md:col-span-3 space-y-2 text-left">
          <p className="text-xs font-mono font-bold uppercase text-white">Navigation</p>
          <ul className="space-y-2 text-xs font-mono text-editorial-muted">
            <li><Link href="/#your-time" className="hover:text-white transition-colors">Your Time</Link></li>
            <li><Link href="/#timeline" className="hover:text-white transition-colors">Timeline</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="/calculator" className="hover:text-white transition-colors">Calculator</Link></li>
          </ul>
        </motion.div>

        {/* Data Privacy & Calculations Note */}
        <motion.div variants={itemVariants} className="md:col-span-4 space-y-2 text-left">
          <p className="text-xs font-mono font-bold uppercase text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-emerald" />
            Data Transparency
          </p>
          <p className="text-xs text-editorial-muted leading-relaxed">
            All calculations run 100% client-side in your browser. No personal data tracking or user account login required.
          </p>
        </motion.div>

      </motion.div>

      {/* Bottom Bar — Small Copyright & Metadata */}
      <div className="border-t border-editorial-border py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-editorial-dim">
          <p>© {new Date().getFullYear()} ScrollBack. Handcrafted for attention clarity.</p>
          <p>Time Engine v2.0 // Client-Side Audit</p>
        </div>
      </div>

    </footer>
  );
};
