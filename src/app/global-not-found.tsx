import '@styles/variables.css'
import '@styles/globals.css'
import 'react-tippy/dist/tippy.css'

import Background from '@components/Background'
import ClientHelpers from '@components/ClientHelpers'
import Footer from '@components/Footer'
import FooterNavigation from '@components/FooterNavigation'
import NotFound from '@components/NotFound'
import ScrollThumb from '@components/ScrollThumb'
import { favicons } from '@utils/constants'
import { publishedPosts } from '@utils/posts'
import type { Metadata } from 'next'

import { fontClassName } from './(current)/_fonts'

/* 404 for URLs that match no route: with several root layouts Next cannot pick one, so this
   renders the whole document. Needs experimental.globalNotFound. */

export const metadata: Metadata = {
  title: 'not found · himateja.',
  icons: { other: favicons },
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function GlobalNotFound() {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={fontClassName}>
        <ClientHelpers />
        <Background />
        <ScrollThumb />
        <main className="main-section">
          <NotFound />
          <Footer />
        </main>
        <FooterNavigation showBlog={publishedPosts().length > 0} />
      </body>
    </html>
  )
}
