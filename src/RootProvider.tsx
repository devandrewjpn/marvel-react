import { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from 'react-query'

import { queryClient } from '@/common/configs'
import { CustomThemeProvider } from '@/theme'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
    root.render(
        <QueryClientProvider client={queryClient}>
            <CustomThemeProvider>
                <App />
            </CustomThemeProvider>
        </QueryClientProvider>
    )
}

export default render
