import Link from 'next/link'

import styles from './ExperienceSection.module.css'

const ExperienceSection = () => {
  return (
    <div className={styles.container}>
      <Link href="https://index.app/" className={styles.item} tabIndex={0} aria-label="click to open Index website">
        <div className={styles.companyTitle}>Index</div>
        <div className={styles.location}>California (USA) - Remote</div>
        <div className={styles.line}>
          <div className={styles.lineInner} />
        </div>
        <div className={styles.role}>Full Stack Engineer</div>
        <div className={styles.duration}>Sep &lsquo;21 - Apr &lsquo;23</div>
      </Link>
      <Link
        href="https://feathery.io/"
        className={styles.item}
        tabIndex={0}
        aria-label="click to open Feathery website"
      >
        <div className={styles.companyTitle}>Feathery</div>
        <div className={styles.location}>California (USA) - Remote</div>
        <div className={styles.line}>
          <div className={styles.lineInner} />
        </div>
        <div className={styles.role}>Full Stack Engineer</div>
        <div className={styles.duration}>Jun &lsquo;21 - Aug &lsquo;21</div>
      </Link>
      <Link
        href="https://involvio.com"
        className={styles.item}
        tabIndex={0}
        aria-label="click to open Involvio's website"
      >
        <div className={styles.companyTitle}>Involvio</div>
        <div className={styles.location}>Bangalore (India)</div>
        <div className={styles.line}>
          <div className={styles.lineInner} />
        </div>
        <div className={styles.role}>Software Engineer</div>
        <div className={styles.duration}>Jul &lsquo;19 - May &lsquo;21</div>
      </Link>
    </div>
  )
}

export default ExperienceSection
