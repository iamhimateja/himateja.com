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
      "Next.js is my top pick for web development - it's my secret sauce for building fast and dynamic websites!",
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

export { defaultMeta, myAlternativeEmailId, myMailId, myStack, socialLinks }
