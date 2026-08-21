import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
    console.log(req.nextUrl.pathname);

    const isLoggedIn = !!req.auth;
    const isOnExpenses = req.nextUrl.pathname.startsWith('/expenses');

    if (isOnExpenses && !isLoggedIn) {
        const loginUrl = new URL('/login', req.nextUrl);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
});

export const config = {
    matcher: ['/expenses/:path*'],
};