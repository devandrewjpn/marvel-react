import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: '#EAECF0',
        borderRadius: '15px',
        userSelect: 'none'
    },
    cardTitle: {
        color: theme.black,
        fontSize: theme.fontSizes.md,
        fontWeight: 700,
        letterSpacing: '-0.48px'
    },
    cardText: {
        color: theme.black,
        fontSize: theme.fontSizes.md,
        fontWeight: 300,
        letterSpacing: '-0.36px'
    }
}))
