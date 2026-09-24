'use client'

import { drawField, type FieldStyle, type Ripple } from '@utils/field'
import { useEffect, useRef } from 'react'

type Props = {
  style?: FieldStyle
  alpha?: number
  cellWidth?: number
  cellHeight?: number
  seed?: number
  /* fade the middle so text on top stays readable */
  fadeCenter?: boolean
  /* follow the pointer and ripple on click (window-wide) */
  interactive?: boolean
  /* slow the animation; 1 is the background speed, 0.6 the cover speed */
  speed?: number
  className?: string
}

/* Fills its parent and redraws every 60ms (110ms on touch). Paused when the tab is hidden,
   one frame under reduced motion. */
const FieldCanvas = ({
  style = 'dither',
  alpha = 0.14,
  cellWidth = 14,
  cellHeight = 18,
  seed = 0,
  fadeCenter = false,
  interactive = false,
  speed = 1,
  className,
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const isTouch = matchMedia('(pointer:coarse)').matches
    const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    const pixelRatio = Math.min(devicePixelRatio || 1, isTouch ? 1.5 : 2)
    const frameIntervalMs = isTouch ? 110 : 60
    const pointer = { x: -9999, y: -9999 }
    let ripples: Ripple[] = []
    let inkColor = ''
    let frameId = 0
    let lastFrameTime = 0
    let width = 0
    let height = 0

    const resize = () => {
      const canvasRect = canvas.getBoundingClientRect()
      width = canvasRect.width
      height = canvasRect.height
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      lastFrameTime = 0
    }

    const drawFrame = (now: number) => {
      if (!inkColor) inkColor = getComputedStyle(canvas).color || '#888'
      const canvasOffset = interactive ? canvas.getBoundingClientRect() : { left: 0, top: 0 }
      ripples = ripples.filter((ripple) => now - ripple.t0 < 5000)
      drawField(context, width, height, {
        style,
        t: (now / 1000) * 0.25 * speed + seed,
        ink: inkColor,
        alpha,
        mouse: { x: pointer.x - canvasOffset.left, y: pointer.y - canvasOffset.top },
        ripples: ripples.map((ripple) => ({
          ...ripple,
          x: ripple.x - canvasOffset.left,
          y: ripple.y - canvasOffset.top,
        })),
        cw: cellWidth,
        ch: cellHeight,
        seed,
        fadeCenter,
        now,
      })
    }

    const onAnimationFrame = (now: number) => {
      frameId = requestAnimationFrame(onAnimationFrame)
      if (now - lastFrameTime < frameIntervalMs) return
      lastFrameTime = now
      drawFrame(now)
    }

    const startAnimation = () => {
      if (frameId) return
      if (prefersReducedMotion) {
        drawFrame(performance.now())
        return
      }
      lastFrameTime = 0
      frameId = requestAnimationFrame(onAnimationFrame)
    }
    const stopAnimation = () => {
      cancelAnimationFrame(frameId)
      frameId = 0
    }

    const handleVisibilityChange = () => (document.hidden ? stopAnimation() : startAnimation())
    let lastRippleTime = 0
    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      const now = performance.now()
      if (now - lastRippleTime > 320) {
        lastRippleTime = now
        ripples.push({ x: event.clientX, y: event.clientY, t0: now, amp: 0.35 })
      }
    }
    const handlePointerDown = (event: PointerEvent) =>
      ripples.push({ x: event.clientX, y: event.clientY, t0: performance.now(), amp: 1.4 })

    // the theme change swaps the ink colour; pick it up on the next frame
    const themeObserver = new MutationObserver(() => {
      inkColor = ''
      if (prefersReducedMotion) drawFrame(performance.now())
    })
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })

    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (prefersReducedMotion) drawFrame(performance.now())
    })
    resizeObserver.observe(canvas)
    resize()
    startAnimation()
    document.addEventListener('visibilitychange', handleVisibilityChange)
    if (interactive) {
      addEventListener('pointermove', handlePointerMove, { passive: true })
      addEventListener('pointerdown', handlePointerDown, { passive: true })
    }

    return () => {
      stopAnimation()
      resizeObserver.disconnect()
      themeObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      removeEventListener('pointermove', handlePointerMove)
      removeEventListener('pointerdown', handlePointerDown)
    }
  }, [style, alpha, cellWidth, cellHeight, seed, fadeCenter, interactive, speed])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}

export default FieldCanvas
