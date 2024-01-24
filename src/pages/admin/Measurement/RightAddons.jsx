import React from "react";
import { Input, useColorMode } from "@chakra-ui/react";
import { colorKeys, getColor } from "../../../constants/colors";

const RightAddons = ({ query, onQueryChange }) => {
  const { colorMode } = useColorMode();
  return (
    <Input
      value={query?.sessionDate}
      onChange={(e) => {
        onQueryChange({ sessionDate: e.target.value, page: 1 });
      }}
      w="200px"
      type="date"
      bg={getColor(colorKeys.white, colorMode)}
      placeholder="Search"
      size="sm"
    />
  );
};

export default RightAddons;
