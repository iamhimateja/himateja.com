'use client'

import { Icons } from '@icons'
import { cn } from '@utils/index'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './PreviewDialog.module.css'

export type PreviewTarget = {
  slug: string
  url: string
  github?: string
}

type Props = {
  target: PreviewTarget | null
  onClose: () => void
}

/* how long the panel takes to animate out, matches dialogOut in the css */
const CLOSE_MS = 220

/* A live demo in a panel over the page. Not modal, so the floating nav above it stays usable. */
const PreviewDialog = ({ target, onClose }: Props) => {
  // the last target stays mounted while the panel animates out, then it unmounts
  const [shown, setShown] = useState(target)
  if (target && target !== shown) setShown(target)
  const closing = target === null && shown !== null

  useEffect(() => {
    if (!closing) return
    const id = window.setTimeout(() => setShown(null), CLOSE_MS)
    return () => window.clearTimeout(id)
  }, [closing])

  useEffect(() => {
    if (!target) return
    const onKey = (e: KeyboardEvent) => {
      // in browser full screen, Esc belongs to the browser: it leaves full screen, not the panel
      if (e.key === 'Escape' && !document.fullscreenElement) onClose()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      removeEventListener('keydown', onKey)
    }
  }, [target, onClose])

  if (!shown) return null

  // rendered on body so a transformed ancestor (the floating nav) cannot trap the fixed panel
  return createPortal(
    <>
      <div className={cn(styles.overlay, closing && styles.overlayOut)} onClick={onClose} aria-hidden="true" />
      <Panel key={shown.slug} target={shown} closing={closing} onClose={onClose} />
    </>,
    document.body,
  )
}

type PanelProps = {
  target: PreviewTarget
  closing: boolean
  onClose: () => void
}

/* Keyed by slug, so state resets when a different demo opens. */
const Panel = ({ target, closing, onClose }: PanelProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [full, setFull] = useState(false)
  // bumping the key remounts the iframe, which is the only way to reload a cross-origin frame
  const [frame, setFrame] = useState(0)

  // real browser full screen on the panel; the state follows the browser, not the button
  useEffect(() => {
    const sync = () => setFull(document.fullscreenElement === ref.current)
    document.addEventListener('fullscreenchange', sync)
    return () => document.removeEventListener('fullscreenchange', sync)
  }, [])

  // full screen controls show on entry and when the pointer reaches the top edge. The iframe
  // swallows pointer moves, so a 4px hot zone catches them; it is off while the controls show.
  const [controls, setControls] = useState(false)
  const hideTimer = useRef<number | undefined>(undefined)
  const reveal = () => {
    setControls(true)
    window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setControls(false), 2200)
  }
  const hold = () => window.clearTimeout(hideTimer.current)

  useEffect(() => {
    if (!full) return
    const id = window.setTimeout(reveal, 0)
    return () => {
      window.clearTimeout(id)
      window.clearTimeout(hideTimer.current)
    }
  }, [full])

  const toggleFull = () => {
    const el = ref.current
    if (!el) return
    if (document.fullscreenElement) void document.exitFullscreen()
    else void el.requestFullscreen?.()
  }

  return (
    <>
      <div
        ref={ref}
        className={cn(styles.dialog, full && styles.full, closing && styles.dialogOut)}
        role="dialog"
        aria-label={`Preview of ${target.slug}`}
      >
        {full ? (
          <>
            <div
              className={cn(styles.hotzone, controls && styles.hotzoneOff)}
              onPointerMove={reveal}
              onPointerEnter={reveal}
              aria-hidden="true"
            />
            <div
              className={cn(styles.floating, controls && styles.floatingIn)}
              onPointerEnter={hold}
              onPointerLeave={reveal}
              onFocus={hold}
              onBlur={reveal}
            >
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setFrame((n) => n + 1)}
                aria-label="Reload preview"
                title="Reload"
              >
                <Icons.Reload />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                onClick={toggleFull}
                aria-label="Exit full screen"
                title="Exit full screen (esc)"
              >
                <Icons.Shrink />
              </button>
            </div>
          </>
        ) : (
          <header className={styles.head}>
            <span className={styles.meta}>
              <span className={styles.slug}>{target.slug}</span>
              <span className={styles.url}>{target.url}</span>
            </span>
            <span className={styles.actions}>
              <a href={target.url} target="_blank" rel="noopener noreferrer">
                open
                <Icons.ArrowTopRight />
              </a>
              {target.github && target.github !== 'private' && (
                <a href={target.github} target="_blank" rel="noopener noreferrer">
                  source
                  <Icons.ArrowTopRight />
                </a>
              )}
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setFrame((n) => n + 1)}
                aria-label="Reload preview"
                title="Reload"
              >
                <Icons.Reload />
              </button>
              <button
                type="button"
                className={styles.iconButton}
                onClick={toggleFull}
                aria-pressed={full}
                aria-label={full ? 'Exit full screen' : 'Full screen'}
                title={full ? 'Exit full screen' : 'Full screen'}
              >
                {full ? <Icons.Shrink /> : <Icons.Expand />}
              </button>
              <button
                type="button"
                className={styles.iconButton}
                onClick={onClose}
                aria-label="Close preview"
                title="Close (esc)"
              >
                <Icons.Close />
              </button>
            </span>
          </header>
        )}
        <iframe
          key={frame}
          src={target.url}
          title={`${target.slug} preview`}
          className={styles.iframe}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </>
  )
}

export default PreviewDialog
