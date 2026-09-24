'use client'

import FieldCanvas from '@components/FieldCanvas'
import type { FieldStyle } from '@utils/field'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from './Background.module.css'

const isStyle = (value: string | null): value is FieldStyle =>
  value === 'dither' || value === 'dots' || value === 'lines'

/* A new pick on each page load (kept while navigating). None on phones (under 640px), no lines
   on touch devices. `?bg=dots` (or dither, lines) forces one, phones included. */
const pickStyle = (): FieldStyle | null => {
  const forced = new URLSearchParams(location.search).get('bg')
  if (isStyle(forced)) return forced
  if (matchMedia('(max-width: 639px)').matches) return null
  const r = Math.random()
  const coarse = matchMedia('(pointer:coarse)').matches
  return coarse ? (r < 0.5 ? 'dither' : 'dots') : r < 0.4 ? 'dither' : r < 0.8 ? 'dots' : 'lines'
}

/* The site background. Client-only; hidden on blog posts, which have their own cover. */
const Background = () => {
  const pathname = usePathname()
  const [style, setStyle] = useState<FieldStyle | null>(null)

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((fn: () => void) => setTimeout(fn, 200))
    const id = idle(() => setStyle(pickStyle()))
    return () => (window.cancelIdleCallback ?? clearTimeout)(id as number)
  }, [])

  const isPost = /^\/blog\/.+/.test(pathname)
  if (!style || isPost) return null

  return (
    <div className={styles.bg} aria-hidden="true">
      <FieldCanvas
        style={style}
        alpha={0.14}
        cellWidth={14}
        cellHeight={18}
        fadeCenter
        interactive
        className={styles.canvas}
      />
    </div>
  )
}

export default Background
