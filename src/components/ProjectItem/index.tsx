import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ArrowTopRight, GithubIcon } from '@/components/svg'
import type { Project } from '@/lib/variables'

import styles from './styles.module.scss'

const ProjectItem = ({ project }: { project: Project }) => {
  const { title, tags, url, github, status, slug } = project
  return (
    <div className={styles.wrapper} tabIndex={0}>
      <div className={styles.project}>
        <div className={styles.logo}>
          <Image
            src={status === 'Completed' ? `/images/projectLogos/${slug}.webp` : '/images/projectLogos/default.webp'}
            alt={title}
            width={50}
            height={50}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.tags}>{tags.join(', ')}</p>
        </div>
        <div className={styles.links}>
          {github !== 'private' && (
            <Link className={styles.source} href={github} target="_blank" aria-label="View source" tabIndex={0}>
              <GithubIcon />
              Source
            </Link>
          )}
          <Link
            className={styles.demo}
            href={url}
            target="_blank"
            aria-label="View demo"
            tabIndex={0}
            aria-disabled={status !== 'Completed'}
          >
            View
            <ArrowTopRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
