'use client';

import React from 'react';
import { StepWizard } from '@/components/calculator/StepWizard';

export default function CalculatorPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center">
      <StepWizard />
    </div>
  );
}
