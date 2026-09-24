import type { Project } from '@globals/types'

/* joined at runtime so the address is not a plain string in the bundle either */
const myMailId = ['contact', 'himateja.com'].join('@')
const myAlternativeEmailId = 'himatejamerlapaka@gmail.com'
const linkedIn = 'https://www.linkedin.com/in/himateja/'
const github = 'https://github.com/iamhimateja/'
const codepen = 'https://codepen.io/himateja/'
const calendly = 'https://calendly.com/himateja'
const twitter = 'https://twitter.com/iamhimateja'

const defaultMeta = {
  title: 'Himateja Merlapaka · Senior Frontend Engineer',
  description: 'Senior Frontend Engineer in Bengaluru. 10 years building React, Next.js, and TypeScript products.',
  url: 'https://himateja.com',
  robots: 'follow, index',
  ogImage: '/images/og-metadata.webp',
  ogImageAlt:
    'Himateja Merlapaka, Senior Frontend Engineer at Arctic Wolf, Bengaluru. contact[at]himateja[dot]com, https://himateja.com/',
  keywords:
    'himu, himateja, merlapaka, himateja merlapaka, senior frontend engineer, frontend lead, ui engineer, staff engineer, react, next.js, typescript, arctic wolf, blackberry, cylance, bengaluru, himateja.com, himateja portfolio',
  twitterHandle: '@iamhimateja',
}

const completedProjects: Project[] = [
  {
    slug: 'rick-and-morty-charecteropedia',
    title: 'Rick and Morty Characteropedia',
    url: 'https://rick-n-morty.himateja.com/',
    description: 'A web application to find information about Rick and Morty characters',
    github: 'https://github.com/iamhimateja/rick-and-morty-charecteropedia',
    year: 2021,
    status: 'Completed',
    tags: ['web app', 'frontend', 'API'],
  },
  {
    slug: 'trendz-fashion',
    title: 'Trendz.fashion - E-commerce website',
    shortTitle: 'Trendz.fashion',
    url: 'https://trendz.himateja.com/',
    description: 'E-commerce website for a fashion brand',
    github: 'https://github.com/iamhimateja/trendz.fashion-frontend',
    year: 2021,
    status: 'Completed',
    tags: ['web app', 'frontend', 'backend', 'API'],
    hidden: true,
  },
  {
    slug: 'lyrics-finder',
    title: 'Lyrics finder',
    url: 'https://lyrix.himateja.com/',
    description: "A web application to find lyrics of a song. It uses Lyrics.ovh's API to fetch lyrics.",
    github: 'https://github.com/iamhimateja/lyrics-finder',
    year: 2021,
    status: 'Completed',
    tags: ['web app', 'frontend', 'API'],
  },
  {
    slug: 'virtual-keyboard',
    title: 'Virtual keyboard',
    url: 'https://virtual-keyboard.himateja.com/',
    github: 'https://github.com/iamhimateja/onscreen-keyboard',
    description: 'A virtual keyboard to type in any language',
    year: 2020,
    status: 'Completed',
    tags: ['web app', 'frontend'],
  },
  {
    slug: 'breaking-bad-grocery-list',
    title: 'Breaking Bad grocery list',
    url: 'https://breaking-bad-groceries.himateja.com/',
    description: 'Breaking Bad themed grocery list app.',
    github: 'https://github.com/iamhimateja/grocery-list',
    year: 2020,
    status: 'Completed',
    tags: ['web app', 'frontend'],
  },
  {
    slug: 'algorithm-visualizer',
    title: 'Algorithm Visualizer',
    description: 'A web application to visualize algorithms',
    url: 'https://algorithm-visualizer.himateja.com/',
    github: 'https://github.com/iamhimateja/algorithm-visualizer',
    year: 2020,
    status: 'Completed',
    tags: ['web app', 'frontend'],
  },
]

const socialLinks = {
  linkedIn,
  github,
  codepen,
  calendly,
  twitter,
}

export { completedProjects, defaultMeta, myAlternativeEmailId, myMailId, socialLinks }
