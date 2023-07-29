import { Global } from '@mantine/core'

import epilogueRegularTtf from '@/assets/fonts/Epilogue/Epilogue-Regular.ttf'
import epilogueBoldTtf from '@/assets/fonts/Epilogue/Epilogue-Bold.ttf'
import epilogueRegularWoff from '@/assets/fonts/Epilogue/Epilogue-Regular.woff'
import epilogueBoldWoff from '@/assets/fonts/Epilogue/Epilogue-Bold.woff'

import interRegularTtf from '@/assets/fonts/Inter/Inter-Regular.ttf'
import interBoldTtf from '@/assets/fonts/Inter/Inter-Bold.ttf'
import interRegularWoff from '@/assets/fonts/Inter/Inter-Regular.woff'
import interBoldWoff from '@/assets/fonts/Inter/Inter-Bold.woff'

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Epilogue',
                        src: `url('${epilogueRegularTtf}') format("truetype")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Epilogue',
                        src: `url('${epilogueRegularWoff}') format("woff")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Epilogue',
                        src: `url('${epilogueBoldTtf}') format("truetype")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Epilogue',
                        src: `url('${epilogueBoldWoff}') format("woff")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('${interRegularTtf}') format("truetype")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('${interRegularWoff}') format("woff")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('${interBoldTtf}') format("truetype")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Inter',
                        src: `url('${interBoldWoff}') format("woff")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    )
}
