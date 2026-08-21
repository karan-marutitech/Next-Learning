import { NextResponse } from 'next/server';
import { getExpenses } from '@/app/lib/data';
import { auth } from '@/auth';

export async function GET() {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const expenses = await getExpenses();
    return NextResponse.json(expenses);
}