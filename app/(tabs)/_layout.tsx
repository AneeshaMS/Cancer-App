import React, { useEffect } from 'react';
import { Tabs, useRouter } from 'expo-router';
import { useAuthStore } from '../../src/store/useAuthStore';
import { t } from '../../src/i18n';

export default function TabsLayout() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated, router]);

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#2563EB',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: t('dashboard.title'),
          tabBarLabel: t('tabs.home'),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarLabel: t('tabs.profile'),
        }}
      />
    </Tabs>
  );
}
