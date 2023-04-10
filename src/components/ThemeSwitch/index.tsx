import * as React from 'react'

import MoonIcon from '@/components/svg/Moon'
import SunIcon from '@/components/svg/Sun'
import { isDarkThemeEnabled } from '@/lib/helpers'

import styles from './styles.module.scss'

const ThemeSwitch = () => {
  const toggleTheme = () => {
    if (isDarkThemeEnabled()) {
      localStorage.setItem('selectedTheme', 'light')
      document.body.setAttribute('data-theme', 'light')
    } else {
      localStorage.setItem('selectedTheme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
    }
  }

  return (
    <button id={styles.themeSwitch} onClick={toggleTheme}>
      <span className={`${styles.icon} ${styles.lightThemeIcon}`}>
        <SunIcon />
      </span>
      <span className={`${styles.icon} ${styles.darkThemeIcon}`}>
        <MoonIcon />
      </span>
    </button>
  )
}

export default ThemeSwitch
