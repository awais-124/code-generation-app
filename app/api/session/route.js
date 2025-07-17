import { auth } from '@/lib/firebase';
import { cookies } from 'next/headers';

export async function GET() {
  const session = cookies().get('__session')?.value;
  return new Response(JSON.stringify({ session }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}