/* eslint-disable react/display-name */
import React from 'react'

const ArrowRight = React.lazy(() => import('@icons/ArrowRight'))
const ArrowTopRight = React.lazy(() => import('@icons/ArrowTopRight'))
const Blog = React.lazy(() => import('@icons/Blog'))
const Calendar = React.lazy(() => import('@icons/Calendar'))
const Copy = React.lazy(() => import('@icons/Copy'))
const Grid = React.lazy(() => import('@icons/Grid'))
const Home = React.lazy(() => import('@icons/Home'))
const Link = React.lazy(() => import('@icons/Link'))
const List = React.lazy(() => import('@icons/List'))
const Pin = React.lazy(() => import('@icons/Pin'))
const PXLArrowRight = React.lazy(() => import('@icons/PixelGlyph/ArrowRight'))
const PXLArrowTopRight = React.lazy(() => import('@icons/PixelGlyph/ArrowTopRight'))
const PXLHome = React.lazy(() => import('@icons/PixelGlyph/Home'))
const Products = React.lazy(() => import('@icons/Products'))
const ProjectStatus = React.lazy(() => import('@icons/ProjectStatus'))
const Smile = React.lazy(() => import('@icons/Smile'))
const GitHub = React.lazy(() => import('@icons/social/GitHub'))
const Linkedin = React.lazy(() => import('@icons/social/Linkedin'))
const Twitter = React.lazy(() => import('@icons/social/Twitter'))
const Stack = React.lazy(() => import('@icons/Stack'))
const Tags = React.lazy(() => import('@icons/Tags'))
const Versions = React.lazy(() => import('@icons/Versions'))
const Workshop = React.lazy(() => import('@icons/Workshop'))

const IconWrapper = (Component) => {
  return (props) => (
    <React.Suspense fallback={<div className="iconLoading" />}>
      <Component {...props} />
    </React.Suspense>
  )
}

export const Icons = {
  ArrowRight: IconWrapper(ArrowRight),
  ArrowTopRight: IconWrapper(ArrowTopRight),
  Blog: IconWrapper(Blog),
  Calendar: IconWrapper(Calendar),
  Copy: IconWrapper(Copy),
  Grid: IconWrapper(Grid),
  Home: IconWrapper(Home),
  Link: IconWrapper(Link),
  List: IconWrapper(List),
  Pin: IconWrapper(Pin),
  PXLArrowRight: IconWrapper(PXLArrowRight),
  PXLArrowTopRight: IconWrapper(PXLArrowTopRight),
  PXLHome: IconWrapper(PXLHome),
  Products: IconWrapper(Products),
  ProjectStatus: IconWrapper(ProjectStatus),
  Smile: IconWrapper(Smile),
  GitHub: IconWrapper(GitHub),
  Linkedin: IconWrapper(Linkedin),
  Twitter: IconWrapper(Twitter),
  Stack: IconWrapper(Stack),
  Tags: IconWrapper(Tags),
  Versions: IconWrapper(Versions),
  Workshop: IconWrapper(Workshop),
}
