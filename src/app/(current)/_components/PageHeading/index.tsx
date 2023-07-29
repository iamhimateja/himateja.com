'use client'

import { Icons } from '@components/Icons'
import { cn } from '@utils/index'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Tooltip } from 'react-tippy'

import styles from './PageHeading.module.css'

const ScrambleHeading = dynamic(() => import('@components/ScrambleHeading'), { ssr: false })

type Props = {
  title: string
  className?: string
}

const PageHeading = ({ title, className }: Props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Function to check if body has the 'dark' class
    const checkDarkTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

    const observer = new MutationObserver(checkDarkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    checkDarkTheme()

    return () => {
      observer.disconnect()
    }
  }, [])

  const gradientId = theme === 'dark' ? 'darkGradient' : 'lightGradient'

  return (
    <div className={styles.container}>
      <Tooltip animateFill size="small" inertia title="Return home" position="bottom-start" trigger="mouseenter">
        <Link href="/" className={styles.homeIcon} tabIndex={0} aria-label="Return home">
          <Icons.PXLHome gradientType={gradientId} />
        </Link>
      </Tooltip>
      <ScrambleHeading className={cn(styles.heading, className)} text={title} />
    </div>
  )
}

export default PageHeading
