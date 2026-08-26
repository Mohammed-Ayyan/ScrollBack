'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: 'purple' | 'rose' | 'cyan' | 'amber' | 'emerald' | 'none';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = 'none',
  hoverEffect = true,
  ...props
}) => {
  const glowClasses = {
    none: '',
    purple: 'shadow-[0_0_40px_-10px_rgba(139,92,246,0.25)] border-purple-500/20 hover:border-purple-500/40',
    rose: 'shadow-[0_0_40px_-10px_rgba(244,63,94,0.25)] border-rose-500/20 hover:border-rose-500/40',
    cyan: 'shadow-[0_0_40px_-10px_rgba(6,182,212,0.25)] border-cyan-500/20 hover:border-cyan-500/40',
    amber: 'shadow-[0_0_40px_-10px_rgba(245,158,11,0.25)] border-amber-500/20 hover:border-amber-500/40',
    emerald: 'shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)] border-emerald-500/20 hover:border-emerald-500/40',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'relative rounded-2xl bg-surface-50/60 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300',
          hoverEffect && 'hover:-translate-y-1 hover:bg-surface-50/80 hover:shadow-2xl',
          glowClasses[glow],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
