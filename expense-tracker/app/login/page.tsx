import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export default async function LoginPage({
    searchParams,
}: PageProps<'/login'>) {
    const { error } = await searchParams;

    async function authenticate(formData: FormData) {
        'use server';

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            await signIn('credentials', {
                email,
                password,
                redirectTo: '/expenses',
            });
        } catch (err) {
            if (err instanceof AuthError) {
                redirect('/login?error=true');
            }
            throw err;
        }
    }

    return (
        <div className="max-w-md">
            <h1 className="text-2xl font-semibold mb-6">Log In</h1>

            {error && (
                <p className="text-red-600 text-sm mb-4">
                    Invalid email or password. Please try again.
                </p>
            )}

            <form action={authenticate} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors mt-2"
                >
                    Log In
                </button>
            </form>
        </div>
    );
}