/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export default async function DELETE(req: Request) { // eslint-disable-line @typescript-eslint/no-unused-vars
  try {
    const response = NextResponse.json({ message: 'Token excluído com sucesso!' });
    
    response.headers.set(
      'Set-cookie',
      'auth_token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0',
    );

    return response;
  } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars

    return NextResponse.json({ error: 'Erro ao excluir o token' }, { status: 500 });
  }
}
