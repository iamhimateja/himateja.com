'use client'

import { socialLinks } from '@globals/constants'
import { Icons } from '@icons'
import { cn } from '@utils/index'
import Link from 'next/link'
import { Tooltip } from 'react-tippy'

import styles from './Footer.module.css'

/* tooltip content, copied into the tooltip when it is created */
const TipTemplate = ({ id, label }: { id: string; label: string }) => (
  <span id={id} hidden>
    <span className="flex items-center gap-1">
      {label}
      <Icons.ArrowTopRight className="h-3.5 w-3.5" />
    </span>
  </span>
)

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <TipTemplate id="linkedin-tip" label="LinkedIn" />
      <TipTemplate id="github-tip" label="Github" />
      <TipTemplate id="codepen-tip" label="CodePen" />
      <TipTemplate id="twitter-tip" label="Twitter" />
      <Tooltip
        animateFill
        size="small"
        inertia
        rawTemplate="#linkedin-tip"
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
        rawTemplate="#github-tip"
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
        rawTemplate="#codepen-tip"
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
          <Icons.Codepen />
        </Link>
      </Tooltip>
      <Tooltip
        animateFill
        size="small"
        inertia
        rawTemplate="#twitter-tip"
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
