import React from "react";
import { Box } from "@chakra-ui/react";
import NoResults from "../../svg/NoResults";

const TableEmpty = ({ loading, isRefreshing, data }) => {
  if (loading || isRefreshing || data?.length > 0) return null;
  return (
    <Box w="500px" mx="auto" my={10}>
      <NoResults />
    </Box>
  );
};

export default TableEmpty;
