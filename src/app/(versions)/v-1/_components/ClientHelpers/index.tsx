'use client'

import useArrowKeyNavigation from '@v-1/_globals/hooks/useArrowKeyNavigation'
import useThemeSettings from '@v-1/_globals/hooks/useThemeSettings'

const ClientHelpers = () => {
  useArrowKeyNavigation()
  useThemeSettings()

  return null
}

export default ClientHelpers
