import '@/styles/globals.css'
import '@/styles/variables.css'

import type { AppProps } from 'next/app'

import useThemeSettings from '@/hooks/useThemeSettings'

function MyApp({ Component, pageProps }: AppProps) {
  useThemeSettings()

  return <Component {...pageProps} />
}

export default MyApp
