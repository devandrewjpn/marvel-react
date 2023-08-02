import { MantineThemeOverride } from '@mantine/core'

import { customColors } from './colors'
import { customComponents } from './components'
import { globalStyles } from './global'

export const customTheme: MantineThemeOverride = {
    colorScheme: 'light',
    fontFamily: 'Epilogue, sans-serif',
    components: customComponents,
    globalStyles: globalStyles,
    headings: {
        fontFamily: 'Epilogue',
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '36px',
    },
    spacing: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '36px',
        xxl: '49px',
    },
    radius: {
        xs: '4px',
        sm: '6px',
        md: '10px',
        lg: '12px',
        xl: '28px',
    },
    loader: 'oval',
    defaultRadius: 6,
    primaryShade: 6,
    colors: customColors,
    primaryColor: 'blue',
}
