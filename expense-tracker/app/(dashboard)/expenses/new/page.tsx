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
        <div>
            <h1>Create Expense</h1>
            <form action={createExpense}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" step="0.01" required />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" required />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}