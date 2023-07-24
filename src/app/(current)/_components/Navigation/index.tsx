'use client'

import ThemeSwitch from '@components/ThemeSwitch'
// import BlogIcon from '@icons/BlogIcon'
import HomeIcon from '@icons/HomeIcon'
import ProductsIcon from '@icons/ProductsIcon'
import SmileIcon from '@icons/SmileIcon'
import StackIcon from '@icons/StackIcon'
import WorkshopIcon from '@icons/WorkshopIcon'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tooltip } from 'react-tippy'

import styles from './Navigation.module.css'
// import VersionsModal from './VersionsModal'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <div className={styles.navigation}>
      <Tooltip animateFill size="small" inertia distance={15} title="Home" position="top" trigger="mouseenter">
        <Link
          aria-label="Home"
          href="/"
          className={clsx(styles.link, pathname === '/' && styles.highlighted)}
          tabIndex={0}
        >
          <HomeIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Products" position="top" trigger="mouseenter">
        <Link
          aria-label="Products"
          href="/products"
          className={clsx(styles.link, pathname === '/products' && styles.highlighted)}
          tabIndex={0}
        >
          <ProductsIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Labs" position="top" trigger="mouseenter">
        <Link
          aria-label="Labs"
          href="/labs"
          className={clsx(styles.link, pathname === '/labs' && styles.highlighted)}
          tabIndex={0}
        >
          <WorkshopIcon />
        </Link>
      </Tooltip>
      {/* <Tooltip animateFill size="small" inertia distance={15} title="Articles" position="top" trigger="mouseenter">
        <Link
          aria-label="Articles"
          href="/articles"
          className={clsx(styles.link, pathname === '/articles' && styles.highlighted)}
          tabIndex={0}
        >
          <BlogIcon />
        </Link>
      </Tooltip> */}
      <Tooltip animateFill size="small" inertia distance={15} title="Stack" position="top" trigger="mouseenter">
        <Link
          aria-label="Stack"
          href="/stack"
          className={clsx(styles.link, pathname === '/stack' && styles.highlighted)}
          tabIndex={0}
        >
          <StackIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="About me" position="top" trigger="mouseenter">
        <Link
          aria-label="About me"
          href="/about"
          className={clsx(styles.link, pathname === '/about' && styles.highlighted)}
          tabIndex={0}
        >
          <SmileIcon />
        </Link>
      </Tooltip>

      {/* <VersionsModal /> */}

      <span className={styles.separator} />
      <ThemeSwitch />
    </div>
  )
}

export default Navigation
