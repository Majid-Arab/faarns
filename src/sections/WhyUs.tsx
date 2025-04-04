import { LeadGrid } from '@/components/grid'
import { Button, Title } from '@mantine/core'
import React from 'react'

const WhyUs = () => {
    return (
        <div className='bg-[url(/assets/whyus.png)] bg-cover'>
            <Button variant='default'>Why Choose Us</Button>
            <Title><span className="italic">Why</span> FAARNS is The <span className="italic">Right Choice</span> For You</Title>
            <LeadGrid />
        </div>
    )
}

export default WhyUs