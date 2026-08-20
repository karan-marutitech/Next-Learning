import { prisma } from '@/app/lib/prisma';
import type { Expense } from '@prisma/client';

export type { Expense };

// interface Expense {
//     id: number;
//     title: string;
//     amount: number;
//     category: string;
//     date: string;
// }

// export const expenses : Expense[] = [
//     {id: 1, title: 'Lunch', amount: 200, category: 'Food', date: '15/08/26'},
//     {id: 2, title: 'Grocery', amount: 1000, category: 'Shopping', date: '13/08/26'},
//     {id: 3, title: 'Movie', amount: 700, category: 'Entertainment', date: '16/08/26'},
//     {id: 4, title: 'Medicine', amount: 2000, category: 'Health', date: '10/08/26'},
//     {id: 5, title: 'Rent', amount: 12000, category: 'Housing', date: '01/08/26'}
// ];

export async function getExpenses(): Promise<Expense[]> {
    return prisma.expense.findMany({
        orderBy: { date: 'desc' },
    });
}

export async function getExpenseById(id: number): Promise<Expense | null> {
    return prisma.expense.findUnique({
        where: { id },
    });
}

export async function addExpense(title: string, amount: number, category: string): Promise<Expense> {
    return prisma.expense.create({
        data: { title, amount, category },
    });
}