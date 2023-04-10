export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const typeCharacter = async ({
  text,
  targetElement,
  duration = 1000,
}: {
  text: string
  targetElement: HTMLElement
  duration?: number
}) => {
  let currentIndex = 0

  const timeBetweenCharacters = duration / text.length

  while (currentIndex < text.length) {
    targetElement.innerHTML += text.charAt(currentIndex)
    currentIndex++
    await sleep(timeBetweenCharacters)
  }
}
