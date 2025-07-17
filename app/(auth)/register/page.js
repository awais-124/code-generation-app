'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import AuthProviders from '@/components/AuthProviders';
import FullScreenLoader from '@/components/FullScreenLoader';
import ErrorMessage from '@/components/ErrorMessage';
import styles from '@/styles/Auth.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, registerWithEmail } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerWithEmail(email, password);
      router.push('/login');
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  if (loading) return <FullScreenLoader />;

  return (
    <div className={styles.authContainer}>
      <h1>Create Account</h1>
      
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
        
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Register'}
        </button>
      </form>
      
      <AuthProviders />
      
      <p className={styles.switchAuth}>
        Already have an account? <Link href="/login">Login here</Link>
      </p>
    </div>
  );
}