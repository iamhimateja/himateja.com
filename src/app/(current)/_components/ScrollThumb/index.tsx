'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

import styles from './ScrollThumb.module.css'

const EDGE = 8
const MIN_HEIGHT = 28
const HIDE_AFTER = 900

/* Small scrollbar thumb on the right edge. The native scrollbar is hidden in globals.css.
   Shows while the page scrolls, fades out shortly after. Writes styles directly, no re-renders. */
const ScrollThumb = () => {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let hideTimer = 0

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      if (max <= 0) {
        el.style.height = '0px'
        el.style.opacity = '0'
        return
      }
      const track = window.innerHeight - EDGE * 2
      const height = Math.max(MIN_HEIGHT, (track * window.innerHeight) / doc.scrollHeight)
      const top = EDGE + (track - height) * (window.scrollY / max)
      el.style.height = `${height}px`
      el.style.top = `${top}px`
      el.style.opacity = '0.9'
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => {
        el.style.opacity = '0'
      }, HIDE_AFTER)
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    /* content height changes (cards opening, posts loading) move the thumb too */
    const observer = new ResizeObserver(update)
    observer.observe(document.body)

    return () => {
      window.clearTimeout(hideTimer)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      observer.disconnect()
    }
  }, [pathname])

  return <div ref={ref} className={styles.thumb} aria-hidden="true" />
}

export default ScrollThumb
