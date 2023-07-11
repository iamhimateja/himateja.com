'use client'

import { useEffect } from 'react'

const useArrowKeyNavigation = () => {
  useEffect(() => {
    const handleArrowKeyPress = (e: KeyboardEvent) => {
      const tabIndexedElements = document.querySelectorAll('[tabindex]')

      const orderedElements = Array.from(tabIndexedElements).sort(
        (a, b) => parseInt(a.getAttribute('tabindex') || '0') - parseInt(b.getAttribute('tabindex') || '0'),
      )

      const currentElementIndex = orderedElements.findIndex((el) => el === document.activeElement)

      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        const nextElement = (tabIndexedElements[currentElementIndex + 1] || tabIndexedElements[0]) as HTMLElement

        nextElement.focus()
        nextElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        const prevElement = (tabIndexedElements[currentElementIndex - 1] ||
          tabIndexedElements[tabIndexedElements.length - 1]) as HTMLElement

        prevElement.focus()
        prevElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
      }
    }

    window.addEventListener('keydown', handleArrowKeyPress)

    return () => {
      window.removeEventListener('keydown', handleArrowKeyPress)
    }
  }, [])
}

export default useArrowKeyNavigation
