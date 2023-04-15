import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { ThemeSwitch } from '@/components'
import { myMailId } from '@/lib/variables'

import styles from './styles.module.scss'

const Navigation = () => {
  const { pathname } = useRouter()

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
            href="/"
            className={clsx(styles.link, pathname === '/' && styles.active)}
            aria-label="Home"
            tabIndex={0}
          >
            <Image src="/images/logo.webp" alt="Home" width="20" height="20" />
          </Link>
          <Link
            href="/projects"
            className={clsx(styles.link, pathname === '/projects' && styles.active)}
            aria-label="Projects"
            tabIndex={0}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={clsx(styles.link, pathname === '/about' && styles.active)}
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
