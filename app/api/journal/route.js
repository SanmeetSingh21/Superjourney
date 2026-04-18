import { NextResponse } from 'next/server';
import { stories } from '@/data/stories';

export async function GET() {
  try {
    return NextResponse.json(stories);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching stories' }, { status: 500 });
  }
}
