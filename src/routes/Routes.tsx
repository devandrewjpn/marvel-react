import { Suspense, lazy } from 'react'

import { useLocalStorage } from '@mantine/hooks'

const AuthRoutes = lazy(() => import('./AuthRoutes'))
const DashboardRoutes = lazy(() => import('./DashboardRoutes'))

const Routes = () => {
    const [token] = useLocalStorage({ key: 'MARVEL_ACCESS_TOKEN' })

    return <Suspense>{token ? <DashboardRoutes /> : <AuthRoutes />}</Suspense>
}

export default Routes
