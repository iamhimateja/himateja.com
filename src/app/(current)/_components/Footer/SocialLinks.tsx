'use client'

import { socialLinks } from '@globals/constants'
import GitHubIcon from '@icons/social/GitHub'
import LinkedinIcon from '@icons/social/Linkedin'
import TwitterIcon from '@icons/social/Twitter'
import { CodepenIcon } from '@v3/components/svg'
import clsx from 'clsx'
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
          className={clsx(styles.link, styles.linkedin)}
          href={socialLinks.linkedIn}
          target="_blank"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
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
          className={clsx(styles.link, styles.github)}
          href={socialLinks.github}
          target="_blank"
        >
          <GitHubIcon />
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
          className={clsx(styles.link, styles.codepen)}
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
          className={clsx(styles.link, styles.twitter)}
          href={socialLinks.twitter}
          target="_blank"
          tabIndex={0}
        >
          <TwitterIcon />
        </Link>
      </Tooltip>
    </div>
  )
}

export default SocialLinks
