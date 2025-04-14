import {
  Box,
  Container,
  Grid,
  GridCol,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { GridCard } from "../GridCard";
import { IconColorSwatch } from "@tabler/icons-react";

export function LeadGrid() {
  return (
    <Container my="md" className="max-w-full m-0 p-0">
      <Grid
        gutter="md"
        breakpoints={{
          xs: "350px",
          sm: "550px",
          md: "1000px",
          lg: "1200px",
          xl: "1400px",
        }}
      >
        {/* First Column (Wider) */}
        <GridCol span={{ base: 12, md: 7, lg: 8 }}>
          <Grid
            gutter="md"
            breakpoints={{
              xs: "450px",
              sm: "650px",
              md: "1000px",
              lg: "1200px",
              xl: "1400px",
            }}
          >
            {/* Row 1: Two cards side by side */}
            <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <GridCard
                icon={IconColorSwatch}
                title="Integrated team collaboration"
                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
              />
            </GridCol>
            <GridCol span={{ base: 12, sm: 6, md: 6, lg: 6 }}>
              <GridCard
                icon={IconColorSwatch}
                title="Integrated team collaboration"
                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
              />
            </GridCol>

            {/* Row 2 */}
            <GridCol span={12}>
              <GridCard
                icon={IconColorSwatch}
                title="Integrated team collaboration"
                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
              />
            </GridCol>

            {/* Row 3 */}
            <GridCol span={12}>
              <GridCard
                icon={IconColorSwatch}
                title="Integrated team collaboration"
                description="By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effectiveness of your products and engage closely with your customer base."
              />
            </GridCol>
          </Grid>
        </GridCol>

        {/* Second Column (Narrower) */}
        <GridCol span={{ base: 12, md: 5, lg: 4 }}>
          <Box
            className="bg-[linear-gradient(154.5deg,_#F0F4F9_0%,_#9CB1CB_100%)] text-black p-2 py-4 rounded-3xl h-full"
            style={{ height: "100%" }}
          >
            <Box className="flex flex-col justify-between h-full">
              {/* Top Text */}
              <Box flex={1}>
                <Text fw={500} className="text-xl mb-5 md:text-3xl">
                  With years of expertise, custom solutions, and a
                  customer-first approach, we deliver proven results and build
                  long-term partnerships. Choose us for innovative strategies
                  and unmatched dedication to your success.
                </Text>
              </Box>

              {/* Bottom Metrics */}
              <Group justify="space-around">
                <Box className="text-center">
                  <Title size={60} fw={600} className="text-4xl md:text-6xl">
                    500%
                  </Title>
                  <Text fw={500} className="text-lg md:text-xl">
                    Average ROI
                  </Text>
                </Box>
                <Box className="text-center">
                  <Title size={60} fw={600} className="text-4xl md:text-6xl">
                    10k+
                  </Title>
                  <Text fw={500} className="text-lg md:text-xl">
                    Leads/month
                  </Text>
                </Box>
              </Group>
            </Box>
          </Box>
        </GridCol>
      </Grid>
    </Container>
  );
}
