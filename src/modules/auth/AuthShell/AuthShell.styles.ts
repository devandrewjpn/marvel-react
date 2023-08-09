import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    authBg: {
        backgroundSize: '70% 60%',
        backgroundPosition: '0% 40%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#00113d', //colocar na paleta de cores
        height: '100vh',
        width: '100vw',
    },
    logo: {
        marginTop: theme.spacing.xxl,
    },
    card: {
        backgroundColor: theme.white,
        borderRadius: theme.radius.xl,
    },
    primaryButton: {
        backgroundColor: '#081b4e',
        borderRadius: theme.radius.md,
        width: '100%',
        padding: '16px 107px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '57px',
        color: theme.white,
        fontSize: theme.fontSizes.xl,
        fontWeight: 700,
        letterSpacing: '-1.56px'
    },
    primaryDescription: {
        color: '#777',
        fontSize: theme.fontSizes.md,
        fontWeight: 400,
        letterSpacing: '-1.04px',
        lineHeight: '20.32px'
    }
}))
