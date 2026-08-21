import Link from 'next/link';
import './global.css';
import { auth } from '@/auth';
import { logOut } from '@/app/lib/auth-actions';

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <nav className="bg-slate-800 text-white px-6 py-4 flex items-center gap-6">
          <strong className="text-lg tracking-wide">{process.env.NEXT_PUBLIC_APP_NAME}</strong>
          <div className="flex gap-4 flex-1">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
            <Link href="/expenses" className="hover:text-slate-300 transition-colors">
              Expenses
            </Link>
          </div>
          {session?.user ? (
            <form action={logOut}>
              <button type="submit" className="hover:text-slate-300 transition-colors">
                Log Out
              </button>
            </form>
          ) : (
            <Link href="/login" className="hover:text-slate-300 transition-colors">
              Log In
            </Link>
          )}
        </nav>
        <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}