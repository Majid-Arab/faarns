import { Paper, Text, ThemeIcon } from '@mantine/core';

type Prop = {
    icon: React.ElementType;
    title: string;
    description: string;
}

export function GridCard({ icon: Icon, title, description }: Prop) {
    return (
        <Paper withBorder radius="md" className="p-2 text-black bg-[linear-gradient(308.04deg,_#F0F4F9_4.87%,_#B3C3D8_100%)]">
            <ThemeIcon
                size="xl"
                radius="xl"
                variant="outline"
                color='black'
            >
                <Icon size={28} stroke={1.5} />
            </ThemeIcon>
            <Text size="xl" fw={900} mt="md">
                {title}
            </Text>
            <Text size="lg" mt="sm">
                {description}
            </Text>
        </Paper>
    );
}