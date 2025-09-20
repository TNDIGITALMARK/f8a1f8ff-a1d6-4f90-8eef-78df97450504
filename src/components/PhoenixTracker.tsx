'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function PhoenixTracker() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/phoenix-tracking.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Script
      src="/phoenix-tracking.js"
      strategy="afterInteractive"
    />
  );
}