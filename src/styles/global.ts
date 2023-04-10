import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    'webkit-font-smoothing': 'antialiased',
  },
})
