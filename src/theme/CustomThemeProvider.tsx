import { MantineProvider, ColorSchemeProvider, ColorScheme, createEmotionCache } from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'

import { CustomFonts } from './CustomFonts'
import { customTheme } from './theme'

export type CustomThemeProviderProps = {
    children: React.ReactNode
}

/**
 * createCache allows for low level customization of how styles get inserted by emotion.
 */
const marvelCssCache = createEmotionCache({ key: 'marvel' })

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
    const preferredSystemColor = useColorScheme('dark')

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'marvel-color-scheme',
        defaultValue: preferredSystemColor,
        getInitialValueInEffect: true,
    })

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                emotionCache={marvelCssCache}
                withGlobalStyles
                withNormalizeCSS
                theme={{ ...customTheme, colorScheme }}>
                <CustomFonts />
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default CustomThemeProvider
