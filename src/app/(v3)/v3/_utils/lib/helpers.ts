import { ThemeType } from '@v3/lib/types'

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const isDarkThemeEnabled = () => document.body.dataset.theme === 'dark'
export const isLightThemeEnabled = () => document.body.dataset.theme === 'light'

export const getColorScheme = (): ThemeType | undefined => {
  const userSelectedTheme = window.localStorage.getItem('selectedTheme')
  if (userSelectedTheme) {
    return userSelectedTheme as ThemeType
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return ThemeType.Dark
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return ThemeType.Light
  }
}
