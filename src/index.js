import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import StatusBar from '~/components/StatusBar';
import Routes from '~/routes';
import store from '~/store/index';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </>
  );
}
