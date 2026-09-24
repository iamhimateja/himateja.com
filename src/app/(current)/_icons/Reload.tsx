import React from 'react'

const Reload = (props: React.SVGAttributes<SVGSVGElement>) => (
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
      d="M20 12a8 8 0 1 1-2.6-5.9M20 4v5h-5"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Reload
