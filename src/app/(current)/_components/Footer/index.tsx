import { myMailId, socialLinks } from '@globals/constants'
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
            <span>Contact me on</span>
            <span>↳</span>
          </div>
          <div className={styles.links}>
            <Link className={clsx(styles.link, styles.calendly)} href={socialLinks.calendly} target="_blank">
              <span>Book a call</span>
              <span>calendly.com/himateja</span>
            </Link>

            <SocialLinks />
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

        <CopyrightSection />
      </div>
    </>
  )
}

export default Footer
