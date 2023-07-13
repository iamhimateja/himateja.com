import { myMailId, socialLinks } from '@globals/constants'
import GitHubIcon from '@icons/social/GitHub'
import LinkedinIcon from '@icons/social/Linkedin'
import TwitterIcon from '@icons/social/Twitter'
import { CodepenIcon } from '@v3/components/svg'
import clsx from 'clsx'
import Link from 'next/link'

import CopyEmailButton from './CopyEmailButton'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactLinks}>
        <div className={styles.contactMeOn}>
          <div className={styles.avatar} />
          <span>Contact me on</span>
          <span>↳</span>
        </div>
        <div className={styles.links}>
          <Link className={clsx(styles.link, styles.calendly)} href={socialLinks.calendly}>
            <span>Book a call</span>
            <span>calendly.com/himateja</span>
          </Link>

          <div className={styles.social}>
            <Link className={clsx(styles.link, styles.linkedin)} href={socialLinks.linkedIn}>
              <LinkedinIcon />
            </Link>
            <Link className={clsx(styles.link, styles.github)} href={socialLinks.github}>
              <GitHubIcon />
            </Link>
            <Link className={clsx(styles.link, styles.codepen)} href={socialLinks.codepen}>
              <CodepenIcon />
            </Link>
            <Link className={clsx(styles.link, styles.twitter)} href={socialLinks.twitter}>
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.emailSection}>
        <span>Wanna work together?</span>
        <div className={styles.emailAddressButton}>
          <a className={styles.emailId} href={`mailto:${myMailId}`} target="_blank">
            {myMailId}
          </a>
          <CopyEmailButton />
        </div>
      </div>
    </div>
  )
}

export default Footer
