type UtilityColor = 'success' | 'error' | 'warning' | 'info';

type Range = '-2' | '-1' | 'base';

type UtilityColorConfig = Record<UtilityColor, Record<Range, string>>;

export const UTILITY_COLORS: UtilityColorConfig = {
  success: {
    base: '#1ED286',
    '-1': '#6CEAB5',
    '-2': '#C5F7E2',
  },
  error: {
    base: '#FF7A7A',
    '-1': '#FFADAD',
    '-2': '#FFDFDF',
  },
  warning: {
    base: '#FFC166',
    '-1': '#FFD699',
    '-2': '#FFF2DF',
  },
  info: {
    base: '#4DA2F0',
    '-1': '#AAD3F8',
    '-2': '#EDF5FC',
  },
};
