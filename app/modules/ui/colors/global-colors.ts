type GlobalColor = 'primary';

type Range = '-2' | '-1' | 'base';

type GlobalColorConfig = Record<GlobalColor, Record<Range, string>>;

export const GLOBAL_COLORS: GlobalColorConfig = {
  primary: {
    base: '#B95DE4',
    '-1': '#E5C3F5',
    '-2': '#F2F2F2',
  },
};
