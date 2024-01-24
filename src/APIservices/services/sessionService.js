import { useQuery } from "@tanstack/react-query";
import { Get } from "../../api";
import { API_CONSTANTS } from "../../constants/api";
import { appendQueryParams } from "../../utils/queryUtils";
import { prepareData } from "../../utils/apiUtils";

export const useSessions = (params) => {
    params = prepareData(params, API_CONSTANTS.SESSION.filterKeys)
    return useQuery({
        queryKey: [API_CONSTANTS.SESSION.base, params],
        queryFn: async () => {
            const data = await Get({
                path: `${API_CONSTANTS.SESSION.admin}?${appendQueryParams(params)}`,
            });
            return data;
        },
        keepPreviousData: true,
        enabled: true,
    });
};