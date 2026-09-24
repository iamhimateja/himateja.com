'use client'

import { useEffect, useRef } from 'react'

/* The drifting dots behind the name. Ported from dots.js on the old site, which credited
   Andria Storm. 150 dots, each a random radius under 1px, bouncing off the edges. */
const COUNT = 150
const COLOR = '#5aa2e0'

type Dot = { x: number; y: number; vx: number; vy: number; r: number }

const Dots = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let dots: Dot[] = []
    const seed = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      dots = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: -0.5 + Math.random(),
        vy: -0.5 + Math.random(),
        r: Math.random(),
      }))
    }

    let frame = 0
    let last = 0
    const step = (now: number) => {
      frame = requestAnimationFrame(step)
      // the original ran at 50fps
      if (now - last < 20) return
      last = now
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = COLOR
      for (const d of dots) {
        if (d.y < 0 || d.y > canvas.height) d.vy = -d.vy
        else if (d.x < 0 || d.x > canvas.width) d.vx = -d.vx
        d.x += d.vx
        d.y += d.vy
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    seed()
    frame = requestAnimationFrame(step)
    window.addEventListener('resize', seed)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', seed)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}

export default Dots
