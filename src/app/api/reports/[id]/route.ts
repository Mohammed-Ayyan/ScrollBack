import { NextResponse } from 'next/server';
import { getReportById } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const report = await getReportById(params.id);

    if (!report) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    return NextResponse.json({
      ...report,
      goals: typeof report.goals === 'string' ? JSON.parse(report.goals || '[]') : report.goals,
    });
  } catch (error: any) {
    console.error('Error fetching report:', error);
    return NextResponse.json({ error: 'Failed to fetch report' }, { status: 500 });
  }
}
