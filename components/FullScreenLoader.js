'use client';
import styles from '@/styles/Loader.module.css';

export default function FullScreenLoader() {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
}