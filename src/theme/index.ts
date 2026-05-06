export const Colors = {
  primary: '#6A11CB',
  secondary: '#2575FC',
  background: '#FFFFFF',
  text: '#1F2937',
  textSecondary: '#6B7280',
  white: '#FFFFFF',
  error: '#EF4444',
  success: '#10B981',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  white70: 'rgba(255, 255, 255, 0.7)',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Typography = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    color: Colors.white,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    color: Colors.white,
  },
  body: {
    fontSize: 16,
    color: Colors.white,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.white70,
  },
};