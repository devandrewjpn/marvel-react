import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
    authBg: {
        backgroundSize: '100% 80%',
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
}))
