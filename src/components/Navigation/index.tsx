import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { myMailId } from '@/lib/variables'

import styles from './styles.module.scss'

const Navigation = () => {
  const { pathname } = useRouter()

  return (
    <div className={styles['nav-container']}>
      <nav className={styles.navigation}>
        <Link className={styles.avatarLink} target="_blank" href={`mailto:${myMailId}`}>
          <Image src="/images/headShot.png" alt="Himateja" width="50" height="50" />
          <h4 className={styles.message}>Hi, let&#39;s chat.</h4>
        </Link>

        <div className={styles.navMenu}>
          <Link href="/" className={clsx(styles.link, pathname === '/' && styles.active)}>
            <Image src="/favicon/favicon-96x96.png" alt="Home" width="20" height="20" />
          </Link>
          <Link href="/projects" className={clsx(styles.link, pathname === '/projects' && styles.active)}>
            Projects
          </Link>
          <Link href="/about" className={clsx(styles.link, pathname === '/about' && styles.active)}>
            About
          </Link>
        </div>

        <button className={styles.themePicker}>Theme</button>
      </nav>
    </div>
  )
}

export default Navigation
