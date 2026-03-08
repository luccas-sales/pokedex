import { NextRequest, NextResponse } from 'next/server';

export default function proxy(request: NextRequest) {
  const token = true;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
