import { getExpenses } from '@/app/lib/data';
import Link from 'next/link';

export default async function ExpensesPage() {
    const expenses = await getExpenses();
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Expenses</h1>
                <Link
                    href="/expenses/new"
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                    + Add Expense
                </Link>
            </div>

            <ul className="flex flex-col gap-3">
                {expenses.map((expense) => (
                    <Link
                        key={expense.id}
                        href={`/expenses/${expense.id}`}
                        className="block bg-white border border-gray-200 rounded-lg px-5 py-4 hover:shadow-md hover:border-slate-300 transition-all"
                    >
                        <li className="flex items-center justify-between list-none">
                            <div>
                                <p className="font-medium">{expense.title}</p>
                                <p className="text-sm text-gray-500">{expense.category} · {expense.date.toLocaleDateString('en-GB')}</p>
                            </div>
                            <p className="font-semibold text-slate-800">₹{expense.amount}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}