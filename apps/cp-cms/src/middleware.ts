import { NextURL } from 'next/dist/server/web/next-url'
import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host')

  // TODO: Adequar host dinamicamente
  const currentHost =
    process.env.NODE_ENV === 'production'
      ? hostname?.replace(`.cp-platform.vercel.app`, '') // OUR DOMAIN HERE
      : hostname?.replace(`.localhost:3000`, '')

  if (pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 })
  }

  if (!pathname.includes('.') && !pathname.startsWith('/api')) {
    return NextResponse.rewrite(
      new NextURL(`/${currentHost}${pathname}`, request.url)
    )
  }
}
