import React from "react";
import {  Box, SimpleGrid, VStack } from "@chakra-ui/react";
import APP_ICONS from "../../../constants/icons";
import SummaryBox from "../../../components/data/Cards/SummaryCard";
import BarStacked from "../../../components/data/Charts/BarStacked";

const Dashboard = () => {
  const summaryData = [
    {
      icon: APP_ICONS.COPY,
      title: "Profit",
      value: 45,
      dailyChange: `5%`,
      dailyChangeValue: 0,
      dailyChangeLabel: "Daily Charge",
      bottomValue: `45% Revenue`,
    },
    {
      icon: APP_ICONS.COPY,
      title: "Profit",
      value: 45,
      dailyChange: `5%`,
      dailyChangeValue: 0,
      dailyChangeLabel: "Daily Charge",
      bottomValue: `45% Revenue`,
    },
    {
      icon: APP_ICONS.COPY,
      title: "Profit",
      value: 45,
      dailyChange: `5%`,
      dailyChangeValue: 0,
      dailyChangeLabel: "Daily Charge",
      bottomValue: `45% Revenue`,
    },
    {
      icon: APP_ICONS.COPY,
      title: "Profit",
      value: 45,
      dailyChange: `5%`,
      dailyChangeValue: 0,
      dailyChangeLabel: "Daily Charge",
      bottomValue: `45% Revenue`,
    },
  ];

  return (
    <VStack align="stretch">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
        {summaryData?.map((item, i) => (
          <SummaryBox
            key={i}
            item={item}
            isLoading={
              // dashboardStatsQuery.isLoading ||
              // dashboardStatsQuery.isFetching ||
              // dashboardStatsQuery.isRefetching
              false
            }
          />
        ))}
      </SimpleGrid>

      <Box>
        <BarStacked/>
      </Box>
    </VStack>
  );
};

export default Dashboard;
