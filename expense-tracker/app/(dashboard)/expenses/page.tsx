import { expenses } from '../../lib/data';
import Link from 'next/link';

export default function ExpensesPage() {
    return (
        <>
            <h1>Expenses</h1>
            <ul>
                {expenses.map((expense) => <Link href={`/expenses/${expense.id}`} key={expense.id}> <li> {expense.title} </li> </Link>)}
            </ul>
        </>
    );
}