import React from "react";
import {
  Flex,
  HStack,
  Icon,
  useColorMode,
  chakra,
  Box,
  Badge,
  Text,
} from "@chakra-ui/react";
import SummaryBoxSkeleton from "../../skeletons/SummaryBoxSkeleton";
import APP_ICONS from "../../../constants/icons";
import { colorKeys, getColor } from "../../../constants/colors";

const SummaryBox = ({ item, isLoading }) => {
  const { colorMode } = useColorMode();
  if (isLoading) return <SummaryBoxSkeleton item={item} />;
  return (
    <HStack bg={getColor(colorKeys.tableBackground, colorMode)} spacing={2}>
      <Flex flexDir="column" p="28px 20px" w="full">
        <Flex mb={4} align={"center"}>
          <Flex
            mr="3"
            align="center"
            justify={"center"}
            backgroundColor={getColor(colorKeys.lighterBlue, colorMode)}
            h="30px"
            w="30px"
            rounded={"full"}
          >
            <Icon
              as={item.icon}
              color={getColor(colorKeys.lightBlue, colorMode)}
            />
          </Flex>
          <Box>
            <chakra.p fontWeight={"500"} fontSize="14px">
              {item.title}
            </chakra.p>
            <chakra.p
              color={getColor(colorKeys.dimText, colorMode)}
              fontSize="13px"
            >
              {item.bottomValue}
            </chakra.p>
          </Box>
        </Flex>
        <HStack spacing={1} align={"center"}>
          <Text fontSize="20px" fontWeight={"500"}>
            {item.value}
          </Text>
          {item.dailyChangeValue !== 0 && (
            <Icon
              as={
                item.dailyChangeValue < 0
                  ? APP_ICONS.DownChevron
                  : APP_ICONS.UpChevron
              }
              color={
                item.dailyChangeValue < 0
                  ? getColor(colorKeys.danger, colorMode)
                  : getColor(colorKeys.success, colorMode)
              }
            />
          )}
        </HStack>
        <HStack spacing="2" align={"center"} w="full">
          <Badge
            colorScheme={item.dailyChangeValue < 0 ? "red" : "green"}
            fontSize="12px"
            fontWeight={"500"}
          >
            {item.dailyChange}
          </Badge>
          <Text fontSize={"13px"}>{item.dailyChangeLabel}</Text>
        </HStack>
      </Flex>
    </HStack>
  );
};

export default SummaryBox;
