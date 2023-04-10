import React from 'react'

import PageFooter from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <PageFooter />
    </>
  )
}
