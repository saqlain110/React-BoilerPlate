import React from "react";
import { Badge } from "@chakra-ui/react";

const StatusBadge = ({
  value,
  activeStatus = 1,
  isLoading,
  loadingText = "Loading...",
  enumObj,
  handleStatus,
}) => {
  const status = enumObj ? enumObj[value] : value;
  return (
    <Badge
      textAlign={"center"}
      minW="61px"
      colorScheme={value === activeStatus ? "green" : "red"}
      onClick={handleStatus}
    >
      {isLoading ? loadingText : status || value || "N/A"}
    </Badge>
  );
};

export default React.memo(StatusBadge);
