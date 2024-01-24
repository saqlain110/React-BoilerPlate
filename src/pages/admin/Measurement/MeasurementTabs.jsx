import { Button, HStack, useColorMode } from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../../constants/colors";
import { INTEGRATION, INTEGRATION_LABELS } from "../../../constants/enums";

const MeasurementTabs = ({ onQueryChange, query }) => {
  const { colorMode } = useColorMode();
  return (
    <HStack spacing={0} mt={5}>
      <Button
        minW="150px"
        colorScheme={"blue"}
        borderBottom={`1px solid ${getColor(colorKeys.lightBlue, colorMode)}`}
        rounded={"none"}
        size={"sm"}
        onClick={() => onQueryChange({ integration: INTEGRATION.SKINIVE })}
        variant={
          query?.integration === INTEGRATION.SKINIVE ? "solid" : "outline"
        }
      >
        {INTEGRATION_LABELS[1]}
      </Button>
      <Button
        minW="150px"
        colorScheme={"blue"}
        borderBottom={`1px solid ${getColor(colorKeys.lightBlue, colorMode)}`}
        rounded={"none"}
        onClick={() => onQueryChange({ integration: INTEGRATION.BINNAH })}
        size={"sm"}
        variant={
          query?.integration === INTEGRATION.BINNAH ? "solid" : "outline"
        }
      >
        {INTEGRATION_LABELS[2]}
      </Button>
    </HStack>
  );
};

export default MeasurementTabs;
