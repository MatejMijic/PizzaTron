import { Screen } from '@prototyp/skeletor';
import React, { PropsWithChildren } from 'react';

import { COLORS } from '~/modules/ui/colors';

export function SplashScreenLayout({ children }: PropsWithChildren) {
  return <Screen background={COLORS.primary.base}>{children}</Screen>;
}
