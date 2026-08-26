import { PrismaClient } from '@prisma/client';

// Global memory cache fallback for zero-failure resilience
const memoryStore = new Map<string, any>();

let prismaInstance: PrismaClient | null = null;

try {
  prismaInstance = new PrismaClient({
    log: ['error'],
  });
} catch (e) {
  console.warn('Prisma engine initialization fallback to memory store');
}

export const prisma = prismaInstance;

export async function saveReport(data: {
  dailyHours: number;
  dailyMinutes: number;
  startYear: number;
  age?: number | null;
  country?: string | null;
  goals: string;
  totalDaysLost: number;
  estimatedReels: number;
  thumbDistanceKm: number;
}) {
  const shareCode = Math.random().toString(36).substring(2, 10);
  const reportObj = {
    id: shareCode,
    createdAt: new Date(),
    ...data,
    shareCode,
  };

  if (prismaInstance) {
    try {
      const saved = await prismaInstance.savedReport.create({
        data,
      });
      return saved;
    } catch (err) {
      console.warn('Database save fallback:', err);
    }
  }

  // Fallback to memory store
  memoryStore.set(shareCode, reportObj);
  memoryStore.set(reportObj.id, reportObj);
  return reportObj;
}

export async function getReportById(id: string) {
  if (prismaInstance) {
    try {
      const found = await prismaInstance.savedReport.findFirst({
        where: {
          OR: [{ id }, { shareCode: id }],
        },
      });
      if (found) return found;
    } catch (err) {
      console.warn('Database fetch fallback:', err);
    }
  }

  return memoryStore.get(id) || null;
}
