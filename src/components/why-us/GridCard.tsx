import { Paper, Text } from "@mantine/core";
import { GridCardProp } from "../../../type/type";

export function GridCard({ icon: Icon, title, description }: GridCardProp) {
  return (
    <Paper
      withBorder
      className="px-[25px] py-[15px] rounded-3xl text-black bg-[linear-gradient(308.04deg,_#F0F4F9_4.87%,_#B3C3D8_100%)]"
    >
      <div className="inline-block p-[8px] rounded-full borer-solid border-black border-2">
        <Icon stroke={2} className="size-2 md:size-3" />
      </div>
      <Text className="text-2xl md:text-4xl" fw={900} mt="md">
        {title}
      </Text>
      <Text className="text-sm md:text-md" mt="sm">
        {description}
      </Text>
    </Paper>
  );
}
