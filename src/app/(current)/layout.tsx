import '@styles/variables.css'
import '@styles/globals.css'
import 'react-tippy/dist/tippy.css'

import Background from '@components/Background'
import ClientHelpers from '@components/ClientHelpers'
import Footer from '@components/Footer'
import FooterNavigation from '@components/FooterNavigation'
import ScrollThumb from '@components/ScrollThumb'
import { defaultMeta } from '@globals/constants'
import GoogleAnalytics from '@globals/GoogleAnalytics'
import { favicons } from '@utils/constants'
import { publishedPosts } from '@utils/posts'
import type { Metadata } from 'next'

import { fontClassName } from './_fonts'

export const metadata: Metadata = {
  metadataBase: new URL(defaultMeta.url),
  title: 'himateja.',
  description: defaultMeta.description,
  robots: defaultMeta.robots,
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={fontClassName}>
        <ClientHelpers />
        <Background />
        <ScrollThumb />
        <main className="main-section">
          {children}
          <Footer />
        </main>
        <FooterNavigation showBlog={publishedPosts().length > 0} />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
