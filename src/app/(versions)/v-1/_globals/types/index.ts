import type { ReactNode } from 'react'

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
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
  status: 'Completed' | 'Ongoing' | 'Work in progress' | 'In research'
  tags: ProjectTag[]
  imagePath?: string
  shortTitle?: string
  subtitle?: string
}

export type Experience = {
  companyName: string
  companyNote?: string
  duration: string
  title: string
  description: ReactNode
  url: string
  image: string
}
