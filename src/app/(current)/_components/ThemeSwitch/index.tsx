'use client'

import { isDarkThemeEnabled } from '@globals/helpers'
import MoonIcon from '@globals/icons/Moon'
import SunIcon from '@globals/icons/Sun'
import { ThemeType } from '@globals/types'
import { useState } from 'react'
import { Tooltip } from 'react-tippy'

import styles from './ThemeSwitch.module.scss'

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.Light)

  const toggleTheme = () => {
    if (isDarkThemeEnabled()) {
      localStorage.setItem('selectedTheme', ThemeType.Light)
      document.body.setAttribute('data-theme', ThemeType.Light)
      setTheme(ThemeType.Light)
    } else {
      localStorage.setItem('selectedTheme', ThemeType.Dark)
      document.body.setAttribute('data-theme', ThemeType.Dark)
      setTheme(ThemeType.Dark)
    }
  }

  return (
    <Tooltip
      size="small"
      animateFill
      inertia
      distance={15}
      title={`Change theme to ${theme === 'dark' ? 'light' : 'dark'}`}
      position="top"
      trigger="mouseenter"
    >
      <button id={styles.themeSwitch} onClick={toggleTheme} role="button" tabIndex={0} title="Toggle theme">
        <span className={`${styles.icon} ${styles.lightThemeIcon}`}>
          <SunIcon />
        </span>
        <span className={`${styles.icon} ${styles.darkThemeIcon}`}>
          <MoonIcon />
        </span>
      </button>
    </Tooltip>
  )
}

export default ThemeSwitch
