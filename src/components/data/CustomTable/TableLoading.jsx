import { Skeleton, Td, Tr } from "@chakra-ui/react";
import React from "react";

const TableLoading = ({ loading, head }) => {
  if (!loading) return null;
  return new Array(15).fill(0).map((item, index) => (
    <Tr key={index}>
      <Td colSpan={head.length} p="10px 0px">
        <Skeleton height="25px" w="full" />
      </Td>
    </Tr>
  ));
};

export default TableLoading;
