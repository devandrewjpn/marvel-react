import { Text, Button, TextInput, Flex } from '@mantine/core'
import { useStyles } from '../AuthShell/AuthShell.styles'
import MailIcon from '@/assets/images/mailicon.svg'
import { NavLink } from 'react-router-dom'
import { authPaths } from '@/routes/paths'

const ForgotPassword = () => {

    const { classes } = useStyles()

    return (
        <>
            <Text color="brand.8" size="xxl" component="h1">
                Recuperar senha
            </Text>
            <Text className={classes.primaryDescription}>Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.</Text>
            <TextInput rightSection={<img src={MailIcon} alt="Mail Icon" />} mb={23} mt={6} placeholder="Informe seu e-mail" />
            <NavLink to={authPaths.mainSend}>
                <Button className={classes.primaryButton}>enviar link</Button>
            </NavLink>
            <Flex justify='center'>
                <NavLink to={authPaths.login}>
                    <Button mt={20} color='red' variant='subtle' compact>voltar</Button>
                </NavLink>
            </Flex>
        </>
    )
}

export default ForgotPassword
