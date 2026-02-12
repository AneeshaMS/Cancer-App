import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { t } from '../../src/i18n';
import { useAuth } from '../../src/hooks/useAuth';
import { AppButton } from '../../src/components/common/AppButton';
import { theme } from '../../src/theme/theme';

export default function ProfileRoute() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <View style={styles.container}>
        {user ? (
          <View style={styles.user}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        ) : null}
        <AppButton
          title={t('auth.logout')}
          onPress={handleLogout}
          variant="outline"
          style={styles.logout}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  user: {
    marginBottom: theme.spacing.xl,
  },
  name: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text,
  },
  email: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  logout: {
    alignSelf: 'flex-start',
  },
});
