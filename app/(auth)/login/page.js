'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
import Link from 'next/link';
import AuthProviders from '@/components/AuthProviders';
import FullScreenLoader from '@/components/FullScreenLoader';
import ErrorMessage from '@/components/ErrorMessage';
import styles from '@/styles/Auth.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, loading, error, loginWithEmail } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push('/dashboard');
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (loading) return <FullScreenLoader />;

  return (
    <div className={styles.authContainer}>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit} className={styles.authForm}>
         <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ErrorMessage error={error} />
        <button type="submit">Sign In</button>
      </form>
      <AuthProviders />
      <p className={styles.switchAuth}>
        Don't have an account? <Link href="/register">Sign up</Link>
      </p>
    </div>
  );
}