import { useEffect, useState } from 'react'
import { useMount } from 'react-use'

import { ThemeType } from '@/lib/types'

export const useThemeSettings = () => {
  const [currentTheme, setTheme] = useState<ThemeType | undefined>(ThemeType.Dark)

  useMount(() => {
    const existingTheme = localStorage.getItem('currentTheme') as ThemeType
    if (existingTheme) setTheme(existingTheme)

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return ThemeType.Dark
    setTheme(ThemeType.Light)
  })

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('currentTheme', currentTheme as string)
  }, [currentTheme])

  return { currentTheme, setTheme }
}
