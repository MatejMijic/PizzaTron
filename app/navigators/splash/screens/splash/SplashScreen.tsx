import { Block, Text } from '@prototyp/skeletor';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { COLORS } from '~/modules/ui/colors';

import { SplashScreenLayout } from '../../ScreenLayout';

export function SplashScreen(): JSX.Element {
  return (
    <SplashScreenLayout>
      <Block alignSelf="center" justify="center" align="center" flex={1}>
        <Image
          style={styles.splashImage}
          source={require('~/assets/images/logo/logo.png')}
        />

        <Text
          margins={{
            marginTop: 20,
          }}
          font="AvenirLTStd-BlackOblique"
          size={30}
          color={COLORS.text[5]}>
          Pizz-á-tron
        </Text>
      </Block>
    </SplashScreenLayout>
  );
}

const styles = StyleSheet.create({
  splashImage: {
    transform: [
      {
        rotate: '-19deg',
      },
    ],
  },
});
