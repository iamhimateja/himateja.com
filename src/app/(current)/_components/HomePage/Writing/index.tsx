import { shortDate } from '@utils/index'
import { publishedPosts } from '@utils/posts'
import Link from 'next/link'

import styles from './Writing.module.css'

/* Latest three published posts. Renders nothing when there are none. */
const Writing = ({ limit = 3 }: { limit?: number }) => {
  const posts = publishedPosts().slice(0, limit)

  if (posts.length === 0) return null

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <Link key={post.slug} href={post.slug} className={styles.post}>
          <span className={styles.text}>
            <span className={styles.title}>{post.title}</span>
            {post.description && <span className={styles.dek}>{post.description}</span>}
          </span>
          <span className={styles.date}>{shortDate(post.date)}</span>
        </Link>
      ))}
    </div>
  )
}

export default Writing
