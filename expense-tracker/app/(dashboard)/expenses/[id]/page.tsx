import { expenses } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function ExpensePage({ params }: PageProps<'/expenses/[id]'>) {
    
    const { id } = await params;

    const expense = expenses.find(ex => ex.id === parseInt(id));

    if(!expense) notFound();

    return (
        <>
            <div>
                <h1>Expense: {expense.id}</h1>
                <h2>Expense Title: {expense.title}</h2>
                <h2>Expense Amount: {expense.amount}</h2>
                <h2>Expense Category: {expense.category}</h2>
                <h2>Expense Date: {expense.date}</h2>
            </div>
        </>
    )
}