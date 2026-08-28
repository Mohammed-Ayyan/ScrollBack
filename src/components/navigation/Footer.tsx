'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

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

          <div className="py-2">
            <h2 className="text-4xl sm:text-7xl font-extrabold text-white tracking-tight justify-center">
              Your time is still yours.
            </h2>
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

      {/* Middle Section — Navigation & Internal Links */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        
        {/* Identity Block */}
        <motion.div variants={itemVariants} className="md:col-span-4 space-y-3 text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-accent-coral" />
            <span className="text-lg font-black font-mono tracking-tighter uppercase text-white">
              SCROLLBACK
            </span>
          </div>
          <p className="text-xs text-editorial-muted leading-relaxed max-w-sm">
            An interactive data storytelling experience and calculator revealing the true cost of Instagram screen time.
          </p>
        </motion.div>

        {/* Navigation & Core Calculators */}
        <motion.div variants={itemVariants} className="md:col-span-4 space-y-2 text-left">
          <p className="text-xs font-mono font-bold uppercase text-white">Calculators & Guides</p>
          <ul className="space-y-2 text-xs font-mono text-editorial-muted">
            <li><Link href="/instagram-time-calculator" className="hover:text-accent-coral transition-colors">Instagram Time Calculator</Link></li>
            <li><Link href="/reels-time-calculator" className="hover:text-accent-coral transition-colors">Reels Time Calculator</Link></li>
            <li><Link href="/screen-time-calculator" className="hover:text-accent-coral transition-colors">Screen Time Calculator</Link></li>
            <li><Link href="/how-to-check-instagram-time" className="hover:text-accent-coral transition-colors">How to Check IG Time</Link></li>
            <li><Link href="/how-instagram-time-is-calculated" className="hover:text-accent-coral transition-colors">Calculation Methodology</Link></li>
          </ul>
        </motion.div>

        {/* Data Privacy & Transparency */}
        <motion.div variants={itemVariants} className="md:col-span-4 space-y-2 text-left">
          <p className="text-xs font-mono font-bold uppercase text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Data Privacy & Local Processing
          </p>
          <p className="text-xs text-editorial-muted leading-relaxed">
            All calculations run 100% client-side in your browser. No Instagram login, credentials, or private data storage required.
          </p>
        </motion.div>

      </motion.div>

      {/* Bottom Bar — Copyright & Sitemap Link */}
      <div className="border-t border-editorial-border py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-editorial-dim">
          <p>© {new Date().getFullYear()} ScrollBack. Handcrafted for attention clarity.</p>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
            <span>•</span>
            <Link href="/how-instagram-time-is-calculated" className="hover:text-white transition-colors">Privacy & Methodology</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};
