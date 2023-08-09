import { Card, Grid, Pagination, Text, Image } from '@mantine/core'
import { useStyles } from './Home.style'
import { NavLink } from 'react-router-dom'
import { dashPaths } from '@/routes/paths/dashboard.paths'
import { mockData } from '../../../services/characters'

const Home = () => {
    const { classes } = useStyles()
    // console.log(characters.data);

    return (
        <>
            <Grid>
                {mockData.data.results.map((item: any) => (
                    <Grid.Col md={3} xs={12}>
                        <NavLink to={dashPaths.details}>
                            <Card className={classes.card} py="xxl" px="xl">
                                <Grid>
                                    <Grid.Col span={4}>
                                        <Image
                                            radius="md"
                                            src={item.thumbnail.path + '.' + item.thumbnail.extension}
                                            alt="Random image"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={8}>
                                        <Text className={classes.cardTitle}>{item.name}</Text>
                                        <Text className={classes.cardText}>descricao</Text>
                                    </Grid.Col>
                                </Grid>
                            </Card>
                        </NavLink>
                    </Grid.Col>
                ))}
            </Grid>
            <Grid>
                <Grid.Col span={12}>
                    <Pagination radius={0} spacing={0} total={10} color="brand.8" />
                </Grid.Col>
            </Grid>
        </>
    )
}

export default Home
