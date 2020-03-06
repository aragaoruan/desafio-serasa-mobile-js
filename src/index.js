import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from '~/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d87516" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
