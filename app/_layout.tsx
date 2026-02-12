import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack, useRouter } from 'expo-router';
import { queryClient } from '../src/api/queryClient';
import { useAuthStore } from '../src/store/useAuthStore';
import { setUnauthorizedHandler } from '../src/api/axiosInstance';
import { ThemeProvider } from '../src/theme/ThemeContext';
import { theme } from '../src/theme/theme';

export default function RootLayout() {
  const router = useRouter();
  const hydrate = useAuthStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    setUnauthorizedHandler(() => {
      useAuthStore.getState().logout();
      router.replace('/(auth)/login');
    });
  }, [router]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
          </Stack>
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
