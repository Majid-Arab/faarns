import { Paper, Text } from '@mantine/core';

type Prop = {
    icon: React.ElementType;
    title: string;
    description: string;
}

export function GridCard({ icon: Icon, title, description }: Prop) {
    return (
        <Paper withBorder className="px-[25px] py-[15px] rounded-3xl text-black bg-[linear-gradient(308.04deg,_#F0F4F9_4.87%,_#B3C3D8_100%)]">
            <div className="inline-block p-[8px] rounded-full borer-solid border-black border-2">

                <Icon size={50} stroke={2} className="" />
            </div>
            <Text className='text-4xl' fw={900} mt="md">
                {title}
            </Text>
            <Text size="" mt="sm">
                {description}
            </Text>
        </Paper>
    );
}