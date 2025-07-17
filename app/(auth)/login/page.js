'use client';
import { useState } from 'react';
import { emailSignIn } from '@/lib/firebase';
import AuthProviders from '@/components/AuthProviders';
import Link from 'next/link';
import styles from '@/styles/Auth.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailSignIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

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
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      
      <AuthProviders />
      
      <p className={styles.switchAuth}>
        New user? <Link href="/register">Register here</Link>
      </p>
    </div>
  );
}