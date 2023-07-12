export type Favicons = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

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
