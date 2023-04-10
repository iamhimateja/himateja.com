import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CodepenIcon from '@/components/svg/codepen'
import GithubIcon from '@/components/svg/github'
import LinkedInIcon from '@/components/svg/linkedin'
import { myAlternativeEmailId, myMailId, socialLinks } from '@/lib/variables'

import styles from './styles.module.scss'

const PageFooter = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.avatarBar}>
          <Link href="/" className={styles.link}>
            <Image src="/images/headShot.png" alt="Himateja" width="60" height="60" />
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
                <Link href={`mailto:${myMailId}`}>{myMailId}</Link>
                <Link href={`mailto:${myAlternativeEmailId}`}>{myAlternativeEmailId}</Link>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <span className={styles.label}>Social</span>
              <div className={styles.linksContainer}>
                <Link href={socialLinks.linkedIn} target="_blank">
                  <LinkedInIcon />
                </Link>
                <Link href={socialLinks.github} target="_blank">
                  <GithubIcon />
                </Link>
                <Link href={socialLinks.codepen} target="_blank">
                  <CodepenIcon />
                </Link>
              </div>
            </div>

            <div className={styles.copyright}>
              <span className={styles.label}>Copyright</span>
              <Link href="/" className={styles.link}>
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
