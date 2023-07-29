import { CSSObject, MantineTheme } from '@mantine/core'

export const globalStyles = (theme: MantineTheme): CSSObject => ({
    html: {
        height: '100vh',
    },
    body: {
        overflowX: 'hidden',
        height: '100vh',
    },
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },
    '::selection': {
        background: theme.fn.primaryColor(),
    },
})
