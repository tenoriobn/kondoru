import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import properties from './properties.json';

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get('page')) || 1;
  const perPage = Number(req.nextUrl.searchParams.get('limit')) || 6;

  const totalItems = properties.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;

  const data = properties.slice(start, end);

  return NextResponse.json({
    data,
    meta: {
      page,
      perPage,
      totalItems,
      totalPages,
    },
  });
}
