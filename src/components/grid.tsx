import { Container, Grid, GridCol, Text, Title } from '@mantine/core';
import { GridCard } from './GridCard';
import { IconColorSwatch } from '@tabler/icons-react';

export function LeadGrid() {
    return (
        <Container my="md" className="max-w-full m-0 p-0">
            <Grid gutter="md">
                {/* First Column (Wider) */}
                <GridCol span={8}>
                    <Grid gutter="md">
                        {/* Row 1: Two cards side by side */}
                        <GridCol span={6}>
                            <GridCard
                                icon={IconColorSwatch}
                                title="Integrated team collaboration"
                                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
                            />
                        </GridCol>
                        <GridCol span={6}>
                            <GridCard
                                icon={IconColorSwatch}
                                title="Integrated team collaboration"
                                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
                            />
                        </GridCol>

                        {/* Row 2 */}
                        <GridCol span={12}>
                            <GridCard
                                icon={IconColorSwatch}
                                title="Integrated team collaboration"
                                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
                            />
                        </GridCol>

                        {/* Row 3 */}
                        <GridCol span={12}>
                            <GridCard
                                icon={IconColorSwatch}
                                title="Integrated team collaboration"
                                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
                            />
                        </GridCol>
                    </Grid>
                </GridCol>

                {/* Second Column (Narrower) */}
                <GridCol span={4}>
                    <Grid
                        className="bg-[linear-gradient(308.04deg,_#F0F4F9_4.87%,_#B3C3D8_100%)] text-black p-2 rounded-md h-full"
                        style={{ height: '100%' }}
                    >
                        <GridCol span={12} className="flex flex-col justify-between h-full">
                            {/* Top Text */}
                            <Grid>
                                <Text fw={600} className='text-2xl'>
                                    With years of expertise, custom solutions, and a customer-first approach, we deliver proven results and build long-term partnerships. Choose us for innovative strategies and unmatched dedication to your success.
                                </Text>
                            </Grid>

                            {/* Bottom Metrics */}
                            <Grid>
                                <GridCol span={6} className="text-center">
                                    <Title>500%</Title>
                                    <Text fw={600} size="md">Average ROI</Text>
                                </GridCol>
                                <GridCol span={6} className="text-center">
                                    <Title>10k+</Title>
                                    <Text fw={600} size="md">Leads/month</Text>
                                </GridCol>
                            </Grid>
                        </GridCol>
                    </Grid>
                </GridCol>

            </Grid>
        </Container>
    );
}
