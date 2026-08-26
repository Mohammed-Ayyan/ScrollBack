'use client';

import React, { useEffect, useState } from 'react';
import { TimeCapsuleExperience } from '@/components/capsule/TimeCapsuleExperience';
import { UserInputState, ScrollCalculationResult } from '@/types';
import { calculateScrollStats } from '@/lib/calculations';

export default function CapsulePage() {
  const [stats, setStats] = useState<ScrollCalculationResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('scrollback_user_input');
    let currentInput: UserInputState = {
      dailyHours: 2,
      dailyMinutes: 30,
      startYear: 2019,
      age: 24,
      selectedGoals: ['coding', 'fitness'],
    };

    if (saved) {
      try {
        currentInput = JSON.parse(saved);
      } catch (err) {
        console.error('Failed to parse saved user input', err);
      }
    }

    const calculated = calculateScrollStats(currentInput);
    setStats(calculated);
  }, []);

  return (
    <div className="min-h-screen bg-background text-editorial-cream py-12">
      <TimeCapsuleExperience pastDaysLost={stats ? stats.full24hDaysLost : 642} />
    </div>
  );
}
