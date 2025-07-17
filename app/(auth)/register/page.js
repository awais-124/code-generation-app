'use client';
import { useState } from 'react';
import { emailRegister } from '@/lib/firebase';
import AuthProviders from '@/components/AuthProviders';
import Link from 'next/link';
import styles from '@/styles/Auth.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailRegister(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

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
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Register</button>
      </form>
      
      <AuthProviders />
      
      <p className={styles.switchAuth}>
        Already have an account? <Link href="/login">Login here</Link>
      </p>
    </div>
  );
}