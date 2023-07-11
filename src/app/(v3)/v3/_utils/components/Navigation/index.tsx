'use client'

import { ThemeSwitch } from '@v3/components'
import { myMailId } from '@v3/lib/variables'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import styles from './styles.module.scss'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <div className={styles['nav-container']}>
      <nav className={styles.navigation}>
        <Link
          aria-label="Contact Himateja by email using this mail-id"
          className={styles.avatarLink}
          target="_blank"
          href={`mailto:${myMailId}`}
        >
          <Image src="/images/headShot.webp" alt="Himateja" width="60" height="60" />
          <h4 className={styles.message}>Hi, let&#39;s chat.</h4>
        </Link>

        <div className={styles.navMenu}>
          <Link
            href="/v3"
            className={clsx(styles.link, pathname === '/v3/' && styles.active)}
            aria-label="Home"
            tabIndex={0}
          >
            <Image src="/images/logo.webp" alt="Home" width="20" height="20" />
          </Link>
          <Link
            href="/v3/projects"
            className={clsx(styles.link, pathname === '/v3/projects' && styles.active)}
            aria-label="Projects"
            tabIndex={0}
          >
            Projects
          </Link>
          <Link
            href="/v3/about"
            className={clsx(styles.link, pathname === '/v3/about' && styles.active)}
            aria-label="About"
            tabIndex={0}
          >
            About
          </Link>
        </div>

        <ThemeSwitch />
      </nav>
    </div>
  )
}

export default Navigation
