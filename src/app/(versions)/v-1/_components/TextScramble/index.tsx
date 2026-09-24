import React, { useEffect, useState } from 'react'

const symbols: string[] =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()-=_+[]{}|;:,.<>?/'.split('')

const randomItem = (array: Array<any>) => array[Math.floor(Math.random() * array.length)]

type TextScrambleProps = {
  text: string
  className?: string
  letterSpeed?: number
  scrambleSpeed?: number
}

const TextScramble = ({ text, className, letterSpeed = 5, scrambleSpeed = 50 }: TextScrambleProps) => {
  const initialScrambledText = Array(text.length)
    .fill(0)
    .map(() => randomItem(symbols))

  const [displayedText, setDisplayedText] = useState<string[]>(initialScrambledText)

  useEffect(() => {
    let scrambleIndex = -1

    const scramble = () => {
      if (scrambleIndex < text.length) {
        setDisplayedText((prev) => {
          const chars = [...prev]
          chars[scrambleIndex] = text[scrambleIndex] as string
          return chars
        })
        scrambleIndex++
      }
    }

    const scrambleInterval = setInterval(scramble, scrambleSpeed)

    return () => {
      clearInterval(scrambleInterval)
    }
  }, [text, scrambleSpeed])

  useEffect(() => {
    const updateSymbols = setInterval(() => {
      setDisplayedText((prev) => prev.map((char, index) => (index <= text.length ? char : randomItem(symbols))))
    }, letterSpeed)

    return () => clearInterval(updateSymbols)
  }, [text, letterSpeed])

  return <div className={className}>{displayedText.join('')}</div>
}

export default TextScramble
