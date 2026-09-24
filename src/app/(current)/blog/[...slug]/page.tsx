import '@styles/mdx.css'

import FieldCanvas from '@components/FieldCanvas'
import { Mdx } from '@components/MDX'
import PageHeading from '@components/PageHeading'
import { Icons } from '@icons'
import { shortDate } from '@utils/index'
import { allPosts, publishedPosts } from '@utils/posts'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import ReadingProgress from '../_components/ReadingProgress'
import styles from '../Post.module.css'

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

const getPost = (slug: string[]) => allPosts.find((post) => post.slugAsParams === slug.join('/'))

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const params = await props.params
  const post = getPost(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} · himateja.`,
    description: post.description,
    authors: [{ name: 'Himateja Merlapaka' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://himateja.com${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

/* prebuilt slugs only: unknown ones 404 without running a function */
export const dynamicParams = false

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slugAsParams.split('/') }))

export default async function PostPage(props: PostPageProps) {
  const params = await props.params
  const post = getPost(params.slug)

  if (!post) {
    notFound()
  }

  // next post: the one published just before this one
  const published = publishedPosts()
  const index = published.findIndex((p) => p.slug === post.slug)
  const next = index >= 0 ? published[index + 1] : undefined
  const tag = post.tags?.[0]

  return (
    <>
      <ReadingProgress />
      <PageHeading title="writing" />

      <header className={styles.hero}>
        <FieldCanvas
          style="dither"
          alpha={0.32}
          cellWidth={12}
          cellHeight={12}
          seed={4.2}
          speed={0.6}
          className={styles.cover}
        />
        <span className={styles.heroFade} aria-hidden="true" />
        <div className={styles.heroInner}>
          <Link href="/blog" className={styles.back}>
            <Icons.ArrowRight className={styles.backIcon} />
            writing
          </Link>
          <span className={styles.meta}>
            <span className={styles.dot} aria-hidden="true" />
            {tag ? `${tag} · ` : ''}
            {post.readingTime} min · {shortDate(post.date)}
          </span>
          <h1 className={styles.title}>{post.title}</h1>
          {post.description && <p className={styles.dek}>{post.description}</p>}
        </div>
      </header>

      <article className={styles.article}>
        <Mdx code={post.body.code} />

        <footer className={styles.footer}>
          <Link href="/blog">
            <Icons.ArrowRight className={styles.backIcon} />
            all posts
          </Link>
          {next && (
            <Link href={next.slug} className={styles.next}>
              {next.title}
              <Icons.ArrowRight />
            </Link>
          )}
        </footer>
      </article>
    </>
  )
}
