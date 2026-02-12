import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { t } from '../../i18n';
import { theme } from '../../theme/theme';
import { AppButton } from './AppButton';

interface AppErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const AppError: React.FC<AppErrorProps> = ({
  message,
  onRetry,
}) => (
  <View style={styles.container}>
    <Text style={styles.message}>
      {message ?? t('common.error')}
    </Text>
    {onRetry ? (
      <AppButton
        title={t('common.retry')}
        onPress={onRetry}
        variant="outline"
        style={styles.button}
      />
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  message: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  button: {
    minWidth: 120,
  },
});
