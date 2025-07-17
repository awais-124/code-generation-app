'use client';
import { useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { getRedirectResult } from 'firebase/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          router.push('/dashboard');
        } else {
          const user = auth.currentUser;
          if (user) {
            router.push('/dashboard');
          } else {
            router.push('/login');
          }
        }
      } catch (error) {
        console.error('Redirect handling error:', error);
        router.push('/login');
      }
    };

    handleAuthRedirect();
  }, [router]);

  return null;
}