export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const isDarkThemeEnabled = () => document.body.dataset.theme === 'dark'
export const isLightThemeEnabled = () => document.body.dataset.theme === 'light'

export const getColorScheme = () => {
  const userSelectedTheme = window.localStorage.getItem('selectedTheme')
  if (userSelectedTheme) {
    return userSelectedTheme
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
}
