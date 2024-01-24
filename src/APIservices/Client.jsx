import * as React from "react";
import { QueryClient } from "@tanstack/react-query";
import { CACHE_TIME, STALE_TIME } from "../constants/api";
import { getItem, removeItem, setItem } from "../services/storageService";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { STORAGE_KEYS } from "../constants/queryKeys";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
      getNextPageParam: (lastPage) => {
        return lastPage?.meta?.hasNextPage;
      },
      onError: (e) => {
        console.log("api error ", e?.message.validationErrors);
      },
    },
    mutations: {
      onError: (e) => {
        console.log("api mutation error ", e?.message.validationErrors);
      },
    },
  },
});

export default function ApiClientProvider(props) {
  const { children } = props;

  const createpersister = React.useCallback((key = "reactQuery") => {
    return {
      restoreClient: () => getItem(key),
      removeClient: () => removeItem(key),
      persistClient: (client) => setItem(key, client),
    };
  }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: createpersister(),
        dehydrateOptions: {
          shouldDehydrateQuery: (query) => {
            return (
              query.state.status === "success" &&
              query.queryKey.includes(STORAGE_KEYS.GET_USER)
            );
          },
        },
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
