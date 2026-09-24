import type { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

export const favicons: IconDescriptor[] = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    url: '/favicon/latest/favicon.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    url: '/favicon/latest/apple-touch-icon.png',
  },
]
