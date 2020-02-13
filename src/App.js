import React from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator, StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';

import Navigation from 'navigators';
import configureStore from 'store/configureStore';

import customTheme from './theme.json';

const { store, persistor } = configureStore({});

applyDefaultInterceptors(store, api);

const theme = { ...darkTheme, ...customTheme };
const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </SafeAreaProvider>
      </ApplicationProvider>
    </PersistGate>
  </Provider>
);

export default App;
