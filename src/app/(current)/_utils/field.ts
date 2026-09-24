/* Noise field renderer from the v8 prototype: ascii (dither), dots or short lines, with an
   optional pointer glow and click ripples. Only touches the context it is given. */

export type FieldStyle = 'dither' | 'dots' | 'lines'

export type Ripple = { x: number; y: number; t0: number; amp: number }

type FieldOptions = {
  style: FieldStyle
  /* animation time in seconds */
  t: number
  ink: string
  alpha: number
  mouse: { x: number; y: number }
  ripples: Ripple[]
  /* cell size */
  cw: number
  ch: number
  seed?: number
  /* fade the middle of the field so text stays readable */
  fadeCenter?: boolean
  /* performance.now() */
  now: number
}

const RAMP = ' .:-=+*#%@'
const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
]

export function drawField(ctx: CanvasRenderingContext2D, w: number, h: number, o: FieldOptions) {
  const { style, t, ink, alpha, mouse, ripples, cw, ch, seed = 0, fadeCenter = false, now } = o
  const cols = Math.ceil(w / cw) + 1
  const rows = Math.ceil(h / ch) + 1

  ctx.clearRect(0, 0, w, h)
  ctx.font = `${Math.round(cw * 0.8)}px "Geist Mono", ui-monospace, monospace`
  ctx.textBaseline = 'top'
  ctx.fillStyle = ink
  ctx.strokeStyle = ink
  ctx.lineCap = 'round'

  const noise = (x: number, y: number) =>
    0.5 +
    0.5 *
      (Math.sin(x * 0.35 + t + seed + Math.sin(y * 0.2 + t * 0.8) * 1.2) * Math.cos(y * 0.28 - t * 0.7 + seed) * 0.6 +
        Math.sin((x + y) * 0.15 + t * 0.5) * 0.4)

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = x * cw + cw / 2
      const py = y * ch + ch / 2
      let v = noise(x, y)
      let rip = 0

      for (const r of ripples) {
        const age = (now - r.t0) / 1000
        const d = Math.hypot(px - r.x, py - r.y)
        const front = age * 90
        rip +=
          (Math.sin(d * 0.045 - age * 3.2) * Math.exp(-((d - front) ** 2) / 6000) * r.amp * Math.exp(-age * 0.55)) /
          (1 + d * 0.004)
      }

      const dm = Math.hypot(px - mouse.x, py - mouse.y)
      const glow = Math.exp(-(dm * dm) / (fadeCenter ? 26000 : 6000))
      v = v * (1 - glow * 0.5) + glow * (0.35 + 0.35 * Math.sin(dm * 0.06 - now / 600)) + rip * 0.6

      let fade = 1
      if (fadeCenter) {
        fade = Math.max(
          Math.min(1, Math.abs(px - w / 2) / (w * 0.32) - 0.55),
          glow * 0.9 + Math.min(1, Math.abs(rip)) * 0.7,
        )
        if (fade <= 0.02) continue
      }

      const th = ((BAYER[y & 3]?.[x & 3] ?? 0) + 0.5) / 16
      const lvl = Math.max(0, Math.min(1, v * fade))

      if (style === 'dots') {
        if (lvl < 0.08) continue
        const edge = Math.min(px, w - px, py, h - py) / Math.min(w, h)
        const shrink = 0.3 + Math.min(1, edge * 3.2) * 0.7
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(px, py, (0.4 + lvl * 1.2) * shrink * (cw / 14), 0, Math.PI * 2)
        ctx.fill()
      } else if (style === 'lines') {
        if (lvl < 0.06) continue
        let ang = Math.sin(x * 0.18 + t + seed) * 1.4 + Math.cos(y * 0.16 - t * 0.8) * 1.4
        if (mouse.x > -999) ang = ang * (1 - glow) + (Math.atan2(py - mouse.y, px - mouse.x) + Math.PI / 2) * glow
        ang += rip * 1.6
        const len = (3 + lvl * 7) * (cw / 14)
        const dx = (Math.cos(ang) * len) / 2
        const dy = (Math.sin(ang) * len) / 2
        ctx.globalAlpha = alpha * 0.6
        ctx.lineWidth = 0.8 + lvl * 0.6
        ctx.beginPath()
        ctx.moveTo(px - dx, py - dy)
        ctx.lineTo(px + dx, py + dy)
        ctx.stroke()
      } else {
        const q = Math.floor(Math.max(0, Math.min(0.999, v * fade + (th - 0.5) * 0.4)) * RAMP.length)
        const c = RAMP[q]
        if (!c || c === ' ') continue
        ctx.globalAlpha = alpha
        ctx.fillText(c, x * cw, y * ch)
      }
    }
  }
  ctx.globalAlpha = 1
}
