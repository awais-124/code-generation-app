'use client';
import { useAuth } from '@/context/AuthProvider';
import { useEffect, useRef } from 'react';
import styles from '@/styles/Auth.module.css';

export default function AuthProviders() {
  const { loginWithProvider } = useAuth();
  const popupRef = useRef(null);

  const handleProviderLogin = async (providerType) => {
    try {
      // Close any existing popup
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }

      // Open new popup with same-origin features
      popupRef.current = window.open(
        '',
        '_blank',
        'width=500,height=600,top=100,left=100'
      );

      // Perform the auth flow
      await loginWithProvider(providerType);

      // Close the popup after successful auth
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }
    } catch (error) {
      console.error('Provider login error:', error);
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }
    }
  };

  // Cleanup popup on unmount
  useEffect(() => {
    return () => {
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }
    };
  }, []);

  return (
    <div className={styles.authProviders}>
      <button 
        onClick={() => handleProviderLogin('google')}
        className={styles.googleBtn}
      >
        Continue with Google
      </button>
      <button 
        onClick={() => handleProviderLogin('github')}
        className={styles.githubBtn}
      >
        Continue with GitHub
      </button>
    </div>
  );
}