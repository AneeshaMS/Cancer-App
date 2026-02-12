export const QUERY_KEYS = {
  AUTH: {
    ME: ['auth', 'me'] as const,
  },
  PATIENTS: {
    ALL: ['patients'] as const,
    LIST: (page: number) => ['patients', 'list', page] as const,
    DETAIL: (id: string) => ['patients', 'detail', id] as const,
    JOURNEY: (id: string) => ['patients', 'journey', id] as const,
  },
} as const;
