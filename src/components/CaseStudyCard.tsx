import { IconHomeFilled } from "@tabler/icons-react";
import { Badge, Card, Group, Text, Title } from "@mantine/core";

export function CaseStudyCard() {
  return (
    <Card bg="white" padding={0} radius="md" className="gap-1">
      <Group className="text-cyan-950">
        <IconHomeFilled size={30} />
        <Text className="font-bold text-[22px]">Realtors</Text>
      </Group>

      <Group>
        <Badge variant="outline" color="gray" size="xl" radius="md">
          12 days left
        </Badge>
        <Badge variant="outline" color="gray" size="xl" radius="md">
          12 days left
        </Badge>
        <Badge variant="outline" color="gray" size="xl" radius="md">
          12 days left
        </Badge>
      </Group>
      <Title className="text-cyan-950" fw={500}>
        5.3 minor release (September 2022)
      </Title>
      <Text className="text-[25px] text-cyan-950">
        Form context management, Switch, Grid and Indicator components
        improvements, new hook and 10+ other changes
      </Text>

      <Text className="text-[28px] text-cyan-950">4x traffic in 3 months</Text>
    </Card>
  );
}
