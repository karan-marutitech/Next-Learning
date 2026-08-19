interface Expense {
    id: number;
    title: string;
    amount: number;
    category: string;
    date: string;
}

export const expenses : Expense[] = [
    {id: 1, title: 'Lunch', amount: 200, category: 'Food', date: '15/08/26'},
    {id: 2, title: 'Grocery', amount: 1000, category: 'Shopping', date: '13/08/26'},
    {id: 3, title: 'Movie', amount: 700, category: 'Entertainment', date: '16/08/26'},
    {id: 4, title: 'Medicine', amount: 2000, category: 'Health', date: '10/08/26'},
    {id: 5, title: 'Rent', amount: 12000, category: 'Housing', date: '01/08/26'}
];

export function addExpense(title: string, amount: number, category: string) {
    const newExpense: Expense = {
        id: expenses.length > 0 ? Math.max(...expenses.map((e) => e.id)) + 1 : 1,
        title,
        amount,
        category,
        date: new Date().toLocaleDateString('en-GB'),
    };

    expenses.push(newExpense);
    return newExpense;
}