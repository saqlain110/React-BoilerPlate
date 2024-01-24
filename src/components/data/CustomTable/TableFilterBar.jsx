import {
  Button,
  Flex,
  HStack,
  Icon,
  Input,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { colorKeys, getColor } from "../../../constants/colors";
import CustomSelect from "../../forms/CustomSelect";
import APP_ICONS from "../../../constants/icons";

const TableFilterBar = ({
  hideFilterBar,
  hideSearch,
  searchPlaceholder,
  onQueryChange,
  searchKey = "searchKey",
  searchBarProps,
  filters,
  setCurrentPage,
  onRefresh,
  isRefreshing,
  limit,
  query,
  rightAddons,
}) => {
  const { colorMode } = useColorMode();

  if (hideFilterBar) return null;

  return (
    <Flex
      flexWrap={"wrap"}
      h="50px"
      my={2}
      justify="space-between"
      align="center"
      px="5px"
    >
      <HStack maxW={"full"} spacing={3}>
        {!hideSearch && (
          <Input
            type="search"
            placeholder={searchPlaceholder ? searchPlaceholder : "Search"}
            rounded="sm"
            size="sm"
            maxW="220px"
            bg={getColor(colorKeys.tableBackground, colorMode)}
            onChange={(e) => {
              console.log(e.target.value, searchKey);
              onQueryChange({
                [searchKey]: e.target.value,
                page: 1,
                limit: limit,
              });
              setCurrentPage(1);
            }}
            {...searchBarProps}
          />
        )}
        {filters?.map((item, index) => {
          return (
            <CustomSelect
              key={index}
              options={item.options?.map((i) => ({
                value: i.key,
                label: i.value,
              }))}
              placeholder={item.title}
              onInputChange={(e) => onQueryChange({ [item.searchKey]: e })}
              onChange={(value) => {
                onQueryChange({ [item.key]: value, page: 1 });
                setCurrentPage(1);
              }}
              value={query[item.key]}
            />
          );
        })}
      </HStack>
      <HStack spacing={3}>
        {rightAddons}
        {onRefresh && (
          <Button
            minW="100px"
            size="sm"
            leftIcon={<Icon as={APP_ICONS.REFRESH} fontSize={"20px"} />}
            isLoading={isRefreshing}
            onClick={onRefresh}
          >
            Refresh
          </Button>
        )}
      </HStack>
    </Flex>
  );
};

export default TableFilterBar;
