import { Box, Container, Grid, GridCol, Group, Text, Title } from '@mantine/core';
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
                    <Box
                        className="bg-[linear-gradient(154.5deg,_#F0F4F9_0%,_#9CB1CB_100%)] text-black p-2 rounded-3xl h-full"
                        style={{ height: '100%' }}
                    >
                        <Box className="flex flex-col justify-between h-full">
                            {/* Top Text */}
                            <Box flex={1}>
                                <Text fw={600} className='text-2xl'>
                                    With years of expertise, custom solutions, and a customer-first approach, we deliver proven results and build long-term partnerships. Choose us for innovative strategies and unmatched dedication to your success.
                                </Text>
                            </Box>

                            {/* Bottom Metrics */}
                            <Group justify="space-around">
                                <Box className="text-center">
                                    <Title>500%</Title>
                                    <Text fw={600} size="md">Average ROI</Text>
                                </Box>
                                <Box className="text-center">
                                    <Title>10k+</Title>
                                    <Text fw={600} size="md">Leads/month</Text>
                                </Box>
                            </Group>
                        </Box>
                    </Box>
                </GridCol>

            </Grid>
        </Container>
    );
}
