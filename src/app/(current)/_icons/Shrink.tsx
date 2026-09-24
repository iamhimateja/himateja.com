import React from 'react'

const Shrink = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={14}
    height={14}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M20 10h-6V4M4 14h6v6M14 10l7-7M10 14l-7 7"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Shrink
