/* Past versions of the site, newest first, for the time machine. Versions with a dark mode
   carry a second shot and colours, picked by the site theme. */
export type SiteTheme = {
  /* slice colour, should match the shot's own background */
  bg: string
  /* caption colour */
  fg: string
  /* wide screenshot of the hero */
  shot: string
}

export type SiteVersion = SiteTheme & {
  label: string
  year: string
  href: string
  /* where the "source" link in the preview goes; the site repo when not set */
  source?: string
  /* two more swatches for the palette row */
  muted: string
  accent: string
  dark?: SiteTheme
}

export const siteVersions: SiteVersion[] = [
  {
    label: 'v4',
    year: '2024',
    href: '/v-1',
    bg: '#f8fafc',
    fg: '#111111',
    muted: '#c9c9c9',
    accent: '#0094ff',
    shot: '/images/versions/v4.webp',
    dark: { bg: '#0f0f0f', fg: '#cccccc', shot: '/images/versions/v4-dark.webp' },
  },
  {
    label: 'v3',
    year: '2023',
    href: '/v3',
    bg: '#ffffff',
    fg: '#111111',
    muted: '#e5e5e5',
    accent: '#a78bfa',
    shot: '/images/versions/v3.webp',
    dark: { bg: '#150b1e', fg: '#ffffff', shot: '/images/versions/v3-dark.webp' },
  },
  {
    /* himateja.com 2021 (himu.io repo), static files in public/v2-5. No text on the page, so fg
       is its pink. Dark only. */
    label: 'v2.5',
    year: '2021',
    href: '/v2-5',
    bg: '#00031b',
    fg: '#ec616d',
    muted: '#f2bc36',
    accent: '#17a2d6',
    shot: '/images/versions/v2-5.webp',
  },
  {
    /* himateja.in: blue geometric wordmark, GSAP entrance, drifting dots. Rebuilt at /v2 */
    label: 'v2',
    year: '2018',
    href: '/v2',
    bg: '#ffffff',
    fg: '#5aa2e0',
    muted: '#e7e7e7',
    accent: '#2196f3',
    shot: '/images/versions/v2.webp',
  },
  {
    /* first site, jamesb.in, May 2015. The original CodePen code, in public/v1 */
    label: 'v1',
    year: '2015',
    href: '/v1',
    source: 'https://codepen.io/Himateja/pen/PZGzqr',
    bg: '#ffffff',
    fg: '#007ee5',
    muted: '#4da5ee',
    accent: '#007ee5',
    shot: '/images/versions/v1.webp',
  },
]
