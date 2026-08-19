import { NextResponse } from 'next/server';
import { expenses } from '@/app/lib/data';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const expense = expenses.find((ex) => ex.id === parseInt(id));

    if (!expense) {
        return NextResponse.json(
            { error: 'Expense not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(expense);
}