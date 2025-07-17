'use client';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CodeGen AI</div>
      <div className={styles.links}>
        <Link href="/dashboard">Dashboard</Link>
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </nav>
  );
}