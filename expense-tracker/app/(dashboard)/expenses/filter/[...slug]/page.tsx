import { expenses } from '@/app/lib/data';

export default async function FilterPage({ params }: PageProps<'/expenses/filter/[...slug]'>) {
    const { slug } = await params;
    const [year, month] = slug;

    const filtered = expenses.filter((expense) => {
        const [, expMonth, expYearShort] = expense.date.split('/');
        const expYear = `20${expYearShort}`;

        if (month) {
            return expYear === year && expMonth === month.padStart(2, '0');
        }
        return expYear === year;
    });

    return (
        <div>
            <h1>Filtered Expenses ({slug.join('/')})</h1>
            {filtered.length === 0 ? (
                <p>No expenses found for this period.</p>
            ) : (
                <ul>
                    {filtered.map((expense) => (
                        <li key={expense.id}>
                            {expense.title} - ₹{expense.amount} ({expense.date})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}