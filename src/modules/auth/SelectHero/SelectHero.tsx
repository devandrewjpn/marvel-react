import React from 'react'
import { Text, Button } from '@mantine/core'
import { useStyles } from '../AuthShell/AuthShell.styles'
import { dashPaths } from '@/routes/paths/dashboard.paths'
import { NavLink } from 'react-router-dom'

const SelectHero = () => {

    const { classes } = useStyles()
    
    return (
        <>
            <Text color="brand.8" size="xxl" component="h1">
                Selecione o seu agente mais legal
            </Text>
            <Text mb={26} mt={28} className={classes.primaryDescription}>Tenha a visão completa do seu agente.</Text>
            <NavLink to={dashPaths.home}>
                <Button className={classes.primaryButton}>Entrar</Button>
            </NavLink>
        </>
    )
}

export default SelectHero
