/** @type {import('next').NextConfig} */

// next.config.mjs
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://code-gen-ai-930-netlify.app',
  },
 async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups' // Critical fix
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp' // For secure cross-origin isolation
          }
        ],
      },
    ];
  },
};

export default nextConfig;