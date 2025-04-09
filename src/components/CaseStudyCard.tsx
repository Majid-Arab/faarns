import { IconHomeFilled } from "@tabler/icons-react";
import { Badge, Card, Group, Text } from "@mantine/core";

export function CaseStudyCard() {
  return (
    <Card withBorder padding="lg" radius="md">
      <Group>
        <IconHomeFilled />
        <Text>12 days left</Text>
      </Group>

      <Badge>12 days left</Badge>
      <Text fz="lg" fw={500} mt="md">
        5.3 minor release (September 2022)
      </Text>
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
