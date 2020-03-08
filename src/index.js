import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import Routes from '~/routes';
import store from '~/store/index';
import { colors } from '~/styles';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.pontuacao_media.primaryColor}
        />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </>
  );
}
