import { Container, Grid, GridCol, SimpleGrid, Text, Title } from '@mantine/core';
import { GridCard } from './GridCard';
import { IconColorSwatch } from '@tabler/icons-react';

export function LeadGrid() {

    return (
        <Container my="md">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                <Grid gutter="md" grow>
                    <GridCol span={6}>
                        <GridCard icon={IconColorSwatch} title='Integrated team collaboration' description='By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.' />
                    </GridCol>
                    <GridCol span={6}>
                        <GridCard icon={IconColorSwatch} title='Integrated team collaboration' description='By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.' />
                    </GridCol>
                    <GridCol>
                        <GridCard icon={IconColorSwatch} title='Integrated team collaboration' description='By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.' />
                    </GridCol>
                    <GridCol>
                        <GridCard icon={IconColorSwatch} title='Integrated team collaboration' description='By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.' />
                    </GridCol>
                </Grid>
                <Grid className='bg-[linear-gradient(308.04deg,_#F0F4F9_4.87%,_#B3C3D8_100%)] text-black p-2'>
                    <GridCol span={12}>
                        <Text fw={600} size='lg'>
                            With years of expertise, custom solutions, and a customer-first approach, we deliver proven results and build long-term partnerships. Choose us for innovative strategies and unmatched dedication to your success.
                        </Text>
                    </GridCol>
                    <GridCol span={6} className='text-center'>
                        <Title>500%</Title>
                        <Text fw={600} size='md'>
                            Average ROI for our clients
                        </Text>
                    </GridCol>
                    <GridCol span={6} className='text-center'>
                        <Title>10k+</Title>
                        <Text fw={600} size='md'>
                            Leads generated monthly
                        </Text>
                    </GridCol>
                </Grid>
            </SimpleGrid>
        </Container>
    );
}