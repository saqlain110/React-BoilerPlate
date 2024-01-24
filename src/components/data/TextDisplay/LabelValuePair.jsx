import {
  Flex,
  Heading,
  Skeleton,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../../constants/colors";

const LabelValuePair = ({
  label,
  value,
  colon = true,
  restricted = true,
  valueComponent,
  headingProps,
  flexDir = "row",
  spacing = 2,
  containerProps,
  valueProps,
  labelComponent,
  isLoading,
  loadingComponent,
  loadingProps,
}) => {
  const { colorMode } = useColorMode();
  if (restricted && !value && value !== 0) return null;
  return (
    <Flex flexDir={flexDir} {...containerProps}>
      {labelComponent ? (
        labelComponent
      ) : (
        <Heading mr={spacing} size="sm" {...headingProps}>
          {label}
          {colon && ":"}
        </Heading>
      )}
      {isLoading && loadingComponent && loadingComponent}
      {isLoading && !loadingComponent && (
        <Flex justify={"center"}>
          <Skeleton width="20px" height="20px" mr={spacing} {...loadingProps} />
        </Flex>
      )}
      {!isLoading && valueComponent && valueComponent}
      {!isLoading && !valueComponent && (
        <chakra.p
          whiteSpace="normal"
          fontSize="14px"
          color={getColor(colorKeys.primaryText, colorMode)}
          {...valueProps}
        >
          {value}
        </chakra.p>
      )}
    </Flex>
  );
};

export default LabelValuePair;
