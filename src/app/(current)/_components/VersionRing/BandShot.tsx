'use client'

import { useEffect, useRef } from 'react'

/* A screenshot bent along a band of the ring: width along the arc, height from the rim inward
   at the same scale, so it keeps its aspect and only bends. Overflow is cropped at the bottom.
   Drawn once per image and size, then reused. */

type Props = {
  src: string
  /* outer radius of the ring */
  radius: number
  /* full angle of the band in degrees */
  span: number
  /* chord width of the band at the rim, the canvas width */
  width: number
  /* how far the band reaches in from the rim, the canvas height */
  thickness: number
  /* extra px drawn past each side, the edge colour repeated, so a blur has something to smear
     before the clip trims it back */
  bleed?: number
  className?: string
  style?: React.CSSProperties
}

const cache = new Map<string, Promise<HTMLCanvasElement>>()

/* how much lower the band's inner arc sits at its sides than at its centre */
const sagFor = (radius: number, span: number, thickness: number) =>
  Math.ceil((radius - thickness) * (1 - Math.cos(((span / 2) * Math.PI) / 180)))

const load = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })

/* inverse map: for every pixel of the band, find where it comes from in the flat image */
const warp = async (
  src: string,
  radius: number,
  span: number,
  width: number,
  thickness: number,
  bleed: number,
  dpr: number,
) => {
  const img = await load(src)
  const sw = img.naturalWidth
  const sh = img.naturalHeight
  const source = document.createElement('canvas')
  source.width = sw
  source.height = sh
  const sctx = source.getContext('2d')
  if (!sctx) throw new Error('no 2d context')
  sctx.drawImage(img, 0, 0)
  const s = sctx.getImageData(0, 0, sw, sh).data

  // the canvas is a rectangle, the band's inner edge is an arc that dips lower at the sides, so
  // the canvas runs a little deeper than the band's depth at the centre
  const W = Math.ceil((width + 2 * bleed) * dpr)
  const H = Math.ceil((thickness + sagFor(radius, span, thickness)) * dpr)
  const Rd = radius * dpr
  const rMin = Rd - thickness * dpr
  const out = document.createElement('canvas')
  out.width = W
  out.height = H
  const octx = out.getContext('2d')
  if (!octx) throw new Error('no 2d context')
  const o = octx.createImageData(W, H)
  const d = o.data
  const half = ((span / 2) * Math.PI) / 180
  const cx = W / 2
  const bleedRad = (bleed * dpr) / Rd // the extra angle the bleed covers, at the rim
  // image pixels per band pixel, set by the arc at the rim
  const scale = (sw - 1) / (Rd * 2 * half)

  for (let py = 0; py < H; py++) {
    const dy = Rd - py
    for (let px = 0; px < W; px++) {
      const dx = px - cx
      const r = Math.sqrt(dx * dx + dy * dy)
      if (r > Rd + 1 || r < rMin - 1) continue
      const t = Math.atan2(dx, dy)
      if (t < -half - bleedRad - 1 / r || t > half + bleedRad + 1 / r) continue
      // soft edges: how much of this pixel lies inside the arc, in pixels past each edge
      const cover = Math.min(1, Rd - r + 0.5, r - rMin + 0.5, (half + bleedRad - Math.abs(t)) * r + 0.5)
      if (cover <= 0) continue
      // along the arc is the image's left to right; rim inward is the image's top to bottom.
      // Edge pixels sit a fraction outside the image, so the sample is held to its border.
      const u = Math.min(sw - 1, Math.max(0, ((t + half) / (2 * half)) * (sw - 1)))
      const v = Math.min(sh - 1, Math.max(0, (Rd - r) * scale))
      const x0 = Math.floor(u)
      const y0 = Math.floor(v)
      const x1 = Math.min(x0 + 1, sw - 1)
      const y1 = Math.min(y0 + 1, sh - 1)
      const fx = u - x0
      const fy = v - y0
      const i00 = (y0 * sw + x0) * 4
      const i10 = (y0 * sw + x1) * 4
      const i01 = (y1 * sw + x0) * 4
      const i11 = (y1 * sw + x1) * 4
      const k = (py * W + px) * 4
      for (let c = 0; c < 3; c++) {
        const top = s[i00 + c]! * (1 - fx) + s[i10 + c]! * fx
        const bottom = s[i01 + c]! * (1 - fx) + s[i11 + c]! * fx
        d[k + c] = top * (1 - fy) + bottom * fy
      }
      d[k + 3] = Math.round(cover * 255)
    }
  }
  octx.putImageData(o, 0, 0)
  return out
}

/* the bent image for these numbers, from the cache or freshly drawn */
export const bentBand = (src: string, radius: number, span: number, width: number, thickness: number, bleed = 0) => {
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  const key = [src, radius, span, width, thickness, bleed, dpr].join('|')
  let job = cache.get(key)
  if (!job) {
    job = warp(src, radius, span, width, thickness, bleed, dpr).catch((e) => {
      cache.delete(key)
      throw e
    })
    cache.set(key, job)
  }
  return job
}

const BandShot = ({ src, radius, span, width, thickness, bleed = 0, className, style }: Props) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    let live = true
    bentBand(src, radius, span, width, thickness, bleed)
      .then((bent) => {
        if (!live) return
        canvas.width = bent.width
        canvas.height = bent.height
        canvas.getContext('2d')?.drawImage(bent, 0, 0)
      })
      .catch(() => {})
    return () => {
      live = false
    }
  }, [src, radius, span, width, thickness, bleed])

  return (
    <canvas
      ref={ref}
      className={className}
      style={{ ...style, width: width + 2 * bleed, height: thickness + sagFor(radius, span, thickness) }}
      aria-hidden="true"
    />
  )
}

export default BandShot
