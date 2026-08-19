import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Expense not found</h1>
            <Link href="/expenses">Back to expenses</Link>
        </>
    );
}