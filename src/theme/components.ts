import { MantineThemeComponents } from '@mantine/styles/lib/theme/types/MantineTheme'

export const customComponents: MantineThemeComponents = {
    TextInput: {
        styles: (theme) => ({
            input: {
                padding: '20px 30px 20px 15px', //colocar no padrao dos spacing
                borderRadius: theme.radius.md,
                background: theme.white,
                fontSize: theme.fontSizes.md,
                fontWeight: 700,
                height: 'auto',
                lineHeight: theme.fontSizes.md,
                letterSpacing: '-1.04px',
                color: '#293D71', //colocar no colors
                border: '0.7px solid #293D71', //colocar no colors
            },
        }),
    },
    // PasswordInput: {
    //     styles: (theme) => ({
    //         input: {
    //             padding: '20px 0 20px 15px', //colocar no padrao dos spacing
    //             borderRadius: theme.radius.md,
    //             background: theme.white,
    //             fontSize: theme.fontSizes.md,
    //             height: 'auto',
    //         },
    //     }),
    // },
}
