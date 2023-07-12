'use client'

import { getColorScheme } from '@globals/helpers'
import { ThemeType } from '@globals/types'
import { useEffect } from 'react'

const useThemeSettings = (autoChange?: boolean) => {
  useEffect(() => {
    const setThemeClass = (isDark: boolean) => {
      document.body.setAttribute('data-theme', isDark ? ThemeType.Dark : ThemeType.Light)
    }

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (autoChange) {
        setThemeClass(e.matches)
      } else {
        if (!window.localStorage.getItem('selectedTheme')) {
          setThemeClass(e.matches)
        }
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
  }, [autoChange])
}

export default useThemeSettings
