'use client';
import { signInWithGoogle, signInWithGithub } from '@/lib/firebase';
import styles from '@/styles/Auth.module.css';

export default function AuthProviders() {
  return (
    <div className={styles.authProviders}>
      <button 
        onClick={signInWithGoogle}
        className={styles.googleBtn}
      >
        Continue with Google
      </button>
      <button 
        onClick={signInWithGithub}
        className={styles.githubBtn}
      >
        Continue with GitHub
      </button>
    </div>
  );
}