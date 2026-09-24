'use client'
import { Icons } from '@icons'
import Link from 'next/link'
import { Tooltip } from 'react-tippy'

import styles from './Footer.module.css'

const CopyRightSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.copyrightSection}>
      <Link href="/" className={styles.link} tabIndex={0}>
        © {currentYear} Himateja Merlapaka
      </Link>
      <span id="source-code-tip" hidden>
        <span className="flex items-center gap-1.5">
          <Icons.GitHub className="h-3.5 w-3.5" />
          iamhimateja/himateja.com
        </span>
      </span>
      <Tooltip
        interactive
        animateFill
        size="small"
        inertia
        rawTemplate="#source-code-tip"
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
          <Icons.ArrowTopRight className="h-3.5 w-3.5" />
        </Link>
      </Tooltip>
    </div>
  )
}

export default CopyRightSection
