import 'react-tippy/dist/tippy.css'
import '@styles/variables.css'
import '@styles/globals.scss'

import ClientHelpers from '@components/ClientHelpers'
import Navigation from '@components/Navigation'
import { defaultMeta } from '@globals/constants'
import { favicons } from '@utils/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(defaultMeta.url),
  title: 'himateja.',
  description: defaultMeta.description,
  robots: defaultMeta.robots,
  keywords: defaultMeta.keywords,
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
        url: '/images/og-metadata-dark.webp',
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
        url: '/images/og-metadata-dark.webp',
        alt: defaultMeta.ogImageAlt,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientHelpers />
        <section className="main-section">{children}</section>
        <Navigation />
      </body>
    </html>
  )
}
