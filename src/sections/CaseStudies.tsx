import { Grid, GridCol, ThemeIcon, Title, Text } from '@mantine/core'
import { IconColorSwatch } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const CaseStudies = () => {
    return (
        <section className='flex flex-col justify-center items-center py-10'>
            <Title className='text-3xl md:text-5xl '>Case Studies</Title>
            <Grid>
                <GridCol span={6}>
                    <Image src="/assets/faarns.jpeg" alt='Image' height={500} width={500} />
                    <Image src="/assets/faarns.jpeg" alt='Image' height={500} width={500} />
                </GridCol>
                <GridCol span={6}>
                    <div>
                        <ThemeIcon
                            size="xl"
                            radius="md"
                            variant="transparent"
                            gradient={{ deg: 0, from: 'pink', to: 'orange' }}
                        >
                            <IconColorSwatch size={28} stroke={1.5} />
                        </ThemeIcon>
                        <Text size="xl" fw={500} mt="md">
                            Theming documentation
                        </Text>
                        <Text size="sm" mt="sm" c="dimmed">
                            Extend default theme with any amount of additional colors, replace shadows, radius, spacing,
                            fonts and many other properties to match your design requirements. Mantine theme is just an
                            object, you can subscribe to it in any part of application via context and use it to build
                            your own components.
                        </Text>
                    </div>
                </GridCol>
            </Grid>
        </section>
    )
}

export default CaseStudies