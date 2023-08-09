import React from 'react'
import { Text, Button } from '@mantine/core'
import { useStyles } from '../AuthShell/AuthShell.styles'

const MailSend = () => {

    const { classes } = useStyles()
    
    return (
        <>
            <Text color="brand.8" size="xxl" component="h1">
                Tudo certo ;)
            </Text>
            <Text mb={26} mt={28} className={classes.primaryDescription}>Foi enviado um e-mail para você com instruções de como redefinir a sua senha.</Text>
            <Button className={classes.primaryButton}>voltar para o login</Button>
        </>
    )
}

export default MailSend
