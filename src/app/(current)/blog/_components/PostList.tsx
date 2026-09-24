'use client'

import FieldCanvas from '@components/FieldCanvas'
import TagPill from '@components/TagPill'
import { shortDate } from '@utils/index'
import type { PostSummary } from '@utils/posts'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import styles from '../Blog.module.css'

/* Newest post as a feature card, the rest in a two column grid, with tag filters. */
const PostList = ({ posts }: { posts: PostSummary[] }) => {
  const [tag, setTag] = useState('all')
  const tags = useMemo(() => ['all', ...new Set(posts.flatMap((p) => p.tags))], [posts])
  const visible = tag === 'all' ? posts : posts.filter((p) => p.tags.includes(tag))
  const [latest, ...rest] = visible

  return (
    <div className={styles.list}>
      <div className={styles.intro}>
        <p className={styles.blurb}>
          Notes on frontend work, design systems, and things I tried on this site. Irregular.
        </p>
        {tags.length > 2 && (
          <div className={styles.filters} role="group" aria-label="Filter by tag">
            {tags.map((t) => (
              <button key={t} type="button" onClick={() => setTag(t)} aria-pressed={tag === t}>
                <TagPill active={tag === t}>{t}</TagPill>
              </button>
            ))}
          </div>
        )}
      </div>

      {latest && (
        <Link href={latest.slug} className={styles.feature}>
          <FieldCanvas
            style="dots"
            alpha={0.7}
            cellWidth={12}
            cellHeight={12}
            seed={4.2}
            speed={0.6}
            className={styles.cover}
          />
          <span className={styles.featureFade} aria-hidden="true" />
          <span className={styles.label}>
            <span className={styles.dot} aria-hidden="true" />
            latest{latest.tags[0] ? ` · ${latest.tags[0]}` : ''} · {latest.readingTime} min
          </span>
          <span className={styles.featureTitle}>{latest.title}</span>
          {latest.description && <span className={styles.featureDek}>{latest.description}</span>}
          <span className={styles.date}>{shortDate(latest.date)}</span>
        </Link>
      )}

      {rest.length > 0 && (
        <div className={styles.cards}>
          {rest.map((post) => (
            <Link key={post.slug} href={post.slug} className={styles.card}>
              <span className={styles.cardMeta}>
                <span>{post.tags[0] ?? 'post'}</span>
                <span>{post.readingTime} min</span>
              </span>
              <span className={styles.cardText}>
                <span className={styles.cardTitle}>{post.title}</span>
                {post.description && <span className={styles.cardDek}>{post.description}</span>}
                <span className={styles.date}>{shortDate(post.date)}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostList
