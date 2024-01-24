import React from "react";
import { useParams } from "react-router-dom";
import { useCompany } from "../../../../APIservices/services/companyService";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { colorKeys, getColor } from "../../../../constants/colors";
import LabelValuePair from "../../../../components/data/TextDisplay/LabelValuePair";
import CustomTabs from "../../../../components/data/CustomTabs";
import CompanyRules from "./CompanyRules";
import UserRules from "./UserRules";

const CompanyDetails = () => {
  const { id } = useParams();
  const { colorMode } = useColorMode();
  //   const { data } = useCompany(id);

  const data = {
    companyRules: [
      {
        uuid: "116ac8c7-9c45-4fdb-a764-f611e164ab59",
        interval: 0,
        sessionCount: 5,
        integration: 2,
        _id: "65ae6259c41c47ead625f51a",
      },
      {
        uuid: "af22897a-28e5-4810-9bee-d3abcb1784f6",
        interval: 0,
        sessionCount: 0,
        integration: 1,
        _id: "65ae6259c41c47ead625f51b",
      },
    ],
    userRules: [
      {
        uuid: "116ac8c7-9c45-4fdb-a764-f611e164ab59",
        sessionsAllowedPerUser: 0,
        integration: 2,
        _id: "65ae6259c41c47ead625f51c",
      },
      {
        uuid: "af22897a-28e5-4810-9bee-d3abcb1784f6",
        sessionsAllowedPerUser: 0,
        integration: 1,
        _id: "65ae6259c41c47ead625f51d",
      },
    ],
  };
  return (
    <VStack spacing={3} align={"stretch"}>
      <Heading size="md">{data?.name}</Heading>
      <Box w="full">
        <Card w="full" bg={getColor(colorKeys.tableBackground, colorMode)}>
          <CardBody>
            <CustomTabs
              tabPanelProps={{ p: 0 }}
              tabs={[
                {
                  head: "Company Rules",
                  body: <CompanyRules data={data?.companyRules} />,
                },
                {
                  head: "User Rules",
                  body: <UserRules data={data?.userRules} />,
                },
              ]}
            />
          </CardBody>
        </Card>
      </Box>
    </VStack>
  );
};

export default CompanyDetails;
