import { QueryClient } from '@tanstack/react-query';
import { STALE_TIME_MS, RETRY_COUNT } from '../utils/constants';
import type { ApiError } from '../types/api';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: RETRY_COUNT,
      staleTime: STALE_TIME_MS,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const handleQueryError = (error: unknown): void => {
  const apiError = error as ApiError;
  if (apiError?.status === 401) {
    return;
  }
  // Global error logging / toast can be wired here
};
