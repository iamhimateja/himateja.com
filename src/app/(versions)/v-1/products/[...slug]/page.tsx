import '@v-1/_styles/mdx.css'

import { Mdx } from '@v-1/_components/MDX'
import PageHeading from '@v-1/_components/PageHeading'
import { getProduct } from '@v-1/_utils/contentlayer'
import { allProducts } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import HeadSection from '@/app/(versions)/v-1/_components/ContentLayer/HeadSection'

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getPostFromParams(params) {
  const slug = params?.slug?.join('/')
  return getProduct(slug)
}

export async function generateMetadata(props: PostPageProps): Promise<Metadata> {
  const params = await props.params
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

export const generateStaticParams = async () => allProducts.map((post) => ({ slug: post.slugAsParams.split('/') }))

export default async function PostPage(props: PostPageProps) {
  const params = await props.params
  const slug = params?.slug?.join('/')

  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
      <PageHeading title="my products" />

      <article className="container relative max-w-3xl py-6 lg:py-10">
        <HeadSection slug={slug} type="products" />

        <Mdx code={post.body.code} />
        <hr className="mt-12" />
      </article>
    </>
  )
}
