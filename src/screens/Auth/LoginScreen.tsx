import React, { useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { t } from '../../i18n';
import { AppHeader } from '../../components/common/AppHeader';
import { LoginForm } from '../../features/auth/components/LoginForm';
import { useLogin } from '../../features/auth/hooks/useLogin';
import type { LoginFormValues } from '../../features/auth/types';
import { theme } from '../../theme/theme';

export const LoginScreen: React.FC = () => {
  const [error, setError] = useState<string | undefined>();
  const { mutate: login, isPending, isSuccess, isError } = useLogin();

  useEffect(() => {
    if (isSuccess) {
      router.replace('/(tabs)/home');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setError(t('auth.loginError'));
    }
  }, [isError]);

  const handleSubmit = (values: LoginFormValues) => {
    setError(undefined);
    login(values);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <AppHeader
            title={t('auth.loginTitle')}
            subtitle={t('auth.loginSubtitle')}
          />
          <LoginForm
            onSubmit={handleSubmit}
            loading={isPending}
            error={error}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
});
