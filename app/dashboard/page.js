'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import FullScreenLoader from '@/components/FullScreenLoader';

export default function Dashboard() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (loading) return <FullScreenLoader />;
  if (!user) router.push('/login');

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}