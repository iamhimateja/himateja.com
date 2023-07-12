'use client'

import useArrowKeyNavigation from '@globals/hooks/useArrowKeyNavigation'
import useThemeSettings from '@globals/hooks/useThemeSettings'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  useThemeSettings()
  useArrowKeyNavigation()

  return <>{children}</>
}
