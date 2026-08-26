import { UserInputState, ScrollCalculationResult } from '@/types';

export function calculateScrollStats(input: UserInputState): ScrollCalculationResult {
  const currentYear = new Date().getFullYear();
  const startYear = Math.max(2010, Math.min(input.startYear, currentYear));
  
  // Calculate exact days between start year and today
  const startDate = new Date(startYear, 0, 1);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
  const totalDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  
  const yearsWatching = Math.max(1, currentYear - startYear + 1);
  
  const dailyMinutesTotal = (input.dailyHours * 60) + input.dailyMinutes;
  
  // Total seconds spent watching reels
  const totalSecondsSpent = dailyMinutesTotal * 60 * totalDays;
  
  // Estimated reels watched (average 15 seconds per reel)
  const estimatedReels = Math.round(totalSecondsSpent / 15);
  
  // Total hours lost
  const totalHoursLost = Math.round((dailyMinutesTotal * totalDays) / 60);
  
  // Waking days (16 hours waking day)
  const wakingDaysLost = Number((totalHoursLost / 16).toFixed(1));
  
  // Full 24-hour days
  const full24hDaysLost = Number((totalHoursLost / 24).toFixed(1));
  
  // Decimal years & months
  const yearsLostDecimal = Number((totalHoursLost / (365.25 * 24)).toFixed(2));
  const monthsLostDecimal = Number((yearsLostDecimal * 12).toFixed(1));
  
  // Thumb distance: 4.5 cm per reel = 0.000045 km
  const thumbDistanceKm = Number((estimatedReels * 0.000045).toFixed(2));
  
  // Calories: 1.5 kcal/min idling
  const caloriesBurnedIdling = Math.round(dailyMinutesTotal * totalDays * 1.5);
  
  // Reality comparisons
  const booksCount = Math.max(1, Math.floor(totalHoursLost / 4)); // 4 hours per 60k word book
  const workoutsCount = Math.max(1, Math.floor(totalHoursLost / 1)); // 1 hr workout
  const languagesCount = Number((totalHoursLost / 600).toFixed(1)); // 600 hours for language fluency
  const appsBuiltCount = Math.max(1, Math.floor(totalHoursLost / 80)); // 80 hours per project
  const worldTripsCount = Math.max(1, Math.floor(totalHoursLost / 180)); // 180 hours per major trip
  
  // Percentile rank (Average user spends ~150 mins / 2.5h daily)
  const avgDailyMins = 150;
  let percentileRank = 50;
  if (dailyMinutesTotal < avgDailyMins) {
    percentileRank = Math.max(5, Math.round((dailyMinutesTotal / avgDailyMins) * 50));
  } else {
    percentileRank = Math.min(99, Math.round(50 + ((dailyMinutesTotal - avgDailyMins) / 240) * 49));
  }

  return {
    dailyMinutesTotal,
    yearsWatching,
    totalDays,
    totalHoursLost,
    wakingDaysLost,
    full24hDaysLost,
    yearsLostDecimal,
    monthsLostDecimal,
    estimatedReels,
    thumbDistanceKm,
    caloriesBurnedIdling,
    booksCount,
    workoutsCount,
    languagesCount,
    appsBuiltCount,
    worldTripsCount,
    percentileRank,
  };
}

export function formatTimeSpan(totalHours: number) {
  const years = Math.floor(totalHours / (365.25 * 24));
  const remainingHoursAfterYears = totalHours % (365.25 * 24);
  
  const months = Math.floor(remainingHoursAfterYears / (30.4375 * 24));
  const remainingHoursAfterMonths = remainingHoursAfterYears % (30.4375 * 24);
  
  const days = Math.floor(remainingHoursAfterMonths / 24);
  const hours = Math.floor(remainingHoursAfterMonths % 24);

  return { years, months, days, hours };
}
