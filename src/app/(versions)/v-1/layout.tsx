import '@v-1/_styles/variables.css'
import '@v-1/_styles/globals.css'
import 'react-tippy/dist/tippy.css'

import ClientHelpers from '@v-1/_components/ClientHelpers'
import Footer from '@v-1/_components/Footer'
import FooterNavigation from '@v-1/_components/FooterNavigation'
import { defaultMeta } from '@v-1/_globals/constants'
import GoogleAnalytics from '@v-1/_globals/GoogleAnalytics'
import { favicons } from '@v-1/_utils/constants'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const pxllFont = localFont({ src: './_fonts/pxll-webfont.woff2', variable: '--pixel-font-family' })

export const metadata: Metadata = {
  metadataBase: new URL(defaultMeta.url),
  title: defaultMeta.title,
  description: defaultMeta.description,
  robots: 'noindex, nofollow',
  keywords: defaultMeta.keywords,
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

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pxllFont.variable} ${GeistMono.variable}`}>
        <ClientHelpers />
        <section className="main-section">
          {children}
          <Footer />
        </section>
        <FooterNavigation />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
