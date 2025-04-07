import { LeadGrid } from '@/components/grid'
import ItalicText from '@/components/ItlaicText'
import { Button, Title } from '@mantine/core'
import React from 'react'

const WhyUs = () => {
    return (
        <div className='bg-[url(/assets/whyus.png)] w-full bg-cover flex justify-center py-10'>
            <div className='w-[1400px]'>
                <Button variant='outline' color='white' radius="lg">Why Choose Us</Button>
                <Title className='my-2  text-3xl md:text-5xl '><ItalicText text='Why' /> FAARNS is The <ItalicText text='Right Choice' /> For You</Title>
                <LeadGrid />
            </div>
        </div>
    )
}

export default WhyUs