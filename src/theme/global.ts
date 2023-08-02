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
    h1: {
        margin: 0,
        letterSpacing: '-2.34px',
        fontWeight: 700,
    },
})
