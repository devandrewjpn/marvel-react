import { Outlet } from 'react-router-dom'
import Logo from '@/assets/images/logo.svg'
import { AppShell, Header, Navbar, Image, NavLink } from '@mantine/core'

const DashboardShell = () => {
    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar width={{ base: 300 }} height={500} p="xs">
                    <NavLink
                        label="Home"
                    />
                    <NavLink
                        label="Perfil"
                    />
                    <NavLink
                        label="Sair"
                    />
                </Navbar>
            }
            header={
                <Header height={60} p="xs">
                    <Image src={Logo} width={169} alt="Logo" />
                </Header>
            }
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}>
            <Outlet />
        </AppShell>
    )
}

export default DashboardShell
