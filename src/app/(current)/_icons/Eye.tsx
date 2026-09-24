import React from 'react'

const Eye = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={15}
    height={15}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth={1.6} />
  </svg>
)

export default Eye
