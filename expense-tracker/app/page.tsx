import { getExpenses } from './lib/data';

export default async function Home() {
  const expenses = await getExpenses();
  return (
    <>
      <h2>Total No. Expenses: {expenses.length}</h2>
      <h2>Total Expense: ₹{expenses.reduce((sum, expense) => ( sum += expense.amount), 0)}</h2>
    </>
  );
}
