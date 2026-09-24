import { defaultMeta } from '@globals/constants'
import GoogleAnalytics from '@globals/GoogleAnalytics'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

/* himateja.in, rebuilt from the archived page (Wayback, Mar 2018). */

const sourceCodePro = localFont({
  src: [
    { path: './_fonts/source-code-pro-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './_fonts/source-code-pro-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './_fonts/source-code-pro-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(defaultMeta.url),
  title: 'Himateja - Designer & Developer',
  description: 'himateja.in, the site from 2015 to 2018. Kept as it was.',
  robots: 'noindex, nofollow',
  alternates: { canonical: `${defaultMeta.url}/v2` },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceCodePro.className}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
