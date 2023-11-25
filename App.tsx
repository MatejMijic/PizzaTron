import { SkeletorProvider } from '@prototyp/skeletor';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { RootNavigator } from '~/modules/navigation';
import { COLORS } from '~/modules/ui/colors';

function App(): JSX.Element {
  return (
    <SkeletorProvider
      defaultFont="AvenirLTStd-Black"
      defaultFontSize={[20, 24]}
      defaultTextColor={COLORS.text[1]}>
      <RecoilRoot>
        <RootNavigator />
      </RecoilRoot>
    </SkeletorProvider>
  );
}

export default App;
