'use client'

import ThemeSwitch from '@components/ThemeSwitch'
import BlogIcon from '@icons/BlogIcon'
import HomeIcon from '@icons/HomeIcon'
import ProductsIcon from '@icons/ProductsIcon'
import ProjectsIcon from '@icons/ProjectsIcon'
import StackIcon from '@icons/StackIcon'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tooltip } from 'react-tippy'

import styles from './Navigation.module.scss'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <div className={styles.navigation}>
      <Tooltip animateFill size="small" inertia distance={15} title="Home" position="top" trigger="mouseenter">
        <Link href="/" className={clsx(styles.link, pathname === '/' && styles.highlighted)} tabIndex={0}>
          <HomeIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Projects" position="top" trigger="mouseenter">
        <Link
          href="/projects"
          className={clsx(styles.link, pathname === '/projects' && styles.highlighted)}
          tabIndex={0}
        >
          <ProjectsIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Products" position="top" trigger="mouseenter">
        <Link
          href="/products"
          className={clsx(styles.link, pathname === '/products' && styles.highlighted)}
          tabIndex={0}
        >
          <ProductsIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Blog" position="top" trigger="mouseenter">
        <Link href="/blog" className={clsx(styles.link, pathname === '/blog' && styles.highlighted)} tabIndex={0}>
          <BlogIcon />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Stack" position="top" trigger="mouseenter">
        <Link href="/stack" className={clsx(styles.link, pathname === '/stack' && styles.highlighted)} tabIndex={0}>
          <StackIcon />
        </Link>
      </Tooltip>
      <span className={styles.separator} />
      <ThemeSwitch />
    </div>
  )
}

export default Navigation
