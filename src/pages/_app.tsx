import '@/styles/globals.css'
import '@/styles/variables.css'

import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { getColorScheme } from '@/lib/helpers'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const colorScheme = getColorScheme()
    if (colorScheme) {
      document.body.setAttribute('data-theme', colorScheme)
    }
  })

  return <Component {...pageProps} />
}

export default MyApp
