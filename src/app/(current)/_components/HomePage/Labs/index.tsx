'use client'

import PreviewDialog, { type PreviewTarget } from '@components/PreviewDialog'
import { completedProjects } from '@globals/constants'
import type { Project } from '@globals/types'
import { Icons } from '@icons'
import { cn } from '@utils/index'
import Image from 'next/image'
import Link from 'next/link'
import { type CSSProperties, useEffect, useId, useState } from 'react'

import styles from './Labs.module.css'

const shotFor = (project: Project) => project.imagePath ?? `/images/projectLogos/${project.slug}.webp`

/* The floating nav sends this after navigating to /#labs, so the list opens on the same page too
   (a client-side hash change does not fire hashchange). */
export const OPEN_LABS_EVENT = 'labs:open'
/* fired with detail true/false when an experiment preview opens or closes */
export const LABS_PREVIEW_EVENT = 'labs:preview'

/* Home page experiments: one featured project, the rest behind a "show N more" row. */
const Labs = () => {
  const [featured, ...rest] = completedProjects.filter((project) => !project.hidden)
  const [open, setOpen] = useState(false)
  const [preview, setPreview] = useState<PreviewTarget | null>(null)

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(LABS_PREVIEW_EVENT, { detail: preview !== null }))
  }, [preview])
  const listId = useId()

  const previewOf = (project: Project) => () =>
    setPreview({ slug: project.slug, url: project.url, github: project.github })

  // open the list when the page is reached at /#labs, or when the nav asks for it
  useEffect(() => {
    const openIfLabs = () => {
      if (window.location.hash === '#labs') setOpen(true)
    }
    const open = () => setOpen(true)
    openIfLabs()
    window.addEventListener('hashchange', openIfLabs)
    window.addEventListener(OPEN_LABS_EVENT, open)
    return () => {
      window.removeEventListener('hashchange', openIfLabs)
      window.removeEventListener(OPEN_LABS_EVENT, open)
    }
  }, [])

  if (!featured) return null

  return (
    <div className={styles.labs}>
      <div className={styles.featured}>
        <div className={styles.featuredText}>
          <span className={styles.featuredLabel}>featured · {featured.tags[0]}</span>
          <span className={styles.featuredTitleRow}>
            <button
              type="button"
              className={styles.peek}
              onClick={previewOf(featured)}
              aria-label={`Preview ${featured.shortTitle ?? featured.title}`}
              title="Preview"
            >
              <Icons.Eye />
            </button>
            <Link
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuredTitle}
              aria-label={`Open ${featured.shortTitle ?? featured.title}`}
            >
              {featured.shortTitle ?? featured.title}
            </Link>
          </span>
          <span className={styles.featuredBlurb}>{featured.description}</span>
        </div>
        <Link
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shot}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image src={shotFor(featured)} alt="" width={140} height={105} priority />
        </Link>
      </div>

      {rest.length > 0 && (
        <>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'show less' : `show ${rest.length} more`}
            <span className={cn(styles.chevron, open && styles.chevronOpen)}>
              <Icons.Chevron />
            </span>
          </button>

          {/* always rendered so it can slide open and shut; inert while shut */}
          <div id={listId} className={cn(styles.drawer, open && styles.drawerOpen)} inert={!open}>
            <ul className={styles.list}>
              {rest.map((project, i) => (
                <li key={project.slug} className={styles.row} style={{ '--i': i } as CSSProperties}>
                  <Link
                    href={project.github !== 'private' ? project.github : project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rowLink}
                  >
                    <Icons.GitHub className={styles.rowIcon} />
                    <span className={styles.rowName}>
                      <span>{project.slug}</span>
                      <span className={styles.slash}>/</span>
                    </span>
                    <span className={styles.rowTag}>{project.tags[0]}</span>
                  </Link>
                  <button
                    type="button"
                    className={styles.rowPeek}
                    onClick={previewOf(project)}
                    aria-label={`Preview ${project.shortTitle ?? project.title}`}
                    title="Preview"
                  >
                    <Icons.Eye />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <PreviewDialog target={preview} onClose={() => setPreview(null)} />
    </div>
  )
}

export default Labs
