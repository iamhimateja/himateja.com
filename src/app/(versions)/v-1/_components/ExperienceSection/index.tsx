import { experiences } from '@v-1/_globals/constants'
import { cn } from '@v-1/_utils/index'
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
              <Link
                prefetch={false}
                tabIndex={0}
                target="_blank"
                href={`${experience.url}?ref=https://himateja.com`}
                className={styles.title}
              >
                <div className={styles.image}>
                  <Image src={experience.image} alt={experience.companyName} width={20} height={20} />
                </div>
                <span className={styles.titleText}>
                  <span className={styles.role}>{experience.title}</span>
                  <span className={styles.company}>{experience.companyName}</span>
                  {experience.companyNote && <span className={styles.companyNote}>{experience.companyNote}</span>}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div>
          <Link href="/v-1/about" tabIndex={0} className={cn('link', 'text-sm ml-16 sm:ml-0')}>
            Read more about my experience
          </Link>
        </div>
      )}
    </>
  )
}

export default ExperienceSection
