'use client'

import clsx from 'clsx'
import dynamic from 'next/dynamic'

import styles from './PageHeading.module.css'

const ScrambleHeading = dynamic(() => import('@components/ScrambleHeading'), { ssr: false })

type Props = {
  title: string
  className?: string
}

const PageHeading = ({ title, className }: Props) => {
  return <ScrambleHeading className={clsx(styles.heading, className)} text={title} />
}

export default PageHeading
