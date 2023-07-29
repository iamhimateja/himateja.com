import React from 'react'

const ProjectStatus = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      d="M7 9.28466C8.66667 7.2854 10.3333 7.87052 12 9.33333C13.6667 10.7961 15.3333 11.3813 17 9.382M7 14.618C8.66667 12.6187 10.3333 13.2039 12 14.6667C13.6667 16.1295 15.3333 16.7146 17 14.7153"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default ProjectStatus
