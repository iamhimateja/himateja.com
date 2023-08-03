import type { Project } from '@globals/types'

const myMailId = 'hello@himateja.com'
const myAlternativeEmailId = 'himatejamerlapaka@gmail.com'
const linkedIn = 'https://www.linkedin.com/in/himateja/'
const github = 'https://github.com/iamhimateja/'
const codepen = 'https://codepen.io/himateja/'
const calendly = 'https://calendly.com/himateja'
const twitter = 'https://twitter.com/iamhimateja'

const defaultMeta = {
  title: 'Himateja - Designer & Developer',
  description: 'Personal website of Himateja Merlapaka',
  url: 'https://himateja.com',
  robots: 'follow, index',
  ogImage: '/images/og-metadata.webp',
  ogImageAlt:
    'Himateja - Designer & Developer, Works as a full-stack developer at Index, contact @ hello[at]himateja[dot]com, visit https://himateja.com/',
  keywords:
    'himu, himateja, merlapaka, full-stack developer, index.app, halemind, involvio, himateja.com, himateja portfolio, himateja blog, himateja blog, hima',
  twitterHandle: '@iamhimateja',
}

const onGoingProjects: Project[] = [
  {
    slug: 'slug',
    title: 'Slug - Shorten, build and share',
    subtitle: 'Re-imagining URLs, Contextual and Simple',
    url: 'https://slug.io/',
    description:
      'Slug is a versatile URL shortening platform with custom domains and advanced analytics, designed to enhance user engagement, trust, and streamline online content sharing.',
    github: 'private',
    year: 2022,
    status: 'Work in progress',
    tags: ['fullstack', 'mobile app', 'browser extension', 'AI'],
    imagePath: '/images/products/slug.webp',
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
    shortTitle: 'Trendz.fashion',
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

const socialLinks = {
  linkedIn,
  github,
  codepen,
  calendly,
  twitter,
}

const myStack = [
  {
    name: 'Google Chrome',
    description: "Chrome's my browser of choice, but I still pop over to Firefox and Safari for testing now and then.",
    url: 'https://www.google.com/chrome/',
    image: '/images/stack/chrome.webp',
  },
  {
    name: 'Zoom',
    description:
      'Zoom is my reliable virtual meeting hub - where I connect, collaborate, and communicate seamlessly with teams and clients.',
    image: '/images/stack/zoom.webp',
    url: 'https://zoom.us/',
  },
  {
    name: 'VS Code',
    description: "VS Code's where all the magic happens - it's my playground for coding!",
    image: '/images/stack/vs-code.webp',
    url: 'https://code.visualstudio.com/',
  },
  {
    name: 'GitHub',
    description: "GitHub is my coding hub - it's where I store, collaborate, and showcase my projects!",
    image: '/images/stack/github.webp',
    url: 'https://github.com',
  },
  {
    name: 'Next.js',
    description:
      "Next.js is my top pick for web development - it's my go-to framework for building fast and dynamic websites!",
    image: '/images/stack/nextjs.webp',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind CSS',
    description:
      "Tailwind CSS is my go-to styling framework - it's the secret ingredient that brings simplicity and efficiency to my web designs!",
    image: '/images/stack/tailwind.webp',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'GraphQL',
    description:
      "GraphQL is my preferred query language. I've been immersing myself in it, while also exploring into tRPC to simplify my TypeScript API development.",
    image: '/images/stack/graphql.webp',
    url: 'https://graphql.org/',
  },
  {
    name: 'Prisma',
    description:
      'Prisma ORM is my obvious choice for database management - it streamlines the process of interacting with databases and makes data handling a breeze. I have also worked with TypeORM and Sequelize.',

    image: '/images/stack/prisma.webp',
    url: 'https://www.prisma.io/',
  },
  {
    name: 'SvelteKit',
    description:
      'I recently started using Svelte. Svelte and SvelteKit are my no-fuss toolkit for creating lightweight and reactive web applications with ease.',
    image: '/images/stack/svelte.webp',
    url: 'https://kit.svelte.dev/',
  },
  {
    name: 'Figma',
    description: "Figma's my tool for all things design - sketching, wireframing, you name it!",
    image: '/images/stack/figma.webp',
    url: 'https://www.figma.com/',
  },
  {
    name: 'Vercel',
    description:
      "I mostly use my favorite hosting platform for everything - it's super easy to work with! But yeah, for some projects, I still turn to Netlify.",
    url: 'https://vercel.com/',
    image: '/images/stack/vercel.webp',
  },
  {
    name: 'iTerm 2',
    description: 'My go-to command-line interface',
    image: '/images/stack/iTerm.webp',
    url: 'https://iterm2.com/',
  },
  {
    name: 'Linear',
    description:
      'Linear is my go-to project management tool - it simplifies my workflow, streamlines tasks, and keeps my projects organized and on track.',
    image: '/images/stack/linear.webp',
    url: 'https://linear.app/',
  },
  {
    name: 'ChatGPT',
    description: 'My trusty companion for brainstorming and idea generation.',
    image: '/images/stack/chatgpt.webp',
    url: 'https://chat.openai.com/',
  },
]

const experiences = [
  {
    companyName: 'Index',
    duration: "Sep '21 - Apr '23",
    title: 'Full Stack Engineer',
    description:
      'As a Full Stack Engineer at Index, I significantly improved user experience by migrating to Radix-UI, integrated key features such as Onboarding and Alerts, and ensured secure payments by integrating the Stripe payment gateway.',
    url: 'https://index.app/',
    image: '/images/index.webp',
  },
  {
    companyName: 'Feathery',
    duration: "Jun '21 - Aug '21",
    title: 'Full Stack Engineer',
    description:
      'During my short tenure at Feathery, I contributed to enhancing the user experience by implementing Live Edit functionality for the form builder, using cutting-edge frontend technologies, and collaborated with cross-functional teams to ensure seamless integration of new features.',
    url: 'https://feathery.io',
    image: '/images/feathery.webp',
  },
  {
    companyName: 'Involvio (Acquired by Cisco)',
    duration: "Jul '19 - May '21",
    title: 'Software Engineer',
    description:
      'As a Software Engineer at Involvio, I led the development of the Sub-Admin teams feature, optimized admin staff permissions, contributed significantly to a COVID-19 Safe Reopen module, boosted admin tool performance, and integrated crucial APIs for efficient data synchronization.',
    url: 'https://involvio.com',
    image: '/images/involvio.webp',
  },
  {
    companyName: 'HaleMind',
    duration: "Dec '15 - Jun '19",
    title: 'Sr. Software Engineer',
    description:
      'At HaleMind, as a Sr. Software Engineer, I led a dynamic team of 9, introduced a centralized chat system, revolutionized user dashboards, built comprehensive patient examination tools, and innovated an Appointment Dashboard; all leading to improved user experience, enhanced patient engagement, increased test accuracy, and optimized appointment management.',
    url: 'https://halemind.com',
    image: '/images/halemind.webp',
  },
]

export {
  completedProjects,
  defaultMeta,
  experiences,
  myAlternativeEmailId,
  myMailId,
  myStack,
  onGoingProjects,
  projects,
  socialLinks,
}
