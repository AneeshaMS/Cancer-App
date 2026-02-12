import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { t } from '../../../i18n';
import { theme } from '../../../theme/theme';
import { AppButton } from '../../../components/common/AppButton';
import { AppInput } from '../../../components/common/AppInput';
import type { LoginFormValues } from '../types';

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  loading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
  error,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ email, password });
  };

  return (
    <View style={styles.form}>
      <AppInput
        label={t('auth.email')}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        editable={!loading}
      />
      <AppInput
        label={t('auth.password')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoComplete="password"
        editable={!loading}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <AppButton
        title={t('auth.login')}
        onPress={handleSubmit}
        loading={loading}
        style={styles.submit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
  },
  error: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.error,
    marginBottom: theme.spacing.sm,
  },
  submit: {
    marginTop: theme.spacing.sm,
  },
});
