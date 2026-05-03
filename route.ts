import { NextResponse } from 'next/server'
import { PROJECTS } from '@/lib/data'

export async function GET() {
  // In production: fetch from PostgreSQL via Prisma
  // const projects = await prisma.project.findMany({ orderBy: { order: 'asc' } })
  return NextResponse.json(PROJECTS)
}
