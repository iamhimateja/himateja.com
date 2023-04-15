import * as React from 'react'

import { MoonIcon, SunIcon } from '@/components/svg'
import { isDarkThemeEnabled } from '@/lib/helpers'
import { ThemeType } from '@/lib/types'

import styles from './styles.module.scss'

const ThemeSwitch = () => {
  const toggleTheme = () => {
    if (isDarkThemeEnabled()) {
      localStorage.setItem('selectedTheme', ThemeType.Light)
      document.body.setAttribute('data-theme', ThemeType.Light)
    } else {
      localStorage.setItem('selectedTheme', ThemeType.Dark)
      document.body.setAttribute('data-theme', ThemeType.Dark)
    }
  }

  return (
    <button id={styles.themeSwitch} onClick={toggleTheme} role="button" tabIndex={0} title="Toggle theme">
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
