import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { getColor, colorKeys } from "../../constants/colors";

const NoResults = ({
  empty = "No results found",
  containerProps,
  primaryColor = colorKeys.lightGrayBackgroundFill,
  secondaryColor = colorKeys.lightGray,
  textColor = colorKeys.lightGray,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box m="auto" maxW="180px" {...containerProps}>
      <svg viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
          <ellipse
            fill={getColor(primaryColor, colorMode)}
            cx="32"
            cy="33"
            rx="32"
            ry="7"
          ></ellipse>
          <g fill-rule="nonzero" stroke={getColor(primaryColor, colorMode)}>
            <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
            <path
              d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
              fill={getColor(secondaryColor, colorMode)}
            ></path>
          </g>
        </g>
      </svg>
      <Text
        mt={5}
        textAlign="center"
        fontWeight="bold"
        color={getColor(textColor, colorMode)}
      >
        {empty}
      </Text>
    </Box>
  );
};

export default NoResults;
