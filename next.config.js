/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // no X-Powered-By header, one less hint for scanners
  poweredByHeader: false,
  experimental: {
    // app/global-not-found.tsx: stray URLs need it because there are several root layouts
    globalNotFound: true,
  },
  allowedDevOrigins: ['himateja', 'localhost'],
  // past versions kept as plain files: public/v1 (2015) and public/v2-5 (2021)
  async rewrites() {
    return [
      { source: '/v1', destination: '/v1/index.html' },
      { source: '/v2-5', destination: '/v2-5/index.html' },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

// https://nextjs.org/docs/advanced-features/security-headers
// /v1 needs its jQuery from cdnjs and its Google Maps frame
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
    frame-src 'self' https://*.himateja.com https://iamhimateja.github.io https://codepen.io https://www.google.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = nextConfig
