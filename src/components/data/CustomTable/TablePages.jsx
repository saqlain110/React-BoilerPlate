import {
  Flex,
  HStack,
  Text,
  useColorMode,
  Select,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../../constants/colors";
import {
  Pagination,
  PaginationContainer,
  PaginationNext,
  PaginationPage,
  PaginationPageGroup,
  PaginationPrevious,
  PaginationSeparator,
} from "@ajna/pagination";

const TablePages = ({
  limit,
  pageNo,
  onQueryChange,
  totalPages,
  totalResults,
  query,
  setCurrentPage,
  pagesCount,
  currentPage,
  handlePageChange,
  pages,
}) => {
  const { colorMode } = useColorMode();
  if (!limit || !pageNo || !onQueryChange || !totalPages) return null;

  return (
    <Flex justify={"space-between"}>
      <Text
        fontSize="sm"
        color={getColor(colorKeys.primaryText, colorMode)}
        my={2}
        mr={2}
        pl="5px"
      >
        Showing {pageNo * limit - limit + 1} to{" "}
        {pageNo * limit > totalResults ? totalResults : pageNo * limit} of{" "}
        {totalResults} records
      </Text>
      <HStack spacing={1}>
        <Select
          defaultValue={query?.pageSize}
          size="sm"
          onChange={(e) => {
            onQueryChange({
              limit: Number(e.target.value),
              page: 1,
            });
            setCurrentPage(1);
          }}
        >
          {[5, 10, 20, 50].map((item, index) => (
            <option selected={item === limit} key={index} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            align="center"
            justify="end"
            p={4}
            w="full"
            as={HStack}
            spacing={2}
          >
            <PaginationPrevious
              as={Button}
              size="sm"
              color={getColor(colorKeys.paginationNavigationColor, colorMode)}
              bg={getColor(colorKeys.paginationNavigationBgColor, colorMode)}
              _hover={{
                bg: getColor(colorKeys.paginationNavigationBgColor, colorMode),
              }}
            >
              <Text>Previous</Text>
            </PaginationPrevious>
            <PaginationPageGroup
              isInline
              align="center"
              separator={
                <PaginationSeparator
                  fontSize="sm"
                  color={getColor(colorKeys.primaryText, colorMode)}
                  w={10}
                  jumpSize={11}
                />
              }
            >
              {pages?.map((page) => (
                <PaginationPage
                  minW={"fit-content"}
                  w="8"
                  as={Button}
                  key={`pagination_page_${page}`}
                  page={page}
                  size="sm"
                  bg={getColor(
                    colorKeys.paginationNavigationBgColor,
                    colorMode
                  )}
                  _hover={{
                    bg: getColor(
                      colorKeys.paginationNavigationBgColor,
                      colorMode
                    ),
                  }}
                  fontSize="sm"
                  _current={{
                    bg: getColor(colorKeys.primaryButtonFill, colorMode),
                    color: getColor(colorKeys.white, colorMode),
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
              as={Button}
              size="sm"
              color={getColor(colorKeys.paginationNavigationColor, colorMode)}
              bg={getColor(colorKeys.paginationNavigationBgColor, colorMode)}
              _hover={{
                bg: getColor(colorKeys.paginationNavigationBgColor, colorMode),
              }}
            >
              <Text>Next</Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
      </HStack>
    </Flex>
  );
};

export default TablePages;
