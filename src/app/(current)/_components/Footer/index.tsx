import { socialLinks } from '@globals/constants'
import clsx from 'clsx'
import Link from 'next/link'

import CopyEmailButton from './CopyEmailButton'
import CopyrightSection from './CopyrightSection'
import styles from './Footer.module.css'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <>
      <div className={styles.divider}>
        <div className={styles.diamond} />
      </div>
      <div className={styles.container}>
        <div className={styles.contactLinks}>
          <div className={styles.contactMeOn}>
            <div className={styles.avatar} />
            <span>
              Ready to collaborate? <br /> Let&#39;s connect.
            </span>
          </div>
          <div className={styles.links}>
            <Link
              aria-label="Schedule a chat"
              className={clsx(styles.link, styles.calendly)}
              href={socialLinks.calendly}
              target="_blank"
              tabIndex={0}
              prefetch={false}
            >
              <span>Schedule a chat</span>
              <span>calendly.com/himateja</span>
            </Link>

            <SocialLinks />
          </div>
        </div>
        <div className={styles.emailSection}>
          <span>Wanna work together?</span>
          <CopyEmailButton />
        </div>

        <CopyrightSection />
      </div>
    </>
  )
}

export default Footer
