import { NextResponse } from 'next/server';
import { saveReport } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      dailyHours,
      dailyMinutes,
      startYear,
      age,
      country,
      goals,
      totalDaysLost,
      estimatedReels,
      thumbDistanceKm,
    } = body;

    const report = await saveReport({
      dailyHours: Number(dailyHours || 0),
      dailyMinutes: Number(dailyMinutes || 0),
      startYear: Number(startYear || 2020),
      age: age ? Number(age) : null,
      country: country || null,
      goals: JSON.stringify(goals || []),
      totalDaysLost: Number(totalDaysLost || 0),
      estimatedReels: Number(estimatedReels || 0),
      thumbDistanceKm: Number(thumbDistanceKm || 0),
    });

    return NextResponse.json({ success: true, report });
  } catch (error: any) {
    console.error('Error saving report:', error);
    return NextResponse.json({ error: 'Failed to save report' }, { status: 500 });
  }
}
