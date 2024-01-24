import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { INTEGRATION } from "../../../constants/enums";
import useDebounce from "../../../hooks/useDebounce";
import { useSessions } from "../../../APIservices/services/sessionService";
import { useCompanies } from "../../../APIservices/services/companyService";
import { useUsers } from "../../../APIservices/services/userService";

export const useMeasurementList = () => {
    const formDisclosure = useDisclosure();

    const [query, setQuery] = useState({
        integration: INTEGRATION.SKINIVE,
        page: 1,
        limit: 10,
    });
    const debouncedQuery = useDebounce(query);

    const { data, isLoading, refetch, isFetching } = useSessions(debouncedQuery);
    const { data: companyData } = useCompanies({
        searchKey: debouncedQuery?.companyIdQuery,
    });
    const { data: userData } = useUsers({
        searchKey: debouncedQuery?.userIdQuery,
    });

    const onQueryChange = (updatedQuery) => {
        setQuery((prevQuery) => ({ ...prevQuery, ...updatedQuery }));
    };

    const filters = {
        companyId: companyData?.docs?.map((item) => ({
            key: item._id,
            value: item.name,
        })),
        userId: userData?.docs?.map((item) => ({
            key: item._id,
            value: item.name,
        })),
    };

    return {
        query,
        onQueryChange,
        data,
        isLoading,
        refetch,
        isFetching,
        filters,
        formDisclosure,
    }
}