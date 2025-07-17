'use client';
import styles from '@/styles/Auth.module.css';

export default function ErrorMessage({ error }) {
  if (!error) return null;

  const errorMessages = {
    'auth/user-not-found': 'User not found',
    'auth/wrong-password': 'Incorrect password',
    'auth/email-already-in-use': 'Email already in use',
    // Add more mappings as needed
  };

  const friendlyMessage = errorMessages[error.code] || error.message;

  return <p className={styles.error}>{friendlyMessage}</p>;
}