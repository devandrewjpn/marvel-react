import { Avatar, Grid, List, Tabs, Text } from '@mantine/core'
import React from 'react'

const Details = () => {
    return (
        <Tabs defaultValue="Visão">
            <Tabs.List>
                <Tabs.Tab value="Visão">Visão Geral</Tabs.Tab>
                <Tabs.Tab value="Teams">Teams</Tabs.Tab>
                <Tabs.Tab value="Powers">Powers</Tabs.Tab>
                <Tabs.Tab value="Species">Species</Tabs.Tab>
                <Tabs.Tab value="Authors">Authors</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Visão" pt="xs">
                <Grid py={50} px={20}>
                    <Grid.Col span={1}>
                        <Avatar
                            radius="100%"
                            size="100%"
                            color="dark"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                        />
                    </Grid.Col>
                    <Grid.Col span={11}>
                        <Text>A-Bomb (HAS)</Text>
                        <Text>
                            Born with super-human senses and the power to heal from almost any wound, Wolverine was
                            captured by a secret Canadian organization and given an unbreakable skeleton and claws.
                            Treated like an animal, it took years for him to control himself. Now, he's a premiere
                            member of both the X-Men and the Avengers.
                        </Text>
                    </Grid.Col>
                </Grid>
            </Tabs.Panel>

            <Tabs.Panel value="Teams" pt="xs">
                <List size="sm" withPadding>
                    <List.Item>Avengers</List.Item>
                    <List.Item>Defenders</List.Item>
                    <List.Item>Future Foundation</List.Item>
                    <List.Item>Heroes for Hire</List.Item>
                    <List.Item>The New Avengers</List.Item>
                    <List.Item>X-Mansion</List.Item>
                </List>
            </Tabs.Panel>

            <Tabs.Panel value="Powers" pt="xs">
                <List size="sm" withPadding>
                    <List.Item>Agility</List.Item>
                    <List.Item>Genius</List.Item>
                    <List.Item>Genius-level intellect</List.Item>
                    <List.Item>Precognitive</List.Item>
                    <List.Item>Precognitive spider-sense</List.Item>
                    <List.Item>Speed</List.Item>
                    <List.Item>Spider-sense</List.Item>
                    <List.Item>Superhuman strength </List.Item>
                </List>
            </Tabs.Panel>

            <Tabs.Panel value="Species" pt="xs">
                <List size="sm" withPadding>
                    <List.Item>Mutate</List.Item>
                </List>
            </Tabs.Panel>

            <Tabs.Panel value="Authors" pt="xs">
                <List size="sm" withPadding>
                    <List.Item>Stan Lee</List.Item>
                    <List.Item>Steve Ditko</List.Item>
                </List>
            </Tabs.Panel>
        </Tabs>
    )
}

export default Details
