'use client'

import { type SiteVersion, siteVersions as versions } from '@globals/versions'
import { cn } from '@utils/index'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { Tooltip } from 'react-tippy'

import BandShot, { bentBand } from './BandShot'
import styles from './VersionRing.module.css'

/* The time machine on wide screens: a ring of cards, its centre below the bottom edge. Scroll,
   drag or arrow keys spin it; the card at 12 o'clock is the pick. */

/* each version appears three times round the ring */
const REPEAT = 3
const N = versions.length * REPEAT
const SPAN = 360 / N

/* each sector is a card, bent: header row (label, year, swatches), shot, footer row. All
   concentric, so the padding stays even. Sizes in px. */
const PAD = 16
const ROW = 9 // cap height of the 11px mono rows
const GAP = 12
const SHOT_ASPECT = 0.35 // the hero shots are 1600 x 560
const GUTTER = 12 // px between neighbouring sectors, measured at the rim
const CARD_RADIUS = 16 // the card's corner radius
const SHOT_RADIUS = 10 // the shot's corner radius
const BOX_PAD = 12 // room round each card's box for the hover scale
const BLEED = 60 // px of edge colour drawn past each side of the shot, for the blur to smear

const rad = (deg: number) => (deg * Math.PI) / 180

/* everything measured from the ring's centre, outward radii */
const cardFor = (R: number) => {
  const half = rad(SPAN / 2) - GUTTER / 2 / R
  const rHead = R - PAD - ROW // header baseline; the glyphs stand on it, towards the rim
  const shotR = rHead - GAP // the shot's rim
  const shotHalf = half - PAD / shotR // the shot's half angle, inset by the padding
  const shotWidth = Math.round(2 * shotR * Math.tan(shotHalf) + 4)
  const shotDepth = Math.floor(shotR * 2 * shotHalf * SHOT_ASPECT)
  const rFoot = shotR - shotDepth - GAP - ROW // footer baseline
  const thickness = R - rFoot + PAD
  // how much lower the inner arc sits at the card's sides than at its middle
  const sag = Math.ceil((R - thickness) * (1 - Math.cos(half)))
  return { half, rHead, shotR, shotHalf, shotWidth, shotDepth, rFoot, thickness, sag }
}

/* ring size for the viewport: radius from the width, so the bands come out wide; the rim sits at
   55% of the height above the bottom edge, which puts the centre well below it */
const measureRing = () => {
  const R = Math.round(Math.min(Math.max(innerWidth * 0.72, innerHeight * 0.55), innerHeight * 1.4))
  return {
    R,
    thickness: cardFor(R).thickness,
    centre: Math.round(innerHeight * 0.55 - R),
    coarse: matchMedia('(pointer:coarse)').matches,
  }
}

/* the band's full width at the arc */
const bandWidthFor = (R: number) => Math.round(2 * R * Math.tan(((SPAN / 2) * Math.PI) / 180) + 4)

/* bends every shot ahead of time */
export const preloadRing = () => {
  const { R } = measureRing()
  const { shotR, shotHalf, shotWidth, shotDepth } = cardFor(R)
  const span = (shotHalf * 2 * 180) / Math.PI
  for (const v of versions) {
    bentBand(v.shot, shotR, span, shotWidth, shotDepth, BLEED).catch(() => {})
    if (v.dark) bentBand(v.dark.shot, shotR, span, shotWidth, shotDepth, BLEED).catch(() => {})
  }
}
const norm = (a: number) => ((a % 360) + 360) % 360

/* current theme, for the swatch tooltips */
const subscribeTheme = (cb: () => void) => {
  const mo = new MutationObserver(cb)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => mo.disconnect()
}
const useDark = () =>
  useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains('dark'),
    () => false,
  )

/* a point on a circle round the ring's centre, angle from 12 o'clock, clockwise */
const polar = (r: number, a: number) => [r * Math.sin(a), -r * Math.cos(a)] as const

/* an arc path from angle -a to +a at radius r, left to right, for text to run along */
const arcPath = (r: number, a: number) => {
  const [x0, y0] = polar(r, -a)
  const [x1, y1] = polar(r, a)
  return `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`
}

/* a sector of a ring with rounded corners, as a path in px: centre (cx, cy), from radius ri to
   ro, half angle a about 12 o'clock, corner radius c. Traced clockwise from the outer left corner. */
const sectorPath = (cx: number, cy: number, ro: number, ri: number, a: number, c: number) => {
  const pt = (r: number, ang: number) => {
    const [x, y] = polar(r, ang)
    return `${(cx + x).toFixed(2)} ${(cy + y).toFixed(2)}`
  }
  const ao = c / (ro - c) // how far a corner eats into the outer arc, in radians
  const ai = c / (ri + c) // and into the inner arc
  return [
    `M ${pt(ro, -a + ao)}`,
    `A ${ro} ${ro} 0 0 1 ${pt(ro, a - ao)}`,
    `A ${c} ${c} 0 0 1 ${pt(ro - c, a)}`,
    `L ${pt(ri + c, a)}`,
    `A ${c} ${c} 0 0 1 ${pt(ri, a - ai)}`,
    `A ${ri} ${ri} 0 0 0 ${pt(ri, -a + ai)}`,
    `A ${c} ${c} 0 0 1 ${pt(ri + c, -a)}`,
    `L ${pt(ro - c, -a)}`,
    `A ${c} ${c} 0 0 1 ${pt(ro, -a + ao)}`,
    'Z',
  ].join(' ')
}

type Props = {
  open: boolean
  onClose: () => void
  onOpenVersion: (version: SiteVersion) => void
}

const VersionRing = ({ open, onClose, onOpenVersion }: Props) => {
  const [closing, setClosing] = useState(false)
  const [top, setTop] = useState(0)
  const [hover, setHover] = useState(-1)
  const isDark = useDark()
  const [size, setSize] = useState(() =>
    typeof window === 'undefined' ? { R: 1037, thickness: 214, centre: -542, coarse: false } : measureRing(),
  )
  const wheelRef = useRef<HTMLDivElement>(null)
  const blurRef = useRef<SVGFEGaussianBlurElement>(null)
  // drift is the slow idle turn; it eases to 0 while a card is hovered and back after
  const physics = useRef({ angle: 0, vel: 0, drift: 1, blur: 0 })
  const paused = useRef(false)
  const touch = useRef({ x: 0, y: 0, moved: false })
  const visible = open || closing

  const close = () => {
    if (!open || closing) return
    physics.current.vel += 4
    setClosing(true)
    setTimeout(() => {
      setClosing(false)
      onClose()
    }, 450)
  }

  // a push when it opens
  useEffect(() => {
    if (open) physics.current.vel = -9
  }, [open])

  // size follows the viewport
  useEffect(() => {
    if (!visible) return
    const measure = () => setSize(measureRing())
    measure()
    addEventListener('resize', measure)
    return () => removeEventListener('resize', measure)
  }, [visible])

  // spin loop + input while open
  useEffect(() => {
    if (!visible) return
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const p = physics.current
    let raf = 0
    let lastTop = -1
    let lastBlur = -1

    const loop = () => {
      raf = requestAnimationFrame(loop)
      p.vel *= 0.92
      p.drift += ((paused.current ? 0 : 1) - p.drift) * 0.08
      p.angle += p.vel + (reduce ? 0 : 0.04 * p.drift)
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${p.angle}deg)`
        // motion blur (Codrops style): horizontal blur per card, scaled by speed, off when slow
        const speed = Math.abs(p.vel) * (size.R / 1000)
        const want = reduce ? 0 : Math.min(28, Math.max(0, speed - 0.8) * 3)
        p.blur += (want - p.blur) * 0.3
        const blur = p.blur < 0.3 ? 0 : Math.round(p.blur * 2) / 2
        if (blur !== lastBlur) {
          lastBlur = blur
          blurRef.current?.setAttribute('stdDeviation', `${blur} 0`)
          if (blur) wheelRef.current.dataset.spinning = ''
          else delete wheelRef.current.dataset.spinning
        }
      }
      const t = Math.round(norm(-p.angle) / SPAN) % N
      if (t !== lastTop) {
        lastTop = t
        setTop(t)
      }
    }
    raf = requestAnimationFrame(loop)

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      p.vel += e.deltaY * 0.012
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        p.vel -= 3
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        p.vel += 3
      } else if (e.key === 'Enter') {
        const v = versions[lastTop % versions.length]
        if (v) onOpenVersion(v)
      }
    }
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      touch.current = { x: t.clientX, y: t.clientY, moved: false }
    }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      e.preventDefault()
      const c = touch.current
      p.vel += (c.y - t.clientY) * 0.06 + (t.clientX - c.x) * 0.06
      if (Math.abs(c.y - t.clientY) + Math.abs(t.clientX - c.x) > 6) c.moved = true
      c.x = t.clientX
      c.y = t.clientY
    }

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.dataset.wheel = 'open'
    addEventListener('wheel', onWheel, { passive: false })
    addEventListener('keydown', onKey)
    addEventListener('touchstart', onTouchStart, { passive: true })
    addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = previous
      delete document.body.dataset.wheel
      removeEventListener('wheel', onWheel)
      removeEventListener('keydown', onKey)
      removeEventListener('touchstart', onTouchStart)
      removeEventListener('touchmove', onTouchMove)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  if (!visible) return null

  const { R, thickness, centre, coarse } = size
  const topVersion = versions[top % versions.length]
  const hint = coarse ? 'drag to spin · tap open below' : 'scroll to spin · click a slice or open below · esc to close'
  const card = cardFor(R)
  // headroom above the rim, so a hovered card (scaled 1.2%) is not clipped
  const head = Math.ceil(R * 0.015) + 8
  // each slice is a small box round its band (cheaper than the 2R square), rotated about the
  // ring's centre
  const bandWidth = bandWidthFor(R)
  const boxW = bandWidth + 2 * BOX_PAD
  const boxH = thickness + card.sag + 2 * BOX_PAD
  const cx = boxW / 2
  const cy = BOX_PAD + R
  const clip = `path('${sectorPath(cx, cy, R, R - thickness, card.half, CARD_RADIUS)}')`
  // the card's 1px border, drawn just inside the clip (a css border would be cut off by it)
  const edge = sectorPath(0, 0, R - 0.5, R - thickness + 0.5, card.half - 0.5 / R, CARD_RADIUS - 0.5)
  // the shot, clipped in its canvas box (the ring's centre is shotR below its top edge)
  const shotClip = `path('${sectorPath(
    card.shotWidth / 2 + BLEED,
    card.shotR,
    card.shotR,
    card.shotR - card.shotDepth,
    card.shotHalf,
    SHOT_RADIUS,
  )}')`
  const shotSpan = (card.shotHalf * 2 * 180) / Math.PI
  // the rows: text runs along these arcs, inset by the padding at each end
  const headArc = arcPath(card.rHead, card.half - PAD / card.rHead)
  const footArc = arcPath(card.rFoot, card.half - PAD / card.rFoot)
  // swatches sit at the right end of the header row, 10px dots 6px apart, centred on the text
  const swatchR = card.rHead + ROW / 2
  const swatchAngle = (k: number) => card.half - (PAD + 5 + k * 16) / swatchR

  return createPortal(
    <>
      <div className={cn(styles.overlay, closing && styles.overlayOut)} onClick={close}>
        <div className={cn(styles.readout, closing && styles.readoutOut)}>
          <h2 className={styles.title}>time machine</h2>
          <p className={styles.sub}>Older me, older sites. Spin to visit.</p>
          <p className={styles.hint}>{hint}</p>
        </div>
      </div>

      {/* the motion blur filter; the loop sets its stdDeviation from the spin speed */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="ring-spin-blur" x="-25%" y="-5%" width="150%" height="110%" colorInterpolationFilters="sRGB">
          <feGaussianBlur ref={blurRef} in="SourceGraphic" stdDeviation="0 0" />
        </filter>
      </svg>

      <div
        className={cn(styles.ring, closing && styles.ringOut)}
        style={{ height: R + centre + head, transformOrigin: `50% ${R + head}px` }}
      >
        <div
          ref={wheelRef}
          className={styles.wheel}
          style={{ width: 2 * R, height: 2 * R, left: `calc(50vw - ${R}px)`, top: head }}
        >
          {/* backing band, so the gutters show the page colour */}
          <div className={styles.backing} style={{ borderWidth: thickness }} aria-hidden="true" />
          {Array.from({ length: N }, (_, i) => {
            const v = versions[i % versions.length]
            if (!v) return null
            const isTop = i === top
            const isHover = hover === i
            const dark = v.dark ?? v
            const theme = isDark ? dark : v
            return (
              <a
                key={i}
                href={v.href}
                aria-label={`${v.label}, ${v.year}`}
                className={styles.slice}
                onMouseEnter={() => {
                  paused.current = true
                  setHover(i)
                }}
                onMouseLeave={() => {
                  paused.current = false
                  setHover(-1)
                }}
                onClick={(e) => {
                  e.preventDefault()
                  if (touch.current.moved) return
                  onOpenVersion(v)
                }}
                style={
                  {
                    width: boxW,
                    height: boxH,
                    left: R - cx,
                    top: -BOX_PAD,
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: `rotate(${i * SPAN}deg) scale(${isHover ? 1.012 : 1})`,
                    zIndex: isHover ? 2 : 1,
                    clipPath: clip,
                    opacity: isTop || isHover ? 1 : 0.7,
                    animation: closing ? 'none' : `${styles.sliceIn} 0.5s ${0.15 + i * 0.04}s ease both`,
                    '--bg-light': v.bg,
                    '--fg-light': v.fg,
                    '--bg-dark': dark.bg,
                    '--fg-dark': dark.fg,
                  } as React.CSSProperties
                }
              >
                {/* the shot, bent along its own arc inside the card's padding */}
                <BandShot
                  src={v.shot}
                  radius={card.shotR}
                  span={shotSpan}
                  width={card.shotWidth}
                  thickness={card.shotDepth}
                  bleed={BLEED}
                  className={cn(styles.shot, v.dark && styles.shotLight)}
                  style={{ top: cy - card.shotR, clipPath: shotClip }}
                />
                {v.dark && (
                  <BandShot
                    src={v.dark.shot}
                    radius={card.shotR}
                    span={shotSpan}
                    width={card.shotWidth}
                    thickness={card.shotDepth}
                    bleed={BLEED}
                    className={cn(styles.shot, styles.shotDark)}
                    style={{ top: cy - card.shotR, clipPath: shotClip }}
                  />
                )}
                <svg className={styles.edge} viewBox={`${-cx} ${-cy} ${boxW} ${boxH}`} aria-hidden="true">
                  <path d={edge} />
                </svg>
                {/* header and footer rows, along the rim and the inner edge */}
                <svg className={styles.rows} viewBox={`${-cx} ${-cy} ${boxW} ${boxH}`} aria-hidden="true">
                  <defs>
                    <path id={`ring-head-${i}`} d={headArc} />
                    <path id={`ring-foot-${i}`} d={footArc} />
                  </defs>
                  <text className={styles.rowText}>
                    <textPath href={`#ring-head-${i}`}>
                      <tspan className={styles.rowMain}>{v.label.toUpperCase()}</tspan>
                      <tspan className={styles.rowYear} dx="10">
                        {v.year}
                      </tspan>
                    </textPath>
                  </text>
                  <text className={cn(styles.rowText, styles.rowFoot)}>
                    <textPath href={`#ring-foot-${i}`}>{coarse ? 'TAP TO OPEN' : 'CLICK TO OPEN'}</textPath>
                  </text>
                  <text className={cn(styles.rowText, styles.rowFoot)} textAnchor="end">
                    <textPath href={`#ring-foot-${i}`} startOffset="100%">
                      {(i % versions.length) + 1} / {versions.length}
                    </textPath>
                  </text>
                </svg>
                {/* swatches: accent, muted, text, background. Html, so each can have a tooltip */}
                {[v.accent, v.muted, theme.fg, theme.bg].map((c, k) => {
                  const [x, y] = polar(swatchR, swatchAngle(k))
                  return (
                    <Tooltip
                      key={k}
                      animateFill
                      size="small"
                      inertia
                      title={c}
                      position="top"
                      trigger="mouseenter"
                      className={styles.swatch}
                      style={{ left: cx + x, top: cy + y }}
                    >
                      <span style={{ background: c }} />
                    </Tooltip>
                  )
                })}
              </a>
            )
          })}
        </div>
      </div>

      {topVersion && (
        <div className={cn(styles.pill, closing && styles.readoutOut)}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.pillLabel}>{topVersion.label}</span>
          <span className={styles.pillYear}>{topVersion.year}</span>
          <a
            href={topVersion.href}
            className={styles.pillOpen}
            onClick={(e) => {
              e.preventDefault()
              onOpenVersion(topVersion)
            }}
          >
            open
          </a>
          <span className={styles.pillSep} aria-hidden="true">
            ·
          </span>
          <button type="button" className={styles.pillClose} onClick={close}>
            close <span>esc</span>
          </button>
        </div>
      )}
    </>,
    document.body,
  )
}

export default VersionRing
