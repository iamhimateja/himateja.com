import { useEffect } from 'react'

import { getColorScheme } from '@/lib/helpers'
import { ThemeType } from '@/lib/types'

const useThemeSettings = () => {
  useEffect(() => {
    const setThemeClass = (isDark: boolean) => {
      document.body.setAttribute('data-theme', isDark ? ThemeType.Dark : ThemeType.Light)
    }

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!window.localStorage.getItem('selectedTheme')) {
        setThemeClass(e.matches)
      }
    }

    const preferredColorScheme = getColorScheme()
    if (preferredColorScheme) {
      setThemeClass(preferredColorScheme === ThemeType.Dark)
    }

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQueryList.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])
}

export default useThemeSettings
