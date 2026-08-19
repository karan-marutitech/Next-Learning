import { expenses } from './lib/data';

export default function Home() {

  return (
    <>
      <h2>Total No. Expenses: {expenses.length}</h2>
      <h2>Total Expense: ₹{expenses.reduce((sum, expense) => ( sum += expense.amount), 0)}</h2>
    </>
  );
}
