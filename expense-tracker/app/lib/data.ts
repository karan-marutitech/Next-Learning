import { prisma } from '@/app/lib/prisma';
import { auth } from '@/auth';
import type { Expense } from '@prisma/client';

export type { Expense };

export async function getExpenses(): Promise<Expense[]> {
    const session = await auth();
    if(!session?.user?.id) return [];

    return prisma.expense.findMany({
        where: { userId: parseInt(session.user.id) },
        orderBy: { date: 'desc' },
    });
}

export async function getExpenseById(id: number): Promise<Expense | null> {
    const session = await auth();
    if(!session?.user?.id) return null;

    return prisma.expense.findUnique({
        where: { id, userId: parseInt(session.user.id) },
    });
}

export async function addExpense(title: string, amount: number, category: string): Promise<Expense> {
    const session = await auth();
    if(!session?.user?.id) throw new Error("You must logged in to add an expense.");

    return prisma.expense.create({
        data: { title, amount, category, userId: parseInt(session.user.id) },
    });
}