export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },
  PATIENTS: {
    LIST: '/patients',
    BY_ID: (id: string) => `/patients/${id}`,
    JOURNEY: (id: string) => `/patients/${id}/journey`,
  },
} as const;
