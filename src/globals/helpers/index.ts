import { ThemeType } from '@globals/types'

export const isDarkThemeEnabled = () => {
  if (typeof document !== 'undefined') {
    return document.body.dataset.theme === 'dark'
  }
}

const fetchSystemColorScheme = (): ThemeType | undefined => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeType.Dark
    : ThemeType.Light
}

export const getColorScheme = (autoChange?: boolean): ThemeType | undefined => {
  if (autoChange) {
    return fetchSystemColorScheme()
  } else {
    const userSelectedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('selectedTheme') : undefined
    return userSelectedTheme ? (userSelectedTheme as ThemeType) : fetchSystemColorScheme()
  }
}
