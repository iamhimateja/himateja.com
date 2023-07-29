'use client'

import { Icons } from '@components/Icons'
import ThemeSwitch from '@components/ThemeSwitch'
import { cn } from '@utils/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tooltip } from 'react-tippy'

import styles from './Navigation.module.css'
// import VersionsModal from './VersionsModal'

const FooterNavigation = () => {
  const pathname = usePathname()

  return (
    <div className={styles.navigation}>
      <Tooltip animateFill size="small" inertia distance={15} title="Home" position="top" trigger="mouseenter">
        <Link
          aria-label="Home"
          href="/"
          className={cn(styles.link, pathname === '/' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Home />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Products" position="top" trigger="mouseenter">
        <Link
          aria-label="Products"
          href="/products"
          className={cn(styles.link, pathname === '/products' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Products />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Labs" position="top" trigger="mouseenter">
        <Link
          aria-label="Labs"
          href="/labs"
          className={cn(styles.link, pathname === '/labs' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Workshop />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Articles" position="top" trigger="mouseenter">
        <Link
          aria-label="Articles"
          href="/articles"
          className={cn(styles.link, pathname === '/articles' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Blog />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Stack" position="top" trigger="mouseenter">
        <Link
          aria-label="Stack"
          href="/stack"
          className={cn(styles.link, pathname === '/stack' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Stack />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="About me" position="top" trigger="mouseenter">
        <Link
          aria-label="About me"
          href="/about"
          className={cn(styles.link, pathname === '/about' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Smile />
        </Link>
      </Tooltip>

      {/* <VersionsModal /> */}

      <span className={styles.separator} />
      <ThemeSwitch />
    </div>
  )
}

export default FooterNavigation
