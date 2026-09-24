'use client'

import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'

import styles from '../styles/V2.module.css'
import Dots from './Dots'
import Name from './Name'

const TAGLINE = 'designer & developer.'

/* HideLoader() from scripts.js. Visibility is a set() after each tween: GSAP 3 would apply it
   at the start, TweenMax did it at the end. */
const hideLoader = () =>
  gsap
    .timeline()
    .to(`.${styles.ball}`, { duration: 0.1, animation: 'none' })
    .to(`.${styles.ball}`, { duration: 0.5, scale: 0, ease: 'elastic.out(1, 0.3)', opacity: 0 })
    .set(`.${styles.ball}`, { visibility: 'hidden' })
    .to(`.${styles.bigg}`, { duration: 0.5, scale: 0.0000000001, ease: 'power1.out' }, '-=0.3')
    .set(`.${styles.bigg}`, { visibility: 'hidden' })
    .to(`.${styles.loader}`, { duration: 0.2, zIndex: 0 })

/* Animation() from scripts.js, in GSAP 3, with the original timings. */
const animation = (onDone: () => void) => {
  const ease = 'power1.out'
  const d = 0.34

  const h = gsap
    .timeline()
    .from('.h1', { y: -1050, duration: d, ease })
    .from('.h2', { y: 1050, duration: d, ease }, '-=0.25')
  const i = gsap.timeline().from('.i', { scaleX: 0, duration: 0.25, ease, transformOrigin: 'left 50%' })
  // M and J pivot on fixed svg points (viewBox units): a percentage origin follows each wedge's
  // bounding box, not its hinge
  const m = gsap
    .timeline()
    .from('.mRight', { skewY: 90, scaleX: 0.25, duration: d, ease, svgOrigin: '1607.65 493.31' })
    .from('.mLeft', { skewY: 90, scaleX: 0.25, duration: d, ease, svgOrigin: '1175.26 493.32' }, '-=0.25')
  const a = gsap.timeline().from('.a', { scale: 0, duration: d, ease, transformOrigin: '50% 50%' })
  const t = gsap
    .timeline()
    .from('.tTop', { scaleX: 0, duration: d, ease, transformOrigin: 'bottom 50%' })
    .from('.tBot', { scaleY: 0, duration: d, ease, transformOrigin: 'bottom 50%' }, '-=0.34')
  const e = gsap
    .timeline()
    .from('.e', { scaleX: 0, duration: d, ease, transformOrigin: 'left 50%' })
    .from('.eBot', { scaleX: 0, duration: d, ease, transformOrigin: 'left 50%' }, '-=0.34')
  const j = gsap
    .timeline()
    .from('.jLeft', { skewY: 90, scaleX: 0.25, duration: d, ease, svgOrigin: '3486.69 621.17' })
    .from('.jRight', { skewY: -90, scaleX: 0.25, duration: d, ease, svgOrigin: '3484.44 493.32' }, '-=0.34')
  const ar = gsap.timeline().from('.ar', { scale: 0, duration: d, ease, transformOrigin: '50% 50%' })

  gsap.timeline({ delay: 1, onComplete: onDone }).add(h).add(i).add(m).add(a).add(t).add(e).add(j).add(ar)
}

/* like window.onload in the original: starts once the page has loaded */
const useEntrance = (scope: React.RefObject<HTMLDivElement | null>, onDone: () => void) => {
  useEffect(() => {
    const ctx = gsap.context(() => {}, scope)
    const start = () =>
      ctx.add(() => {
        hideLoader()
        animation(onDone)
      })
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => {
      window.removeEventListener('load', start)
      ctx.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

/* one character every 200ms, like the original Type() */
const useTypewriter = (text: string, go: boolean) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!go) return
    const id = window.setInterval(() => {
      setCount((n) => {
        if (n >= text.length) window.clearInterval(id)
        return Math.min(n + 1, text.length)
      })
    }, 200)
    return () => window.clearInterval(id)
  }, [go, text])
  return text.slice(0, count)
}

/* A copy of /v2; the M and J tweens pivot on fixed svg points. */
const Home = () => {
  const scope = useRef<HTMLDivElement>(null)
  const [landed, setLanded] = useState(false)
  useEntrance(scope, () => setLanded(true))
  const tagline = useTypewriter(TAGLINE, landed)

  return (
    <div ref={scope} className={styles.page}>
      {/* the original loader (the saved page had its blue disc hidden) */}
      <div className={styles.loader} aria-hidden="true">
        <div className={styles.bigg} />
        <div className={styles.ballWrap}>
          <span className={styles.ball} />
        </div>
      </div>
      <Dots className={styles.canvas} />

      <div className={styles.name}>
        <Name className={styles.wordmark} />
        <div className={styles.sub} aria-live="polite">
          {tagline}
        </div>
      </div>
    </div>
  )
}

export default Home
