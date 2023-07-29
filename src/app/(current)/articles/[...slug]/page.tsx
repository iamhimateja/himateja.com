import '@styles/mdx.css'

import { Mdx } from '@components/MDX'
import { formatDate } from '@utils/index'
import { allArticles } from 'contentlayer/generated'
import type { Metadata } from 'next'
import Image from 'next/image'
// import Link from 'next/link'
import { notFound } from 'next/navigation'

import PageHeading from '@/app/(current)/_components/PageHeading'

interface PostPageProps {
  params: {
    slug: string
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join('/')

  console.log({
    allArticles,
    slug,
  })

  const post = allArticles.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  // const url = 'https://himateja.com/products'

  // const ogUrl = new URL(`${url}/api/og`)
  // ogUrl.searchParams.set('heading', post.title)
  // ogUrl.searchParams.set('type', 'Blog Post')
  // ogUrl.searchParams.set('mode', 'dark')

  return {
    title: `${post.title} · himateja.`,
    description: post.description,
    authors: [
      {
        name: 'HimaTeja Merlapaka',
      },
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://himateja.com${post.slug}`,
      // images: [
      //   {
      //     url: ogUrl.toString(),
      //     width: 1200,
      //     height: 630,
      //     alt: post.title,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      // images: [ogUrl.toString()],
    },
  }
}

export const generateStaticParams = async () => allArticles.map((post) => ({ slug: post.slugAsParams.split('/') }))

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
      <PageHeading title="my blog" />
      <article className="container relative max-w-3xl py-6 lg:py-10">
        {/* <Link
        href="/blog"
        className={cn(buttonVariants({ variant: 'ghost' }), 'absolute left-[-200px] top-14 hidden xl:inline-flex')}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link> */}
        <div>
          {post.date && (
            <time dateTime={post.date} className="block text-sm text-muted-foreground">
              Published on {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">{post.title}</h1>
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-muted transition-colors"
            priority
          />
        )}
        <Mdx code={post.body.code} />
        <hr className="mt-12" />
        {/* <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: 'ghost' }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div> */}
      </article>
    </>
  )
}
