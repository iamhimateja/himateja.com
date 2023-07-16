import '@styles/variables.css'
import '@styles/globals.css'
import 'react-tippy/dist/tippy.css'

import ClientHelpers from '@components/ClientHelpers'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import { defaultMeta } from '@globals/constants'
import { favicons } from '@utils/constants'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const pxllFont = localFont({ src: './_fonts/pxll-webfont.woff2', variable: '--pixel-font-family' })
const inter = Inter({ subsets: ['latin'], variable: '--inter-font-family' })

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
      <body className={`${pxllFont.variable} ${inter.variable}`}>
        <ClientHelpers />
        <section className="main-section">
          {children}
          <Footer />
        </section>
        <Navigation />
      </body>
    </html>
  )
}
