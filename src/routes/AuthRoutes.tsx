import { Route, Navigate, Routes } from 'react-router-dom'
import { authPaths, authRoot } from './paths'
import LoginPage from '@/modules/auth/LoginPage/LoginPage'
import ForgotPassword from '@/modules/auth/ForgotPassword/ForgotPassword'
import AuthShell from '@/modules/auth/AuthShell/AuthShell'
import { MailSend } from '@/modules/auth/MailSend'
import { SelectHero } from '@/modules/auth/SelectHero'

const AuthRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthShell />}>
                <Route path={authRoot} element={<Navigate to={authPaths.login} />} />
                <Route path={authPaths.login} element={<LoginPage />} />
                <Route path={authPaths.forgotPassword} element={<ForgotPassword />} />
                <Route path={authPaths.selectHero} element={<SelectHero />} />
                <Route path={authPaths.mainSend} element={<MailSend />} />
                <Route path="*" element={<Navigate to={authRoot} />} />
            </Route>
        </Routes>
    )
}

export default AuthRoutes
