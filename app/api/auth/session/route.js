import { cookies } from 'next/headers';

export async function POST(request) {
  const { token } = await request.json();
  
  if (!token) {
    return new Response('Token required', { status: 400 });
  }

  cookies().set('__session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });

  return new Response('Session created', { status: 200 });
}

export async function DELETE() {
  cookies().delete('__session');
  return new Response('Session deleted', { status: 200 });
}