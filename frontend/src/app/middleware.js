import { NextResponse } from 'next/server';

export function middleware(req) {
    const { pathname, origin } = req?.nextUrl;
    const session = req?.cookies.get('Bearer');
    console.log(session);

    // if (pathname.includes('/admin')) {
    //     console.log('yes');
    //     if (session) return NextResponse.redirect(`${origin}`);
    // }
}
