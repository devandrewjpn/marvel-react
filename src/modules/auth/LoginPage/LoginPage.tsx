import React from 'react'
import EnterIcon from '@/assets/images/enter.svg'
import MailIcon from '@/assets/images/mailicon.svg'
import { Text, Button, PasswordInput, TextInput } from '@mantine/core'

const LoginPage = () => {
    return (
        <>
            <Text color="brand.8" size="xxl" component="h1">
                Bem-vindo
            </Text>
            <Text>informe as suas credenciais de acesso ao portal</Text>
            <TextInput rightSection={<img src={MailIcon} alt="Mail Icon" />} placeholder="Informe seu e-mail" />
            <PasswordInput placeholder="Informe sua senha" />
            <Button rightIcon={<img src={EnterIcon} alt="Enter Icon" />}>entrar</Button>
        </>
    )

    // const [data, setData] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     const apiKey = '08bfc07e5af8c63dcc5c879a66931f85'
    //     const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}`

    //     axios
    //         .get(apiUrl, {
    //             headers: {
    //                 'api-key': apiKey,
    //             },
    //         })
    //         .then((response) => {
    //             setData(response.data)
    //             setLoading(false)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             setLoading(false)
    //             setError(error)
    //         })
    // }, [])

    // if (loading) {
    //     return <div>Carregando...</div>
    // }

    // if (error) {
    //     return <div>{error}</div>
    // }
}

export default LoginPage
