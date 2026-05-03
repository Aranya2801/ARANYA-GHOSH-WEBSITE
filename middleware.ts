import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Future: protect /admin routes with NextAuth
// import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Admin protection (enable when NextAuth is set up) ──
  // if (pathname.startsWith('/admin')) {
  //   const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  //   if (!token) {
  //     return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  //   }
  // }

  // ── Security headers ──
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  // Run middleware on all routes except static files and Next internals
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
