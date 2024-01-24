import {
  Flex,
  Icon,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorMode,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../../constants/colors";
import sortOrders from "../../../constants/sortOrders";
import APP_ICONS from "../../../constants/icons";

const TableHead = ({
  tableHeadProps,
  head,
  theadRowProps,
  columnsPadding,
  handleSort,
  query,
  tableHeadTextProps,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Thead
      zIndex="1"
      pos="sticky"
      top={0}
      h="45px"
      bg={getColor(colorKeys.tableBackground, colorMode)}
      {...tableHeadProps}
    >
      <Tr {...theadRowProps}>
        {head &&
          head?.map((item, index) => (
            <Th
              textTransform={"capitalize"}
              textAlign={item.align ? item.align : "center"}
              fontSize="15px"
              color={getColor(colorKeys.primaryText, colorMode)}
              key={index}
              p="4px 0px"
              h={"35px"}
              rounded="sm"
              px={columnsPadding}
              ml={"0px"}
            >
              <Flex
                align={"center"}
                justify={item.align ? item.align : "left"}
                onClick={
                  item.isSortable
                    ? () =>
                        handleSort(
                          item.extractor,
                          query?.SortOrder === sortOrders.ASC
                            ? sortOrders.DESC
                            : sortOrders.ASC
                        )
                    : null
                }
                h="full"
                cursor={item.isSortable ? "pointer" : "default"}
              >
                <Tooltip
                  isDisabled={!item.isSortable}
                  arrowSize={15}
                  label={`Sort in ${
                    query?.Sort === item.extractor &&
                    query?.SortOrder === sortOrders.ASC
                      ? "descending"
                      : "ascending"
                  } order`}
                  aria-label="A tooltip"
                >
                  <Flex
                    h="full"
                    align={"center"}
                    transition="all 0.2s ease-in-out"
                    {...tableHeadTextProps}
                  >
                    <chakra.p>{item.title}</chakra.p>
                    {item.isSortable && (
                      <Flex ml={2} flexDirection={"column"}>
                        {query?.Sort === item.extractor &&
                          query?.SortOrder === sortOrders.ASC && (
                            <Icon
                              as={APP_ICONS.UpArrow}
                              color={getColor(colorKeys.gray, colorMode)}
                              fontSize="16px"
                              boxSize={5}
                            />
                          )}
                        {query?.Sort === item.extractor &&
                          query?.SortOrder === sortOrders.DESC && (
                            <Icon
                              as={APP_ICONS.DownArrow}
                              color={getColor(colorKeys.gray, colorMode)}
                              fontSize="16px"
                              boxSize={5}
                            />
                          )}
                      </Flex>
                    )}
                  </Flex>
                </Tooltip>
              </Flex>
            </Th>
          ))}
      </Tr>
    </Thead>
  );
};

export default TableHead;
