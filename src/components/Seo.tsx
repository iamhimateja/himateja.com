import Head from 'next/head'
import { useRouter } from 'next/router'

import type { ThemeType } from '@/lib/types'

const defaultMeta = {
  title: 'Himateja - Designer & Developer',
  siteName: 'Himateja - Designer & Developer',
  description: 'An online portfolio and blog by Himateja Merlapaka. Showcase of his projects and work.',
  url: 'https://dev.himu.io',
  type: 'website',
  robots: 'follow, index',
  image: '/images/og-metadata.webp',
  imageAlt:
    'Himateja - Designer & Developer, Works as a full-stack developer at Index (https://index.app), contact @ iamhimateja[at]gmail[dot]com, visit https://himu.io/',
  keywords: 'himu, himateja, merlapaka, full-stack developer, index.app',
}

type SeoProps = {
  theme?: ThemeType
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }

  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="keywords" content={meta.keywords} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={`${meta.url}${meta.image}`} />
      <meta property="og:image:alt" content={meta.imageAlt} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iamhimateja" />
      <meta name="twitter:creator" content="@iamhimateja" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${meta.url}${meta.image}`} />
      <meta name="twitter:image:alt" content={meta.imageAlt} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta name="publish_date" property="og:publish_date" content={meta.date} />
          <meta name="author" property="article:author" content="Himateja" />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

type Favicons = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/light/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/light/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/light/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/light/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/light/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/light/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/light/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/light/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/light/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/light/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/light/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/light/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/light/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/light/manifest.json',
  },
]
