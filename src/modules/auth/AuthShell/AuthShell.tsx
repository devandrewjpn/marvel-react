import { BackgroundImage, Card, Container, Grid, Image } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import BgImage from '@/assets/images/auth-hero.svg'
import Logo from '@/assets/images/white-logo.svg'
import { useStyles } from './AuthShell.styles'

const AuthShell = () => {
    const { classes } = useStyles()

    return (
        <BackgroundImage src={BgImage} className={classes.authBg}>
            <Container>
                <Grid>
                    <Grid.Col span={12}>
                        <Image src={Logo} width={169} className={classes.logo} alt="Logo" />
                    </Grid.Col>
                    <Grid.Col md={4} xs={12} offsetMd={8} offsetXs={0}>
                        <Card className={classes.card} py="xxl" px="xl">
                            <Outlet />
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>
        </BackgroundImage>
    )
}

export default AuthShell
