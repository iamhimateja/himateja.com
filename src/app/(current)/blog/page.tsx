import PageHeading from '@components/PageHeading'
import { publishedPosts, toSummary } from '@utils/posts'

import PostList from './_components/PostList'
import styles from './Blog.module.css'

export const metadata = {
  title: 'writing · himateja.',
  description: 'Notes on frontend work, design systems, and things tried on this site.',
}

export default function BlogPage() {
  const posts = publishedPosts().map(toSummary)

  return (
    <>
      <PageHeading title="writing" />

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <span>coming soon...</span>
        </div>
      ) : (
        <PostList posts={posts} />
      )}
    </>
  )
}
