'use client'

import TextScramble from '@components/TextScramble'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const ScrambleHeading = ({ text, ...rest }: Props) => {
  return (
    <h2 {...rest}>
      <TextScramble text={text} />
    </h2>
  )
}

export default ScrambleHeading
