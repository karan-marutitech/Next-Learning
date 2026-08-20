import { addExpense } from '@/app/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function CreateExpensePage() {
    async function createExpense(formData: FormData) {
        'use server';

        const title = formData.get('title') as string;
        const amount = parseFloat(formData.get('amount') as string);
        const category = formData.get('category') as string;

        addExpense(title, amount, category);

        revalidatePath('/expenses');
        redirect('/expenses');
    }

    return (
        <div className="max-w-md">
            <h1 className="text-2xl font-semibold mb-6">Create Expense</h1>
            <form action={createExpense} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="amount" className="text-sm font-medium text-gray-700">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        step="0.01"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors mt-2"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
}