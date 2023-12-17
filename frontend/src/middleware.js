import { NextResponse } from 'next/server';

export function middleware(req) {
    const { pathname, origin } = req?.nextUrl;
    const session = req?.cookies.get('Bearer') === undefined ? true : false;

    if (pathname.includes('/admin')) {
        if (session) return NextResponse.redirect(`${origin}/login`);
    }
}
