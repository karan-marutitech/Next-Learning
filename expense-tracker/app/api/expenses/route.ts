import { NextResponse } from 'next/server';
import { expenses } from '@/app/lib/data';

export async function GET() {
    return NextResponse.json(expenses);
}