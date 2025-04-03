import { Button, Text, Title } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const OurWork = () => {
    return (
        <div className='h-full py-8 bg-white rounded-2xl flex justify-between items-center gap-2 overflow-hidden'>
            {/* Images  */}
            <div className="flex flex-col">
                <Image src="/assets/image.png" alt='Dots' height={500} width={500} className=' h-20 rounded-md -rotate-6 -mb-4 -ml-1' />
                <Image src="/assets/image.png" alt='Dots' height={500} width={500} className=' h-20 rounded-md -rotate-6 -mb-4 -ml-3' />
                <Image src="/assets/image.png" alt='Dots' height={500} width={500} className=' h-20 rounded-md -rotate-6 -mb-4 -ml-6' />

            </div>
            {/* Centered Content  */}
            <div className='bg-white rounded-2xl flex flex-col justify-center items-center gap-2'>
                <Image src="/assets/dots.png" alt='Dots' height={500} width={500} className='w-3' />
                <Title className='text-black text-5xl'>Some of our works</Title>
                <Text size="sm" className="text-black max-w-[500px] text-center text-[20px]">
                    Each project in our collection reflects the passion and creativity we bring to every digital endeavor. Fro sleek web design to dynamic branding solutions,our portfolio highlights the diversity of our expertise
                </Text>
                <Button variant='outline' color='black' className='rounded-md' size='xl' rightSection={<IconArrowRight size={25} />}>Explore our works</Button>

            </div>
            {/* Images  */}
            <div className="flex flex-col">
                <Image src="/assets/image.png" alt='Dots' height={500} width={500} className=' h-20 rounded-md rotate-6 -mb-4 -mr-1' />
                <Image src="/assets/image.png" alt='Dots' height={500} width={500} className=' h-20 rounded-md rotate-6 -mb-4 -mr-5' />
                <Image src="/assets/image.png" alt='Dots' height={500} width={500} className=' h-20 rounded-md rotate-6 -mb-4 -mr-6' />
            </div>
        </div>
    )
}

export default OurWork