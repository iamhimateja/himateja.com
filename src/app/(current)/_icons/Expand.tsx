import React from 'react'

const Expand = (props: React.SVGAttributes<SVGSVGElement>) => (
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
      d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Expand
