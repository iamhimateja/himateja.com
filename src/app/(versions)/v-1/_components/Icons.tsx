/* eslint-disable react/display-name */
import React from 'react'

const ArrowTopRight = React.lazy(() => import('@v-1/_icons/ArrowTopRight'))
const Blog = React.lazy(() => import('@v-1/_icons/Blog'))
const Calendar = React.lazy(() => import('@v-1/_icons/Calendar'))
const Copy = React.lazy(() => import('@v-1/_icons/Copy'))
const Grid = React.lazy(() => import('@v-1/_icons/Grid'))
const Home = React.lazy(() => import('@v-1/_icons/Home'))
const Link = React.lazy(() => import('@v-1/_icons/Link'))
const List = React.lazy(() => import('@v-1/_icons/List'))
const Pin = React.lazy(() => import('@v-1/_icons/Pin'))
const PXLArrowRight = React.lazy(() => import('@v-1/_icons/PixelGlyph/ArrowRight'))
const PXLHome = React.lazy(() => import('@v-1/_icons/PixelGlyph/Home'))
const Products = React.lazy(() => import('@v-1/_icons/Products'))
const ProjectStatus = React.lazy(() => import('@v-1/_icons/ProjectStatus'))
const Smile = React.lazy(() => import('@v-1/_icons/Smile'))
const GitHub = React.lazy(() => import('@v-1/_icons/social/GitHub'))
const Linkedin = React.lazy(() => import('@v-1/_icons/social/Linkedin'))
const Twitter = React.lazy(() => import('@v-1/_icons/social/Twitter'))
const Stack = React.lazy(() => import('@v-1/_icons/Stack'))
const Tags = React.lazy(() => import('@v-1/_icons/Tags'))
const Workshop = React.lazy(() => import('@v-1/_icons/Workshop'))

const IconWrapper = (Component) => {
  return (props) => (
    <React.Suspense fallback={<div className="iconLoading" />}>
      <Component {...props} />
    </React.Suspense>
  )
}

export const Icons = {
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
  PXLHome: IconWrapper(PXLHome),
  Products: IconWrapper(Products),
  ProjectStatus: IconWrapper(ProjectStatus),
  Smile: IconWrapper(Smile),
  GitHub: IconWrapper(GitHub),
  Linkedin: IconWrapper(Linkedin),
  Twitter: IconWrapper(Twitter),
  Stack: IconWrapper(Stack),
  Tags: IconWrapper(Tags),
  Workshop: IconWrapper(Workshop),
}
