import ContactEmail from '@components/ContactEmail'
import PageHeading from '@components/PageHeading'
import SectionLabel from '@components/SectionLabel'
import TagPill from '@components/TagPill'
import YearBadge from '@components/YearBadge'
import { resume } from '@globals/resume'
import { Icons } from '@icons'
import Image from 'next/image'
import Link from 'next/link'

import JobCard from './_components/JobCard'
import styles from './Resume.module.css'

export const metadata = {
  title: 'resume · himateja.',
  description: `${resume.name}, ${resume.title}. Full resume.`,
}

// split on commas, but not on commas inside brackets
const splitItems = (items: string) => items.split(/,\s*(?![^()]*\))/)

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'open-source', label: 'Open source' },
  { id: 'education', label: 'Education' },
]

export default function ResumePage() {
  return (
    <>
      <PageHeading title="resume" />

      <div className={styles.layout}>
        <aside className={styles.rail}>
          <div className={styles.identity}>
            <Image src={resume.photo} alt={resume.name} width={72} height={72} className={styles.photo} priority />
            <div className={styles.nameBlock}>
              <h1 className={styles.name}>{resume.name}</h1>
              <p className={styles.title}>{resume.title}</p>
            </div>
            <p className={styles.focus}>{resume.focus}</p>
          </div>

          <div className={styles.railMeta}>
            <span>{resume.location}</span>
            <span>{resume.availability}</span>
            <ContactEmail target="_blank" />
            {resume.links.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href={resume.pdf}
            download
            prefetch={false}
            rel="noopener noreferrer"
            className={styles.download}
            aria-label="Download PDF resume"
          >
            Download PDF
            <Icons.ArrowTopRight className="h-3 w-3" />
          </Link>

          <nav className={styles.jump} aria-label="Resume sections">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.content}>
          <section id="summary" className={styles.section} aria-label="Summary">
            <p className={styles.status}>
              <span>
                <span className="pulseAnimation !mr-0" aria-hidden="true" />
                {resume.status}
              </span>
              <span>{resume.timezone}</span>
            </p>
            <p className={styles.lead}>{resume.summary[0]}</p>
            {resume.summary.slice(1).map((paragraph) => (
              <p key={paragraph} className={styles.body}>
                {paragraph}
              </p>
            ))}
          </section>

          <section id="skills" className={styles.section} aria-labelledby="skills-label">
            <SectionLabel id="skills-label">Skills</SectionLabel>
            <div className={styles.skills}>
              {resume.skills.map((skill) => (
                <div key={skill.group} className={styles.skillRow}>
                  <span className={styles.skillGroup}>{skill.group}</span>
                  <p className={styles.skillList}>{skill.items}</p>
                  <div className={styles.skillChips}>
                    {splitItems(skill.items).map((item) => (
                      <TagPill key={item}>{item}</TagPill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="work" className={styles.section} aria-labelledby="work-label">
            <SectionLabel id="work-label">Work experience</SectionLabel>
            <div className={styles.jobs}>
              {resume.experience.map((job) => (
                <JobCard key={`${job.company}-${job.duration}`} job={job} />
              ))}
            </div>
          </section>

          <section id="open-source" className={styles.section} aria-labelledby="oss-label">
            <SectionLabel id="oss-label">Open source</SectionLabel>
            <ul className={styles.oss}>
              {resume.openSource.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} target="_blank" rel="noopener noreferrer" className={styles.ossName}>
                    {item.name}
                  </Link>
                  , {item.description}
                </li>
              ))}
            </ul>
          </section>

          <section id="education" className={styles.section} aria-labelledby="education-label">
            <SectionLabel id="education-label">Education</SectionLabel>
            <div className={styles.education}>
              {resume.education.map((edu) => (
                <div key={edu.degree} className={styles.edu}>
                  <YearBadge>{edu.years}</YearBadge>
                  <div className={styles.eduText}>
                    <p className={styles.degree}>{edu.degree}</p>
                    <p className={styles.institution}>{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  )
}
