'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowRight, Menu, X, Clock, Compass } from 'lucide-react';
import { clsx } from 'clsx';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Magnetic CTA hover effect states
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (shouldReduceMotion || !ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.2);
    mouseY.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Your Time', href: '/results#your-time' },
    { label: 'Timeline', href: '/results#timeline' },
    { label: 'Future', href: '/results#future' },
    { label: 'Calculate', href: '/calculator' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          'sticky top-0 z-40 w-full transition-all duration-300 border-b border-editorial-border',
          scrolled
            ? 'h-16 bg-background/90 backdrop-blur-md shadow-2xl'
            : 'h-20 bg-background/95'
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Wordmark */}
          <motion.div
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-2.5 h-2.5 bg-accent-coral transition-transform group-hover:scale-125" />
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black font-mono tracking-tighter uppercase text-white group-hover:text-accent-coral transition-colors">
                  SCROLLBACK
                </span>
                <span className="text-[10px] font-mono font-bold text-accent-coral tracking-widest uppercase">
                  // TIME
                </span>
              </div>
            </Link>

            {/* Live Ticking Time Widget */}
            {currentTime && (
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 bg-surface-100 border border-editorial-border text-[11px] font-mono text-editorial-dim">
                <Clock className="w-3 h-3 text-accent-coral animate-spin" style={{ animationDuration: '6s' }} />
                <span>{currentTime}</span>
              </div>
            )}
          </motion.div>

          {/* Sequential Nav Items Reveal */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={idx}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="relative py-1 text-xs font-mono font-bold uppercase tracking-wider text-editorial-muted hover:text-white transition-colors group inline-block"
                  >
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">
                      {link.label}
                    </span>

                    {/* Animated Underline */}
                    <span
                      className={clsx(
                        'absolute bottom-0 left-0 h-0.5 bg-accent-coral transition-all duration-300 ease-out',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Magnetic CTA Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="hidden md:flex items-center gap-4"
          >
            <motion.div style={{ x: springX, y: springY }}>
              <Link
                ref={ctaRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                href="/calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,77,77,0.3)] relative overflow-hidden group"
              >
                <Compass className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10">Audit Your Time</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-editorial-muted hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-accent-coral" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 border-b border-editorial-border md:hidden"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-editorial-border pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-accent-coral" />
                <span className="text-lg font-black font-mono tracking-tighter uppercase text-white">
                  SCROLLBACK
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-editorial-muted hover:text-white"
              >
                <X className="w-6 h-6 text-accent-coral" />
              </button>
            </div>

            {/* Main Display Navigation Links */}
            <div className="space-y-6 my-auto text-left">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-coral flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> TIME JOURNEY NAVIGATION
              </span>
              <div className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-3xl sm:text-4xl font-extrabold text-white hover:text-accent-coral transition-colors tracking-tight"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Action CTA & Identity Footer */}
            <div className="space-y-6 pt-6 border-t border-editorial-border">
              <Link
                href="/calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-3 py-4 bg-accent-coral text-background font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,77,77,0.4)]"
              >
                <span>Audit Your Time</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between text-[10px] font-mono text-editorial-dim">
                <span>© {new Date().getFullYear()} ScrollBack</span>
                <span>Time Audit Engine</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
