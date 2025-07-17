// app/not-found.js
import { redirect } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { getAuth } from 'firebase/auth';

export default async function NotFound() {
  const auth = getAuth();
  const user = auth.currentUser;
  
  if (user) {
    redirect('/dashboard');
  } else {
    redirect('/login');
  }
}