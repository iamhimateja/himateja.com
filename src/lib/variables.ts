const myMailId = 'hello@himateja.com'
const myAlternativeEmailId = 'himatejamerlapaka@gmail.com'
const linkedIn = 'https://www.linkedin.com/in/himateja/'
const github = 'https://github.com/iamhimateja/'
const codepen = 'https://codepen.io/himateja/'
const calendly = 'https://calendly.com/himateja'

const socialLinks = {
  linkedIn,
  github,
  codepen,
  calendly,
}

const skills = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'SASS',
  'SCSS',
  'UI/UX Design',
  'Markdown',
  'Ruby',
  'React',
  'Next.js',
  'Tailwind CSS',
  'GraphQL',
  'Ruby on Rails',
  'Node.js',
  'jQuery',
  'MySQL',
  'PostgreSQL',
]

type ProjectTag =
  | 'AI'
  | 'API'
  | 'backend'
  | 'blockchain'
  | 'browser extension'
  | 'data science'
  | 'design'
  | 'devops'
  | 'frontend'
  | 'fullstack'
  | 'machine learning'
  | 'mobile app'
  | 'web app'
  | 'other'

export type Project = {
  slug: string
  title: string
  url: string
  description: string
  github: string | 'private'
  year: number
  status: 'Completed' | 'Ongoing' | 'In Research'
  tags: ProjectTag[]
}

const onGoingProjects: Project[] = [
  {
    slug: 'slug',
    title: 'Slug - Shorten, build and share',
    url: 'https://slug.io/',
    description:
      'Slug is a versatile URL shortening platform with custom domains and advanced analytics, designed to enhance user engagement, trust, and streamline online content sharing.',
    github: 'private',
    year: 2022,
    status: 'Ongoing',
    tags: ['fullstack', 'mobile app', 'browser extension', 'AI'],
  },
  {
    slug: 'croo',
    title: 'Croo - A WorkOS for teams',
    url: 'http://croo.ai/',
    description: 'Croo is a workOS for teams. It helps teams to collaborate, communicate and manage their work.',
    github: 'private',
    year: 2022,
    status: 'In Research',
    tags: ['fullstack', 'mobile app', 'AI'],
  },
  {
    slug: 'formforge',
    title: 'formforge.io',
    url: 'http://formforge.io/',
    description: 'formforge.io is an advanced form builder, designed to help you create beautiful forms in minutes.',
    github: 'private',
    year: 2022,
    status: 'In Research',
    tags: ['fullstack', 'mobile app'],
  },
  {
    slug: 'code.care',
    title: 'code.care',
    url: 'http://code.care/',
    description: 'code.care is a platform to help developers to learn, practice and improve their coding skills.',
    github: 'private',
    year: 2022,
    status: 'In Research',
    tags: ['fullstack', 'mobile app'],
  },
  {
    slug: 'she-team',
    title: 'she.team',
    url: 'http://she.team/',
    description:
      'She.team is a dedicated app that connects women in need with a specialized team of female first responders in India. Ensuring safety and privacy, we empower and protect women by providing immediate assistance during emergencies.',
    github: 'private',
    year: 2022,
    status: 'In Research',
    tags: ['fullstack', 'mobile app'],
  },
]

const completedProjects: Project[] = [
  {
    slug: 'rick-and-morty-charecteropedia',
    title: 'Rick and Morty Charecteropedia',
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
    url: 'https://trendz.himateja.com/',
    description: 'E-commerce website for a fashion brand',
    github: 'https://github.com/iamhimateja/trendz.fashion-frontend',
    year: 2021,
    status: 'Completed',
    tags: ['web app', 'frontend', 'backend', 'API'],
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

const projects = [...onGoingProjects, ...completedProjects]

export { completedProjects, myAlternativeEmailId, myMailId, onGoingProjects, projects, skills, socialLinks }
