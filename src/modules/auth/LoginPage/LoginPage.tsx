import EnterIcon from '@/assets/images/enter.svg'
import MailIcon from '@/assets/images/mailicon.svg'
import ShieldIcon from '@/assets/images/shield.svg'
import { Text, Button, PasswordInput, TextInput, Flex } from '@mantine/core'
import { useStyles } from '../AuthShell/AuthShell.styles'
import { NavLink } from 'react-router-dom'
import { authPaths } from '@/routes/paths'
import { useForm } from '@mantine/form'
import { LoginPageFormProps } from './LoginPage.types'
import { useLocalStorage } from '@mantine/hooks'
import { getJwtToken } from '@/services'

const LoginPage = () => {
    const [, setToken] = useLocalStorage({ key: 'MARVEL_ACCESS_TOKEN' })
    const { classes } = useStyles()
    const form = useForm<LoginPageFormProps>({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length === 0 ? 'Password is required' : null),
        },
    })

    const handleSubmit = (formValues: LoginPageFormProps) => {
        console.log(formValues)
        const token = getJwtToken({ email: formValues.email })
        setToken(token)
    }

    return (
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Text color="brand.8" size="xxl" component="h1">
                Bem-vindo
            </Text>
            <Text className={classes.primaryDescription}>informe as suas credenciais de acesso ao portal</Text>
            <TextInput
                rightSection={<img src={MailIcon} alt="Mail Icon" />}
                mb={23}
                mt={6}
                placeholder="Informe seu e-mail"
                {...form.getInputProps('email')}
            />
            <PasswordInput placeholder="Informe sua senha" mb={11} {...form.getInputProps('password')} />

            <Button
                type="submit"
                rightIcon={<img src={EnterIcon} width={13} alt="Enter Icon" />}
                className={classes.primaryButton}>
                entrar
            </Button>

            <Flex justify="flex-end">
                <NavLink to={authPaths.forgotPassword}>
                    <Button
                        leftIcon={<img src={ShieldIcon} width={13} alt="Shield Icon" />}
                        mt={20}
                        color="red"
                        variant="subtle"
                        compact>
                        Esqueceu sua senha?
                    </Button>
                </NavLink>
            </Flex>
        </form>
    )
}

export default LoginPage
