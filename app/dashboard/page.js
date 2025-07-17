'use client';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome, {user.displayName || user.email}</h1>
        <p>This is your dashboard. Code generation features coming soon!</p>
      </main>
    </div>
  );
}