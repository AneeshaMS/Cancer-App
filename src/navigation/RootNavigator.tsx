import React from 'react';
import { Stack } from 'expo-router';

export const RootNavigator: React.FC = () => (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="(auth)" />
    <Stack.Screen name="(tabs)" />
  </Stack>
);
