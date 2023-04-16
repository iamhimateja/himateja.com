import '@/styles/globals.css'
import '@/styles/colors.css'
import '@/styles/variables.css'

import type { AppProps } from 'next/app'
import Script from 'next/script'

import { Footer, Navigation } from '@/components'
import { useArrowKeyNavigation, useThemeSettings } from '@/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  useThemeSettings()
  useArrowKeyNavigation()

  return (
    <>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-GT78JPR2RG" />

      <Script strategy="lazyOnload" id="googleAnalyticsScript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GT78JPR2RG', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
