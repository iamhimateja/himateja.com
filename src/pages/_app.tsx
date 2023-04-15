import '@/styles/globals.css'
import '@/styles/colors.css'
import '@/styles/variables.css'

import type { AppProps } from 'next/app'

import { Footer, Navigation } from '@/components'
import { useArrowKeyNavigation, useThemeSettings } from '@/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  useThemeSettings()
  useArrowKeyNavigation()

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
