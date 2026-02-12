import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { t } from '../../i18n';
import { useAuth } from '../../hooks/useAuth';
import { usePatients } from '../../hooks/usePatients';
import { AppHeader } from '../../components/common/AppHeader';
import { AppLoader } from '../../components/common/AppLoader';
import { AppError } from '../../components/common/AppError';
import { AppButton } from '../../components/common/AppButton';
import { theme } from '../../theme/theme';

export const DashboardScreen: React.FC = () => {
  const { user } = useAuth();
  const { data, isLoading, isError, refetch } = usePatients();

  if (isLoading) {
    return <AppLoader />;
  }

  if (isError) {
    return (
      <AppError
        message={t('errors.network')}
        onRetry={() => refetch()}
      />
    );
  }

  const patients = data?.data ?? [];
  const isEmpty = patients.length === 0;

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader
          title={t('dashboard.welcome')}
          subtitle={user?.name ?? user?.email}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('dashboard.patients')}</Text>
          {isEmpty ? (
            <View style={styles.empty}>
              <Text style={styles.emptyTitle}>{t('dashboard.emptyPatients')}</Text>
              <Text style={styles.emptyDesc}>
                {t('dashboard.emptyDescription')}
              </Text>
            </View>
          ) : (
            <View style={styles.list}>
              {patients.map((p) => (
                <View key={p.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{p.name}</Text>
                  {p.stage ? (
                    <Text style={styles.cardSub}>{p.stage}</Text>
                  ) : null}
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  section: {
    marginTop: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  empty: {
    padding: theme.spacing.xl,
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
  },
  emptyTitle: {
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.medium,
    color: theme.colors.text,
  },
  emptyDesc: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  list: {
    gap: theme.spacing.sm,
  },
  card: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.medium,
    color: theme.colors.text,
  },
  cardSub: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
});
