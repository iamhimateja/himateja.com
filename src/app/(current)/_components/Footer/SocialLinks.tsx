'use client'

import { Icons } from '@components/Icons'
import { socialLinks } from '@globals/constants'
import { cn } from '@utils/index'
import { CodepenIcon } from '@v3/components/svg'
import Link from 'next/link'
import { Tooltip } from 'react-tippy'

import styles from './Footer.module.css'

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <Tooltip
        animateFill
        size="small"
        inertia
        title="LinkedIn ↗"
        position="top"
        trigger="mouseenter"
        className={styles.link}
      >
        <Link
          prefetch={false}
          tabIndex={0}
          className={cn(styles.link, styles.linkedin)}
          href={socialLinks.linkedIn}
          target="_blank"
          aria-label="LinkedIn"
        >
          <Icons.Linkedin />
        </Link>
      </Tooltip>
      <Tooltip
        animateFill
        size="small"
        inertia
        title="Github ↗"
        position="top"
        trigger="mouseenter"
        className={styles.link}
        tabIndex={0}
      >
        <Link
          prefetch={false}
          aria-label="Github"
          className={cn(styles.link, styles.github)}
          href={socialLinks.github}
          target="_blank"
        >
          <Icons.GitHub />
        </Link>
      </Tooltip>
      <Tooltip
        animateFill
        size="small"
        inertia
        title="CodePen ↗"
        position="top"
        trigger="mouseenter"
        className={styles.link}
      >
        <Link
          prefetch={false}
          aria-label="CodePen"
          className={cn(styles.link, styles.codepen)}
          href={socialLinks.codepen}
          target="_blank"
          tabIndex={0}
        >
          <CodepenIcon />
        </Link>
      </Tooltip>
      <Tooltip
        animateFill
        size="small"
        inertia
        title="Twitter ↗"
        position="top"
        trigger="mouseenter"
        className={styles.link}
      >
        <Link
          prefetch={false}
          aria-label="Twitter"
          className={cn(styles.link, styles.twitter)}
          href={socialLinks.twitter}
          target="_blank"
          tabIndex={0}
        >
          <Icons.Twitter />
        </Link>
      </Tooltip>
    </div>
  )
}

export default SocialLinks
