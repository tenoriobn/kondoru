/* eslint-disable no-console */
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function GET(req: Request) {
  try {
    const cookie = req.headers.get('cookie');
    const authToken = cookie?.split(';').find(c => c.trim().startsWith('auth_token='));

    if (!authToken) {
      return NextResponse.json({ error: 'Token não encontrado' }, { status: 401 });
    }

    const tokenValue = authToken.split('=')[1];

    const response = NextResponse.json({ message: 'Token válido', token: tokenValue });
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao acessar o token' }, { status: 500 });
  }
}
