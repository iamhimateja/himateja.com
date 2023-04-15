import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { CodepenIcon, GithubIcon, LinkedInIcon } from '@/components/svg'
import { myAlternativeEmailId, myMailId, socialLinks } from '@/lib/variables'

import styles from './styles.module.scss'

const PageFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.avatarBar}>
          <Link href="/" className={styles.link} aria-label="Go to Home" tabIndex={0}>
            <Image src="/images/logo-light.webp" alt="Himateja" width="60" height="60" />
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <div className={styles.footerLeft}>
              <div>
                Lets work together <span className={styles.handshake}>🤝</span>
              </div>
            </div>
            <div className={styles.footerRight}>
              Hey, I&#39;m looking for a job right now. If you need a full-stack or front-end engineer, give me a shout!
              <br />
              <br />
              I&#39;d love to chat!
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.contactLinks}>
              <span className={styles.label}>Contact</span>
              <div className={styles.emailLinks}>
                <Link aria-label="Contact Himateja with this email" tabIndex={0} href={`mailto:${myMailId}`}>
                  {myMailId}
                </Link>
                <Link
                  aria-label="Contact Himateja with this email"
                  tabIndex={0}
                  href={`mailto:${myAlternativeEmailId}`}
                >
                  {myAlternativeEmailId}
                </Link>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <span className={styles.label}>Social</span>
              <div className={styles.linksContainer}>
                <Link
                  href={socialLinks.linkedIn}
                  target="_blank"
                  aria-label="Go to Himateja's LinkedIn profile."
                  tabIndex={0}
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  aria-label="Go to Himateja's Github profile"
                  tabIndex={0}
                >
                  <GithubIcon />
                </Link>
                <Link
                  href={socialLinks.codepen}
                  target="_blank"
                  aria-label="Go to Himateja's Codepen profile"
                  tabIndex={0}
                >
                  <CodepenIcon />
                </Link>
              </div>
            </div>

            <div className={styles.copyright}>
              <span className={styles.label}>Copyright</span>
              <Link href="/" className={styles.link} aria-label="This website's copyright" tabIndex={0}>
                © {currentYear} Himateja Merlapaka
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageFooter
