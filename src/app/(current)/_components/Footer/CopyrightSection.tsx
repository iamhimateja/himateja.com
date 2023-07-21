'use client'
import ArrowTopRight from '@icons/ArrowTopRight'
import Link from 'next/link'
import { Tooltip } from 'react-tippy'

import styles from './Footer.module.css'

const CopyRightSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.copyrightSection}>
      <Link href="/" className={styles.link} aria-label="This website's copyright" tabIndex={0}>
        © {currentYear} Himateja Merlapaka
      </Link>
      <Tooltip
        interactive
        animateFill
        size="small"
        inertia
        title="This website's source code, don't forget to star it! 🌟"
        position="top-end"
        trigger="mouseenter"
      >
        <Link
          href="https://github.com/iamhimateja/himateja.com"
          className={styles.link}
          aria-label="This website's source code"
          tabIndex={0}
          target="_blank"
        >
          Source Code
          <ArrowTopRight className="w-3.5	h-3.5" />
        </Link>
      </Tooltip>
    </div>
  )
}

export default CopyRightSection
