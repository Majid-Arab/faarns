import { LeadGrid } from '@/components/grid'
import { Button, Title } from '@mantine/core'
import React from 'react'

const WhyUs = () => {
    return (
        <div className='bg-[url(/assets/whyus.png)] w-full bg-cover flex justify-center py-10'>
            <div className='w-[1400px]'>
                <Button variant='default' radius="lg">Why Choose Us</Button>
                <Title className='my-2  text-3xl md:text-5xl '><span className="italic">Why</span> FAARNS is The <span className="italic">Right Choice</span> For You</Title>
                <LeadGrid />
            </div>
        </div>
    )
}

export default WhyUs