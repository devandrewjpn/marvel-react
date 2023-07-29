import { QueryClient } from 'react-query'

export const QUERY_STALE_TIME = 1000 * 30 // 30sec
export const QUERY_RETRY_STALE_TIME = 10000 * 60 // 1min
export const QUERY_CACHE_TIME = 1000 * 60 * 5 // 5min

export const queryRetryConfigs = {
    staleTime: QUERY_STALE_TIME,
    retryDelay: QUERY_RETRY_STALE_TIME,
}

/**
 * React-Query Options
 */
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: QUERY_CACHE_TIME,
            staleTime: QUERY_STALE_TIME,
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
})
