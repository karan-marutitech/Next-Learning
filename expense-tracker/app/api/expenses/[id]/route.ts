import { NextResponse } from 'next/server';
import { getExpenseById } from '@/app/lib/data';
import { auth } from '@/auth';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const expense = await getExpenseById(parseInt(id));

    if (!expense) {
        return NextResponse.json(
            { error: 'Expense not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(expense);
}