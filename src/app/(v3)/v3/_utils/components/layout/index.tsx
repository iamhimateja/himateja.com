'use client'

import { useArrowKeyNavigation, useThemeSettings } from '@v3/hooks'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  useThemeSettings()
  useArrowKeyNavigation()

  return <>{children}</>
}
