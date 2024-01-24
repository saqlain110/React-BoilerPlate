import {
  Icon,
  chakra,
  Flex,
  HStack,
  Skeleton,
  useColorMode,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../constants/colors";

const SummaryBoxSkeleton = ({ item }) => {
  const { colorMode } = useColorMode();
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
            <Skeleton h="15px" w="80px" />
          </Box>
        </Flex>
        <HStack spacing={1} align={"center"}>
          <Skeleton h="20px" w="100px" />
        </HStack>
        <HStack spacing="2" align={"center"} w="full">
          <Skeleton h="15px" w="50px" />
          <Text fontSize={"13px"}>{item.dailyChangeLabel}</Text>
        </HStack>
      </Flex>
    </HStack>
  );
};

export default SummaryBoxSkeleton;
