'use client'

import TagPill from '@components/TagPill'
import YearBadge from '@components/YearBadge'
import type { ResumeJob } from '@globals/resume'
import { Icons } from '@icons'
import { cn } from '@utils/index'
import Image from 'next/image'
import Link from 'next/link'
import { useId, useState } from 'react'

import styles from '../Resume.module.css'

const VISIBLE_CHIPS = 4

const JobCard = ({ job }: { job: ResumeJob }) => {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const [summary, ...rest] = job.points
  const chips = job.stack ?? []
  const shownChips = chips.slice(0, VISIBLE_CHIPS)
  const restChips = chips.slice(VISIBLE_CHIPS)
  const toggle = () => setOpen((v) => !v)

  return (
    <article className={cn(styles.job, open && styles.jobOpen)}>
      <div className={styles.jobHead}>
        <span className={styles.jobLogo}>
          <Image src={job.logo} alt="" width={26} height={26} />
        </span>

        <div className={styles.jobTitles}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <p className={styles.jobCompany}>
            <Link href={`${job.url}?ref=https://himateja.com`} target="_blank" rel="noopener noreferrer">
              {job.company}
            </Link>
            {job.companyNote && (
              <span className={styles.jobCompanyNote}>
                <span className={styles.noteSep}> · </span>
                {job.companyNote}
              </span>
            )}
          </p>
        </div>

        <div className={styles.jobYear}>
          <YearBadge>{job.years}</YearBadge>
          {rest.length > 0 && (
            <button
              type="button"
              className={cn(styles.chevron, open && styles.chevronOpen)}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? 'Show less' : 'Show more'}
              onClick={toggle}
            >
              <Icons.Chevron />
            </button>
          )}
        </div>
      </div>

      <div className={styles.jobBody} id={panelId}>
        <p className={styles.jobMeta}>
          {job.duration} · {job.location}
        </p>
        <p className={styles.jobSummary}>{summary}</p>

        {shownChips.length > 0 && (
          <div className={styles.chips}>
            {shownChips.map((chip) => (
              <TagPill key={chip}>{chip}</TagPill>
            ))}
          </div>
        )}

        {open && (
          <>
            {restChips.length > 0 && (
              <div className={styles.chips}>
                {restChips.map((chip) => (
                  <TagPill key={chip}>{chip}</TagPill>
                ))}
              </div>
            )}
            {job.note && <p className={styles.jobNote}>{job.note}</p>}
            <ul className={styles.points}>
              {rest.map((point) => (
                <li key={point}>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {rest.length > 0 && (
          <button
            type="button"
            className={styles.showMore}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={toggle}
          >
            {open ? 'show less' : `show more · ${rest.length} more`}
          </button>
        )}
      </div>
    </article>
  )
}

export default JobCard
