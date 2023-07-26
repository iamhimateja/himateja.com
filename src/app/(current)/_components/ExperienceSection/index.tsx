import { experiences } from '@globals/constants'
import { cn } from '@utils/index'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ExperienceSection.module.css'

const ExperienceSection = ({ showAll = false }: { showAll?: boolean }) => {
  const experienceList = showAll ? experiences : experiences.slice(0, 1)

  return (
    <>
      <div className={styles.container}>
        {experienceList.map((experience, index) => (
          <div
            key={index}
            className={cn(styles.item, showAll && styles.showAll)}
            style={{ '--delay': index } as React.CSSProperties}
          >
            <Image src={experience.image} alt={experience.companyName} width={40} height={40} />
            <div className={styles.content}>
              <span className={styles.duration}>{experience.duration}</span>
              <div className={styles.title}>
                <div className={styles.image}>
                  <Image src={experience.image} alt={experience.companyName} width={20} height={20} />
                </div>
                <Link prefetch={false} tabIndex={0} target="_blank" href={`${experience.url}?ref=https://himateja.com`}>
                  {experience.title} at {experience.companyName}
                </Link>
              </div>
              <div className={styles.description}>{experience.description}</div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div>
          <Link href="/about" tabIndex={0} className={cn('link', 'text-sm ml-16 sm:ml-0')}>
            Read more about my experience
          </Link>
        </div>
      )}

      {showAll && (
        <p className={styles.resumeLinkWrap}>
          Check out{' '}
          <Link
            aria-label="Download my resume"
            href="/files/Himateja - Resume.pdf"
            tabIndex={0}
            download
            className="link"
            rel="noopener noreferrer"
            locale={false}
            prefetch={false}
          >
            my resume
          </Link>{' '}
          for more details.
        </p>
      )}
    </>
  )
}

export default ExperienceSection
