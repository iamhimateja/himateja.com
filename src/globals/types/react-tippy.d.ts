import 'react-tippy'

declare module 'react-tippy' {
  export interface TooltipProps {
    children?: React.ReactNode
    /* id selector of an element whose innerHTML becomes the tooltip content.
       The `html` prop is unusable on React 19 (it calls ReactDOM.render). */
    rawTemplate?: string
  }
}
