import { allArticles, type Article } from 'contentlayer/generated'

/* Blog posts. The generated type is still called Article because v-1 shares it. */
type Post = Article
export const allPosts: Post[] = allArticles

/* Plain data for the list and teasers, safe to pass to client components. */
export type PostSummary = {
  slug: string
  title: string
  description?: string
  date: string
  tags: string[]
  readingTime: number
}

const byDateDesc = (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()

export const publishedPosts = () => allPosts.filter((post) => post.published !== false).sort(byDateDesc)

export const toSummary = (post: Post): PostSummary => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  date: post.date,
  tags: post.tags ?? [],
  readingTime: post.readingTime,
})
