import { Route, Navigate, Routes } from 'react-router-dom'

import DashboardShell from '@/modules/Dashboard/Shell/DashboardShell'
import { dashPaths, dashRoot } from './paths/dashboard.paths'
import { Home } from '@/modules/Dashboard/Home'

import { Details } from '@/modules/Dashboard/Details'

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardShell />}>
                <Route path={dashRoot} element={<Navigate to={dashPaths.home} />} />
                <Route path={dashPaths.home} element={<Home />} />
                <Route path={dashPaths.details} element={<Details />} />
                <Route path="*" element={<Navigate to={dashRoot} />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes
