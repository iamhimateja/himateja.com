'use client'

import useArrowKeyNavigation from '@globals/hooks/useArrowKeyNavigation'
import useThemeSettings from '@globals/hooks/useThemeSettings'

const ClientHelpers = () => {
  useArrowKeyNavigation()
  useThemeSettings()

  return null
}

export default ClientHelpers
