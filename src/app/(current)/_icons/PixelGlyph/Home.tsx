import React from 'react'

type Props = React.SVGAttributes<SVGSVGElement> & {
  gradientType?: 'lightGradient' | 'darkGradient'
}

const Home = ({ gradientType, ...rest }: Props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        // d="M23.4706 10.8824L11.7353 1L0 10.8824H2.47029V22H21.2848V10.8824H23.4706ZM15.6404 10.8824H8.11463V17.0769H15.6404V10.8824Z"
        d="M20.923 12.8462L11.6153 1L2.30762 12.8462H3.99981V23H19.2306V12.8462H20.923ZM14.6613 12.8462H8.56904V18.2051H14.6613V12.8462Z"
        fill={gradientType ? `url(#${gradientType})` : 'currentColor'}
      />

      <defs>
        <linearGradient id="lightGradient" x1="11.6153" y1="1" x2="11.6153" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#353535" />
          <stop offset="1" stopColor="#6E6E6E" />
        </linearGradient>

        <linearGradient id="darkGradient" x1="11.6153" y1="1" x2="11.6153" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CCCCCC" />
          <stop offset="1" stopColor="#717171" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Home
