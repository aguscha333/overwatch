import React from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';

import api from 'api';
import applyDefaultInterceptors from 'api/utils/applyDefaultInterceptors';

import Navigation from 'navigators';
import configureStore from 'store/configureStore';

import customTheme from './theme.json';

const { store, persistor } = configureStore({});

applyDefaultInterceptors(store, api);

const theme = { ...lightTheme, ...customTheme };
const App = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Navigation />
      </ApplicationProvider>
    </PersistGate>
  </Provider>
);

export default App;
