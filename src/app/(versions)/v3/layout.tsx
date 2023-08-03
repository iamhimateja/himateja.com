import '@v3/styles/globals.css'
import '@v3/styles/colors.css'
import '@v3/styles/variables.css'

import { defaultMeta } from '@globals/constants'
import GoogleAnalytics from '@globals/GoogleAnalytics'
import { Footer, Navigation } from '@v3/components'
import { favicons } from '@v3/lib/variables'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(defaultMeta.url),
  title: defaultMeta.title,
  description: defaultMeta.description,
  robots: defaultMeta.robots,
  keywords: defaultMeta.keywords,
  manifest: '/favicon/manifest.json',
  themeColor: '#ffffff',
  alternates: {
    canonical: defaultMeta.url,
  },
  icons: {
    other: favicons,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultMeta.title,
    description: defaultMeta.description,
    site: defaultMeta.twitterHandle,
    creator: defaultMeta.twitterHandle,
    images: [
      {
        url: defaultMeta.ogImage,
        alt: defaultMeta.ogImageAlt,
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: defaultMeta.url,
    title: defaultMeta.title,
    siteName: defaultMeta.title,
    description: defaultMeta.description,
    images: [
      {
        url: defaultMeta.ogImage,
        alt: defaultMeta.ogImageAlt,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GoogleAnalytics />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
