import { IconHomeFilled } from "@tabler/icons-react";
import { Badge, Card, Group, Text, Title } from "@mantine/core";

export function CaseStudyCard() {
  return (
    <Card bg="white" padding="lg" radius="md">
      <Group className="text-cyan-950">
        <IconHomeFilled />
        <Text>12 days left</Text>
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
      <Title className="text-cyan-950" fw={500} mt="md">
        5.3 minor release (September 2022)
      </Title>
      <Text fz="sm" c="dimmed" mt={5}>
        Form context management, Switch, Grid and Indicator components
        improvements, new hook and 10+ other changes
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed
      </Text>
    </Card>
  );
}
