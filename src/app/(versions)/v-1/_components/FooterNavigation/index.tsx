'use client'

import { Icons } from '@v-1/_components/Icons'
import ThemeSwitch from '@v-1/_components/ThemeSwitch'
import { cn } from '@v-1/_utils/index'
import { allArticles } from 'contentlayer/generated'
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
          href="/v-1"
          className={cn(styles.link, pathname === '/v-1' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Home />
        </Link>
      </Tooltip>
      {/* <Tooltip animateFill size="small" inertia distance={15} title="Products" position="top" trigger="mouseenter">
        <Link
          aria-label="Products"
          href="/v-1/products"
          className={cn(styles.link, pathname === '/v-1/products' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Products />
        </Link>
      </Tooltip> */}
      <Tooltip animateFill size="small" inertia distance={15} title="Labs" position="top" trigger="mouseenter">
        <Link
          aria-label="Labs"
          href="/v-1/labs"
          className={cn(styles.link, pathname === '/v-1/labs' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Workshop />
        </Link>
      </Tooltip>
      {allArticles.length > 0 && (
        <Tooltip animateFill size="small" inertia distance={15} title="Articles" position="top" trigger="mouseenter">
          <Link
            aria-label="Articles"
            href="/v-1/articles"
            className={cn(styles.link, pathname === '/v-1/articles' && styles.highlighted)}
            tabIndex={0}
          >
            <Icons.Blog />
          </Link>
        </Tooltip>
      )}
      <Tooltip animateFill size="small" inertia distance={15} title="Stack" position="top" trigger="mouseenter">
        <Link
          aria-label="Stack"
          href="/v-1/stack"
          className={cn(styles.link, pathname === '/v-1/stack' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Stack />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="About me" position="top" trigger="mouseenter">
        <Link
          aria-label="About me"
          href="/v-1/about"
          className={cn(styles.link, pathname === '/v-1/about' && styles.highlighted)}
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
