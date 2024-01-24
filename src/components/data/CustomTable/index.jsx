import React from "react";
import { Table, TableCaption, TableContainer, Box } from "@chakra-ui/react";
import { colorKeys, getColor } from "../../../constants/colors";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableEmpty from "./TableEmpty";
import TablePages from "./TablePages";
import TableFilterBar from "./TableFilterBar";
import useTable from "../../../hooks/useTable";

const CustomTable = ({
  //data manipulation
  head,
  data,
  loading,
  pageSize: limit,
  pageNo,
  query,
  onQueryChange,
  totalPages,
  totalResults,
  onRefresh,
  filters = [],
  caption,
  isRefreshing = false,
  searchPlaceholder,
  tableFor,
  rightAddons,

  //styles manipulations
  fixedHeight = true,
  rowHeight = "36px",
  size = "md",
  containerProps,
  tableProps,
  tableHeadProps,
  tbodyProps,
  hideFilterBar = false,
  tableWrapperProps,
  hideSearch = false,
  tableHeadTextProps,
  columnsPadding = "3",
  searchBarProps,
  theadRowProps,

  //actions
  onDelete,
  onEdit,
  onView,
}) => {
  const {
    pages,
    pagesCount,
    currentPage,
    colorMode,
    handlePageChange,
    handleSort,
    setCurrentPage,
  } = useTable({
    limit,
    pageNo,
    onQueryChange,
    totalPages,
    totalResults,
  });

  return (
    <TableContainer
      h={fixedHeight ? "calc(100vh - 140px)" : "auto"}
      {...containerProps}
    >
      <TableFilterBar
        limit={limit}
        filters={filters}
        hideFilterBar={hideFilterBar}
        hideSearch={hideSearch}
        isRefreshing={isRefreshing}
        onQueryChange={onQueryChange}
        onRefresh={onRefresh}
        searchBarProps={searchBarProps}
        searchPlaceholder={searchPlaceholder}
        setCurrentPage={setCurrentPage}
        query={query}
        rightAddons={rightAddons}
      />

      <Box
        h="calc(100vh - 285px)"
        overflowY={"auto"}
        bg={getColor(colorKeys.tableBackground, colorMode)}
        p="0 20px 15px"
        {...tableWrapperProps}
        style={{ position: "relative", zIndex: 0 }}
      >
        <Table
          variant="simple"
          size={size}
          opacity={isRefreshing ? "0.5" : "1"}
          {...tableProps}
        >
          {caption && <TableCaption>{caption}</TableCaption>}

          <TableHead
            columnsPadding={columnsPadding}
            handleSort={handleSort}
            query={query}
            head={head}
            tableHeadProps={tableHeadProps}
            theadRowProps={theadRowProps}
            tableHeadTextProps={tableHeadTextProps}
          />

          <TableBody
            columnsPadding={columnsPadding}
            data={data}
            head={head}
            loading={loading}
            rowHeight={rowHeight}
            tableFor={tableFor}
            tableHeadTextProps={tableHeadTextProps}
            tbodyProps={tbodyProps}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
          />
        </Table>

        <TableEmpty data={data} isRefreshing={isRefreshing} loading={loading} />
      </Box>

      <TablePages
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        limit={limit}
        onQueryChange={onQueryChange}
        pageNo={pageNo}
        pagesCount={pagesCount}
        query={query}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalResults={totalResults}
        pages={pages}
      />
    </TableContainer>
  );
};

export default React.memo(CustomTable);
