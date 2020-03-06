import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTransparent: true, headerTitle: '' }}
      />
    </Stack.Navigator>
  );
}
