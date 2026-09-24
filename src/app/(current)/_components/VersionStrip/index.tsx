'use client'

import { siteVersions as versions } from '@globals/versions'
import { Icons } from '@icons'
import { cn } from '@utils/index'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './VersionStrip.module.css'

type Props = {
  open: boolean
  onClose: () => void
}

const CLOSE_MS = 260
const N = versions.length
/* how long each version stays up before the strip moves on by itself */
const AUTO_MS = 3500

/* The time machine on phones: the picked version's card over a year strip. Tap, scroll, or
   let it advance on its own (it waits while the pointer is over it). */
const VersionStrip = ({ open, onClose }: Props) => {
  const [visible, setVisible] = useState(open)
  if (open && !visible) setVisible(true)
  const closing = !open && visible
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  /* keyed so the card re-runs its entrance when the version changes */
  const v = versions[index]!
  const dark = v.dark ?? v
  const step = (d: number) => setIndex((i) => (i + d + N) % N)

  useEffect(() => {
    if (!closing) return
    const id = window.setTimeout(() => setVisible(false), CLOSE_MS)
    return () => window.clearTimeout(id)
  }, [closing])

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setIndex((i) => Math.min(i + 1, N - 1))
      if (e.key === 'ArrowRight') setIndex((i) => Math.max(i - 1, 0))
    }
    // the wheel steps through the versions: one step per notch, then a short rest
    let acc = 0
    let rest = 0
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const now = performance.now()
      if (now < rest) return
      acc += e.deltaY + e.deltaX
      if (Math.abs(acc) < 40) return
      step(acc > 0 ? 1 : -1)
      acc = 0
      rest = now + 300
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', onKey)
    addEventListener('wheel', onWheel, { passive: false })
    return () => {
      document.body.style.overflow = previous
      removeEventListener('keydown', onKey)
      removeEventListener('wheel', onWheel)
    }
  }, [visible, onClose])

  // auto-advance, paused while hovered; any pick restarts the wait
  useEffect(() => {
    if (!visible || closing || hovered) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % N), AUTO_MS)
    return () => window.clearInterval(id)
  }, [visible, closing, hovered, index])

  if (!visible) return null

  /* oldest on the left, like a timeline */
  const timeline = [...versions].reverse()

  return createPortal(
    <>
      <div className={cn(styles.overlay, closing && styles.overlayOut)} onClick={onClose} aria-hidden="true" />
      <section
        className={cn(styles.sheet, closing && styles.sheetOut)}
        role="dialog"
        aria-label="Past versions"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.grip} aria-hidden="true" />
        <header className={styles.head}>
          <div>
            <h2 className={styles.title}>time machine</h2>
            <p className={styles.sub}>Older me, older sites. Pick a year, or let it play.</p>
          </div>
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <Icons.Close width={16} height={16} />
          </button>
        </header>

        <a
          key={v.label}
          href={v.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          style={
            {
              '--bg-light': v.bg,
              '--fg-light': v.fg,
              '--bg-dark': dark.bg,
              '--fg-dark': dark.fg,
            } as React.CSSProperties
          }
          onClick={onClose}
          aria-label={`Open ${v.label}, ${v.year} in a new tab`}
        >
          <div className={styles.caption}>
            <span className={styles.captionMain}>{v.label}</span>
            <span className={styles.captionYear}>{v.year}</span>
            <span className={styles.swatches}>
              <span style={{ background: 'var(--card-bg)' }} />
              <span style={{ background: 'var(--card-fg)' }} />
              <span style={{ background: v.muted }} />
              <span style={{ background: v.accent }} />
            </span>
          </div>
          <div className={styles.shot}>
            <Image
              src={v.shot}
              alt=""
              fill
              sizes="90vw"
              unoptimized
              draggable={false}
              className={cn(v.dark && styles.shotLight)}
            />
            {v.dark && (
              <Image
                src={v.dark.shot}
                alt=""
                fill
                sizes="90vw"
                unoptimized
                draggable={false}
                className={styles.shotDark}
              />
            )}
          </div>
          <div className={styles.foot}>
            <span>tap to open</span>
            <span>
              {index + 1} / {N}
            </span>
          </div>
        </a>

        <div className={styles.strip} role="tablist" aria-label="Years">
          <span className={styles.line} aria-hidden="true" />
          {timeline.map((t) => {
            const i = versions.indexOf(t)
            const on = i === index
            return (
              <button
                key={t.label}
                type="button"
                role="tab"
                aria-selected={on}
                className={cn(styles.year, on && styles.yearOn)}
                onClick={() => setIndex(i)}
              >
                <span className={styles.tick} aria-hidden="true" />
                <span className={styles.yearLabel}>{t.year}</span>
                <span className={styles.yearTag}>{t.label}</span>
              </button>
            )
          })}
        </div>
      </section>
    </>,
    document.body,
  )
}

export default VersionStrip
