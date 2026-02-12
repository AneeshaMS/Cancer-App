import { colors, Colors } from './colors';
import { typography, Typography } from './typography';
import { spacing, Spacing } from './spacing';

export const theme = {
  colors,
  typography,
  spacing,
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
} as const;

export type Theme = {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  radius: typeof theme.radius;
};

export { colors, typography, spacing };
