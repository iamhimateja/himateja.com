import Labs from '@components/HomePage/Labs'
import NameInfo from '@components/HomePage/NameInfo'
import Writing from '@components/HomePage/Writing'
import SectionHeading from '@components/SectionHeading'
import { Icons } from '@icons'
import { publishedPosts } from '@utils/posts'
import Link from 'next/link'

import styles from './Home.module.css'

export default function HomePage() {
  const hasPosts = publishedPosts().length > 0

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <NameInfo />

        <p className={styles.lead}>
          Full-stack engineer, creative spirit, a perfectionist at heart, with an enthusiasm for frontend technologies
          and an excitement for the instant gratification it provides.
        </p>

        <p className={styles.sub}>Off work: movies, video games, and family time.</p>

        <div className={styles.status}>
          <span>
            <Icons.Pin className="h-4 w-4" />
            Bengaluru, India
          </span>
          <span>
            <span className="pulseAnimation !mr-0" aria-hidden="true" />
            Open for new opportunities
          </span>
          <Link href="/resume" className={styles.statusLink}>
            resume
            <Icons.ArrowTopRight />
          </Link>
        </div>
      </section>

      <section id="labs" className={styles.section}>
        <SectionHeading title="experiments" />
        <Labs />
      </section>

      {hasPosts && (
        <section className={styles.section}>
          <SectionHeading
            title="writing"
            pageLink="/blog"
            label="Open to view all posts"
            pageLinkContent={<Icons.PXLArrowRight aria-hidden="true" />}
          />
          <Writing />
        </section>
      )}

      <section id="about" className={styles.section}>
        <SectionHeading title="about" />
        <div className={styles.about}>
          <p className={styles.aboutLead}>
            Namaste! I&#39;m Himateja, a seasoned full-stack engineer passionate about shaping the digital world one
            line of code at a time.
          </p>
          <p>
            I enjoy building fast, intuitive interfaces and turning complex ideas into simple products. I care about
            clean design, collaboration, and code other people can work with.
          </p>
          <p>
            Right now I am building{' '}
            <Link href="https://code.care" className={styles.aboutLink} target="_blank" rel="noopener noreferrer">
              code.care
            </Link>
            , an AI code review platform, and{' '}
            <Link href="https://slug.io" className={styles.aboutLink} target="_blank" rel="noopener noreferrer">
              slug.io
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
