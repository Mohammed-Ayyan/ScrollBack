'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface EditorialBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'subtle' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const EditorialBlock: React.FC<EditorialBlockProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-surface-50 border border-editorial-border hover:border-editorial-border-bright transition-colors',
    highlight: 'bg-surface-100 border border-accent-coral/30 hover:border-accent-coral/60 transition-colors',
    subtle: 'bg-transparent border border-editorial-border',
    accent: 'bg-surface-50 border-t-2 border-t-accent-coral border-x border-b border-editorial-border',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-12',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'relative text-editorial-cream',
          variantClasses[variant],
          paddingClasses[padding],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
