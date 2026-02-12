export const colors = {
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  secondary: '#64748B',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export type Colors = typeof colors;
