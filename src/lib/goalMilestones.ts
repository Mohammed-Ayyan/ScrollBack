import { GoalCategory, RealityMilestone } from '@/types';

export const GOAL_OPTIONS = [
  {
    id: 'coding' as GoalCategory,
    title: 'Learn Coding & Tech',
    subtitle: 'Build web apps, software & mobile apps',
    icon: '💻',
    color: 'from-blue-500 to-cyan-400',
    gradient: 'text-cyan-400',
  },
  {
    id: 'fitness' as GoalCategory,
    title: 'Physical Fitness',
    subtitle: 'Build muscle, transform body & stamina',
    icon: '🏋️',
    color: 'from-rose-500 to-orange-400',
    gradient: 'text-rose-400',
  },
  {
    id: 'business' as GoalCategory,
    title: 'Start a Business',
    subtitle: 'Launch a side hustle or SaaS startup',
    icon: '🚀',
    color: 'from-amber-500 to-yellow-400',
    gradient: 'text-amber-400',
  },
  {
    id: 'reading' as GoalCategory,
    title: 'Read & Learn',
    subtitle: 'Master psychology, history & science',
    icon: '📚',
    color: 'from-purple-500 to-indigo-400',
    gradient: 'text-purple-400',
  },
  {
    id: 'travel' as GoalCategory,
    title: 'Travel the World',
    subtitle: 'Explore new cultures & continents',
    icon: '✈️',
    color: 'from-emerald-500 to-teal-400',
    gradient: 'text-emerald-400',
  },
  {
    id: 'creativity' as GoalCategory,
    title: 'Music & Arts',
    subtitle: 'Learn guitar, digital art, or production',
    icon: '🎨',
    color: 'from-pink-500 to-purple-400',
    gradient: 'text-pink-400',
  },
];

export const ROADMAP_MILESTONES: Record<GoalCategory, RealityMilestone[]> = {
  coding: [
    {
      period: 'Month 1',
      title: 'HTML, CSS & JavaScript Fundamentals',
      description: 'Master core logic, interactive DOM manipulation, and modern frontend styling.',
      achievement: 'Built 3 interactive mini projects',
      goalId: 'coding',
    },
    {
      period: 'Month 6',
      title: 'Full-Stack Web Development',
      description: 'Master React, Next.js, databases, APIs, and authentication flow.',
      achievement: 'Deployed first full-stack SaaS application',
      goalId: 'coding',
    },
    {
      period: 'Year 1',
      title: 'Software Engineering Competency',
      description: 'Understand system design, performance optimization, and algorithm logic.',
      achievement: 'Contributed to major open-source repositories',
      goalId: 'coding',
    },
    {
      period: 'Year 3',
      title: 'Senior Developer Level Mastery',
      description: 'Architect complex cloud applications, lead technical projects, or launch tech startup.',
      achievement: 'High-earning software career or bootstrapped product',
      goalId: 'coding',
    },
  ],
  fitness: [
    {
      period: 'Month 1',
      title: 'Habit Formation & Routine',
      description: 'Established 4-day workout discipline and balanced nutritional baseline.',
      achievement: 'Gained energy and fixed posture',
      goalId: 'fitness',
    },
    {
      period: 'Month 6',
      title: 'Body Recomposition',
      description: 'Noticeable strength gains, reduced body fat, and cardiovascular endurance.',
      achievement: 'Ran a 10K race effortlessly',
      goalId: 'fitness',
    },
    {
      period: 'Year 1',
      title: 'Peak Physical Conditioning',
      description: 'Significantly increased muscle mass, flexibility, and overall athletic performance.',
      achievement: 'Completed a half-marathon / obstacle course',
      goalId: 'fitness',
    },
    {
      period: 'Year 3',
      title: 'Elite Athlete Transformation',
      description: 'Peak lifetime physical condition, resilience, and lifelong habit mastery.',
      achievement: 'Transformed overall longevity and energy levels',
      goalId: 'fitness',
    },
  ],
  business: [
    {
      period: 'Month 1',
      title: 'Validation & Market Research',
      description: 'Identified high-demand problems, customer personas, and value proposition.',
      achievement: 'Validated product concept with 20 real interviews',
      goalId: 'business',
    },
    {
      period: 'Month 6',
      title: 'MVP Launch & First Revenue',
      description: 'Built minimal viable product, established payment gateway, and acquired initial users.',
      achievement: 'Reached $1,000 Monthly Recurring Revenue',
      goalId: 'business',
    },
    {
      period: 'Year 1',
      title: 'Product-Market Fit & Scale',
      description: 'Automated sales funnels, refined product onboarding, and built organic reach.',
      achievement: 'Reached $10,000/month profitable revenue stream',
      goalId: 'business',
    },
    {
      period: 'Year 3',
      title: 'Independent Business Mastery',
      description: 'Established sustainable cash-flowing enterprise with team automation.',
      achievement: 'Achieved complete financial & location independence',
      goalId: 'business',
    },
  ],
  reading: [
    {
      period: 'Month 1',
      title: 'Daily Focused Reading Habit',
      description: 'Read 30 minutes every morning instead of scrolling screen.',
      achievement: 'Finished 5 landmark non-fiction books',
      goalId: 'reading',
    },
    {
      period: 'Month 6',
      title: 'Deep Subject Knowledge',
      description: 'Explored behavioral economics, philosophy, cognitive science, and history.',
      achievement: 'Completed 30 high-impact books',
      goalId: 'reading',
    },
    {
      period: 'Year 1',
      title: 'Polymath Perspective',
      description: 'Connected mental models across finance, science, human psychology, and technology.',
      achievement: 'Finished 60 books & published insightful summaries',
      goalId: 'reading',
    },
    {
      period: 'Year 3',
      title: 'Deep Wisdom & Mastery',
      description: 'Absorbed over 150 foundational texts, forming rare strategic clarity.',
      achievement: 'Built personal knowledge vault & writing audience',
      goalId: 'reading',
    },
  ],
  travel: [
    {
      period: 'Month 1',
      title: 'Budgeting & Expedition Planning',
      description: 'Saved travel funds and mapped itineraries across 3 dream destinations.',
      achievement: 'Booked flights for first international trip',
      goalId: 'travel',
    },
    {
      period: 'Month 6',
      title: 'First Major Journey',
      description: 'Immersed in local cultures, cuisines, and historical landmarks.',
      achievement: 'Explored 3 new countries & learned conversational phrases',
      goalId: 'travel',
    },
    {
      period: 'Year 1',
      title: 'Global Explorer',
      description: 'Backpacked through diverse continents, experiencing rich world traditions.',
      achievement: 'Visited 10 iconic world heritage locations',
      goalId: 'travel',
    },
    {
      period: 'Year 3',
      title: 'World Culture Fluency',
      description: 'Formed lifelong international friendships and profound global perspective.',
      achievement: 'Traveled to 25+ countries across 4 continents',
      goalId: 'travel',
    },
  ],
  creativity: [
    {
      period: 'Month 1',
      title: 'Creative Practice Baseline',
      description: 'Mastered instrument scales or digital design canvas tools.',
      achievement: 'Created first 10 digital illustrations or songs',
      goalId: 'creativity',
    },
    {
      period: 'Month 6',
      title: 'Portfolio & Expressive Confidence',
      description: 'Developed unique artistic style and smooth creative workflow.',
      achievement: 'Released an EP album or creative portfolio',
      goalId: 'creativity',
    },
    {
      period: 'Year 1',
      title: 'Refined Craft & Audience Connection',
      description: 'Exhibited artwork or performed live music in front of audiences.',
      achievement: 'Gained first 1,000 genuine fans of your work',
      goalId: 'creativity',
    },
    {
      period: 'Year 3',
      title: 'Master Artist Level',
      description: 'Commanded deep creative execution across complex multimedia formats.',
      achievement: 'Established respected creative portfolio or brand',
      goalId: 'creativity',
    },
  ],
};

export function getAlternateRealityRoadmap(selectedGoals: GoalCategory[]): RealityMilestone[] {
  if (!selectedGoals || selectedGoals.length === 0) {
    selectedGoals = ['coding', 'business'];
  }
  
  const milestones: RealityMilestone[] = [];
  const periods = ['Month 1', 'Month 6', 'Year 1', 'Year 3'];
  
  periods.forEach((period, idx) => {
    const goalForPeriod = selectedGoals[idx % selectedGoals.length];
    const categoryMilestones = ROADMAP_MILESTONES[goalForPeriod] || ROADMAP_MILESTONES.coding;
    const milestone = categoryMilestones.find(m => m.period === period) || categoryMilestones[idx % categoryMilestones.length];
    milestones.push(milestone);
  });
  
  return milestones;
}
