import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom'
import { authPaths, authRoot } from './paths'
import LoginPage from '@/modules/auth/LoginPage/LoginPage'
import ForgotPassword from '@/modules/auth/ForgotPassword/ForgotPassword'

const Routes = () => {
    return (
        <BrowserRoutes>
            {/* <Route element={<AuthShell />}> */}
            <Route path={authRoot} element={<Navigate to={authPaths.login} />} />
            <Route path={authPaths.login} element={<LoginPage />} />
            <Route path={authPaths.forgotPassword} element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to={authRoot} />} />
            {/* </Route> */}
        </BrowserRoutes>
    )
}

export default Routes
