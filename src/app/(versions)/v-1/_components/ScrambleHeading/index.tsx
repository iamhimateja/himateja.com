'use client'

import TextScramble from '@v-1/_components/TextScramble'

interface Props {
  text: string
  className?: string
}

const ScrambleHeading = ({ text, className }: Props) => {
  return <TextScramble text={text} className={className} />
}

export default ScrambleHeading
