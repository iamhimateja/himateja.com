'use client'

import { LABS_PREVIEW_EVENT, OPEN_LABS_EVENT } from '@components/HomePage/Labs'
import PreviewDialog, { type PreviewTarget } from '@components/PreviewDialog'
import ThemeSwitch from '@components/ThemeSwitch'
import VersionRing, { preloadRing } from '@components/VersionRing'
import VersionStrip from '@components/VersionStrip'
import type { SiteVersion } from '@globals/versions'
import { Icons } from '@icons'
import { cn } from '@utils/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useSyncExternalStore } from 'react'
import { Tooltip } from 'react-tippy'

import styles from './Navigation.module.css'

const TIP_KEY = 'hm-tip-versions'
/* how long the first-visit tip lives, fade in and out included; matches the .tip animations */
const TIP_MS = 6000

const rememberTip = () => {
  try {
    localStorage.setItem(TIP_KEY, '1')
  } catch {
    // ignore
  }
}

const PHONE = '(max-width: 639px)'
const subscribePhone = (cb: () => void) => {
  const mq = matchMedia(PHONE)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const usePhone = () =>
  useSyncExternalStore(
    subscribePhone,
    () => matchMedia(PHONE).matches,
    () => false,
  )

type NavItem = 'home' | 'labs' | 'blog' | 'about' | null

/* Which home section is in view: the one whose top has passed 45% of the viewport.
   At the very bottom of the page it is always the last one. */
const sectionInView = (): NavItem => {
  const line = window.scrollY + window.innerHeight * 0.45
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
  const top = (id: string) => {
    const el = document.getElementById(id)
    return el ? el.getBoundingClientRect().top + window.scrollY : Infinity
  }
  if (atBottom && document.getElementById('about')) return 'about'
  if (top('about') <= line) return 'about'
  if (top('labs') <= line) return 'labs'
  return 'home'
}

/* The highlighted nav item follows the page, and on the home page the section being read.
   An open experiment preview counts as Experiments. The wheel and version previews win. */
const useActiveItem = (pathname: string, versionsActive: boolean): NavItem => {
  const [section, setSection] = useState<NavItem>('home')
  const [labsPreview, setLabsPreview] = useState(false)

  useEffect(() => {
    const onPreview = (e: Event) => setLabsPreview(Boolean((e as CustomEvent<boolean>).detail))
    window.addEventListener(LABS_PREVIEW_EVENT, onPreview)
    return () => window.removeEventListener(LABS_PREVIEW_EVENT, onPreview)
  }, [])

  useEffect(() => {
    if (pathname !== '/') return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setSection(sectionInView()))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])

  if (versionsActive) return null
  if (labsPreview) return 'labs'
  if (pathname === '/') return section
  if (pathname === '/resume') return 'about'
  if (pathname.startsWith('/blog')) return 'blog'
  return null
}

/* showBlog comes from the server layout, so the client bundle does not carry the posts */
const FooterNavigation = ({ showBlog }: { showBlog: boolean }) => {
  const pathname = usePathname()
  const phone = usePhone()
  const [wheelOpen, setWheelOpen] = useState(false)
  const [preview, setPreview] = useState<PreviewTarget | null>(null)
  const [showTip, setShowTip] = useState(false)
  const versionsActive = wheelOpen || preview !== null
  const active = useActiveItem(pathname, versionsActive)

  // bend the ring's images when idle, so the first open is instant (not on phones: no ring)
  useEffect(() => {
    if (phone) return
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(preloadRing, { timeout: 4000 })
      return () => (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id)
    }
    const id = setTimeout(preloadRing, 2500)
    return () => clearTimeout(id)
  }, [phone])

  // first visit, home only: point at the versions button once
  useEffect(() => {
    if (pathname !== '/') return
    let seen = true
    try {
      seen = !!localStorage.getItem(TIP_KEY)
    } catch {
      // storage blocked
    }
    if (seen) return
    const id = setTimeout(() => setShowTip(true), 0)
    return () => clearTimeout(id)
  }, [pathname])

  // the tip goes away on its own after about 4 seconds on screen (see .tip in the css)
  useEffect(() => {
    if (!showTip) return
    const id = setTimeout(() => {
      setShowTip(false)
      rememberTip()
    }, TIP_MS)
    return () => clearTimeout(id)
  }, [showTip])

  const markTip = () => {
    setShowTip(false)
    rememberTip()
  }

  const openVersion = (version: SiteVersion) => {
    setWheelOpen(false)
    setTimeout(
      () =>
        setPreview({
          slug: `${version.label} · ${version.year}`,
          url: version.href,
          github: version.source ?? 'https://github.com/iamhimateja/himateja.com',
        }),
      300,
    )
  }

  return (
    <nav className={cn(styles.navigation, wheelOpen && styles.solid)} aria-label="Site">
      <Tooltip animateFill size="small" inertia distance={15} title="Home" position="top" trigger="mouseenter">
        <Link
          aria-label="Home"
          href="/"
          className={cn(styles.link, active === 'home' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Home />
        </Link>
      </Tooltip>
      <Tooltip animateFill size="small" inertia distance={15} title="Experiments" position="top" trigger="mouseenter">
        <Link
          aria-label="Experiments"
          href="/#labs"
          className={cn(styles.link, active === 'labs' && styles.highlighted)}
          tabIndex={0}
          onClick={() => window.dispatchEvent(new Event(OPEN_LABS_EVENT))}
        >
          <Icons.Workshop />
        </Link>
      </Tooltip>
      {showBlog && (
        <Tooltip animateFill size="small" inertia distance={15} title="Blog" position="top" trigger="mouseenter">
          <Link
            aria-label="Blog"
            href="/blog"
            className={cn(styles.link, active === 'blog' && styles.highlighted)}
            tabIndex={0}
          >
            <Icons.Blog />
          </Link>
        </Tooltip>
      )}
      <Tooltip animateFill size="small" inertia distance={15} title="About me" position="top" trigger="mouseenter">
        <Link
          aria-label="About me"
          href="/#about"
          className={cn(styles.link, active === 'about' && styles.highlighted)}
          tabIndex={0}
        >
          <Icons.Smile />
        </Link>
      </Tooltip>

      <span className={styles.separator} />

      <span className={styles.versions}>
        <Tooltip
          animateFill
          size="small"
          inertia
          distance={15}
          title="Past versions"
          position="top"
          trigger="mouseenter"
        >
          <button
            type="button"
            aria-label="Past versions of this site"
            aria-pressed={wheelOpen}
            className={cn(styles.link, versionsActive && styles.highlighted)}
            onClick={() => {
              markTip()
              setWheelOpen((v) => !v)
            }}
          >
            <Icons.Versions />
          </button>
        </Tooltip>
        {showTip && (
          <button type="button" className={styles.tip} onClick={markTip}>
            past versions live here
          </button>
        )}
      </span>

      <ThemeSwitch />

      {phone ? (
        <VersionStrip open={wheelOpen} onClose={() => setWheelOpen(false)} />
      ) : (
        <VersionRing open={wheelOpen} onClose={() => setWheelOpen(false)} onOpenVersion={openVersion} />
      )}
      <PreviewDialog target={preview} onClose={() => setPreview(null)} />
    </nav>
  )
}

export default FooterNavigation
