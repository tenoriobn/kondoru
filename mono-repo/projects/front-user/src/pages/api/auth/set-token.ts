/* eslint-disable no-unused-vars */
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function POST(req: Request) {
  try {
    const { accessToken } = await req.json();

    if (!accessToken) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 400 });
    }

    const response = NextResponse.json({ message: 'Token armazenado com sucesso!' });

    response.headers.set(
      'Set-cookie',
      `auth_token=${accessToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
    );

    return response;
  } catch (error) {
    console.error(error); 
    return NextResponse.json({ error: 'Erro ao armazenar accessToken' }, { status: 500 });
  }
}
