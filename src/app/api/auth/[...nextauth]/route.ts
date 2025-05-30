import NextAuth from 'next-auth'
import { type NextRequest } from 'next/server'
import { authOptions } from '@/lib/auth'

const auth = NextAuth(authOptions)

export async function GET(request: NextRequest) {
  return await auth(request)
}

export async function POST(request: NextRequest) {
  return await auth(request)
}

export const dynamic = 'force-dynamic'