import { usePagination } from "@ajna/pagination";
import { useColorMode } from "@chakra-ui/react";

const useTable = ({ limit, pageNo, totalPages, totalResults, onQueryChange }) => {
    const { colorMode } = useColorMode();

    limit = Number(limit);
    pageNo = Number(pageNo);

    const { pages, pagesCount, currentPage, setCurrentPage } = usePagination({
        pagesCount: totalPages,
        total: totalResults,
        limits: {
            outer: 4,
            inner: 4,
        },
        initialState: {
            pageSize: limit,
            currentPage: pageNo,
        },
    });

    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
        onQueryChange({ page: nextPage, limit: limit });
    };

    const handleSort = (key, order) => {
        onQueryChange({
            Sort: key,
            SortOrder: order,
            page: 1,
            limit: limit,
        });
        setCurrentPage(1);
    };

    return {
        pages,
        pagesCount,
        currentPage,
        handlePageChange,
        handleSort,
        colorMode,
        setCurrentPage 
    };
}

export default useTable