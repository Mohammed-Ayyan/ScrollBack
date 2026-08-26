export type GoalCategory = 
  | 'coding'
  | 'fitness'
  | 'business'
  | 'reading'
  | 'travel'
  | 'creativity';

export interface GoalOption {
  id: GoalCategory;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  gradient: string;
}

export interface UserInputState {
  dailyHours: number;
  dailyMinutes: number;
  startYear: number;
  age?: number;
  country?: string;
  selectedGoals: GoalCategory[];
}

export interface ScrollCalculationResult {
  dailyMinutesTotal: number;
  yearsWatching: number;
  totalDays: number;
  totalHoursLost: number;
  wakingDaysLost: number; // Based on 16 waking hours/day
  full24hDaysLost: number; // Based on 24 hours/day
  yearsLostDecimal: number;
  monthsLostDecimal: number;
  estimatedReels: number;
  thumbDistanceKm: number;
  caloriesBurnedIdling: number;
  booksCount: number;
  workoutsCount: number;
  languagesCount: number;
  appsBuiltCount: number;
  worldTripsCount: number;
  percentileRank: number; // Compared to global average
}

export interface HistoricalEvent {
  year: number;
  title: string;
  description: string;
  category: 'tech' | 'space' | 'world' | 'culture' | 'science';
  icon: string;
}

export interface RealityMilestone {
  period: string; // e.g. "Month 1", "Month 6", "Year 1", "Year 3"
  title: string;
  description: string;
  achievement: string;
  goalId: GoalCategory;
}

export interface TimeGoalOption {
  id: string;
  label: string;
  category: string;
  iconName: 'laptop' | 'dumbbell' | 'rocket' | 'palette' | 'heart' | 'book' | 'globe' | 'sparkles';
  color: string;
  description: string;
}

export interface TimeCapsuleData {
  id: string;
  selectedGoalId: string;
  selectedGoalLabel: string;
  customGoal?: string;
  promiseText: string;
  pastDaysLost: number;
  dailyReclaimedMinutes: number;
  createdAt: string;
}
