import { CONTENT_COLORS } from './content-colors';
import { GLOBAL_COLORS } from './global-colors';
import { UTILITY_COLORS } from './utility-colors';

export const COLORS = {
  ...GLOBAL_COLORS,
  ...UTILITY_COLORS,
  text: CONTENT_COLORS,
  border: CONTENT_COLORS,
  icon: CONTENT_COLORS,
  background: CONTENT_COLORS,
};
