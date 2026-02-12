export const config = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com',
  appName: 'Cancer-App',
  env: process.env.EXPO_PUBLIC_ENV ?? 'development',
} as const;
