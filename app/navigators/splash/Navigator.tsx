import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SplashScreen } from './screens';

const Stack = createNativeStackNavigator();

export function SplashNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
